import { useCallback, useRef } from 'react';
import {
  FaceLandmarksDetector,
  load,
  SupportedPackages,
} from '@tensorflow-models/face-landmarks-detection';
import Video from '~/components/Video';
import { drawPath, setupCanvas } from '~/helpers/canvas';
import { TRIANGULATION } from '~/helpers/triangulation';
import type { Coord3D, Coords3D } from '~/types';

const NUM_KEYPOINTS = 468;
const NUM_IRIS_KEYPOINTS = 5;
const GREEN = '#32ee51';
const RED = '#FF2C35';

// https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection
const FaceLandmarksDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<FaceLandmarksDetector>();

  const render = useCallback(async () => {
    const model = modelRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!model || !video || !canvas || !ctx) {
      return;
    }

    const predictions = await model.estimateFaces({
      input: video,
      returnTensors: false,
      flipHorizontal: true,
      predictIrises: true,
    });

    if (predictions.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      predictions.forEach((prediction) => {
        const keypoints = prediction.scaledMesh as Coords3D;

        ctx.strokeStyle = GREEN;
        ctx.lineWidth = 0.5;

        for (let i = 0; i < TRIANGULATION.length / 3; i++) {
          const points: Coords3D = [
            TRIANGULATION[i * 3],
            TRIANGULATION[i * 3 + 1],
            TRIANGULATION[i * 3 + 2],
          ].map((index) => keypoints[index]);
          drawPath(ctx, points, true);
        }

        if (keypoints.length > NUM_KEYPOINTS) {
          ctx.strokeStyle = RED;
          ctx.lineWidth = 1;

          const leftCenter = keypoints[NUM_KEYPOINTS];
          const leftDiameterY = distance(
            keypoints[NUM_KEYPOINTS + 4],
            keypoints[NUM_KEYPOINTS + 2],
          );
          const leftDiameterX = distance(
            keypoints[NUM_KEYPOINTS + 3],
            keypoints[NUM_KEYPOINTS + 1],
          );

          ctx.beginPath();
          ctx.ellipse(
            leftCenter[0],
            leftCenter[1],
            leftDiameterX / 2,
            leftDiameterY / 2,
            0,
            0,
            2 * Math.PI,
          );
          ctx.stroke();

          if (keypoints.length > NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS) {
            const rightCenter = keypoints[NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS];
            const rightDiameterY = distance(
              keypoints[NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS + 2],
              keypoints[NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS + 4],
            );
            const rightDiameterX = distance(
              keypoints[NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS + 3],
              keypoints[NUM_KEYPOINTS + NUM_IRIS_KEYPOINTS + 1],
            );

            ctx.beginPath();
            ctx.ellipse(
              rightCenter[0],
              rightCenter[1],
              rightDiameterX / 2,
              rightDiameterY / 2,
              0,
              0,
              2 * Math.PI,
            );
            ctx.stroke();
          }
        }
      });
    }

    requestAnimationFrame(render);
  }, []);

  const onLoadedMetadata = useCallback(async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) {
      return;
    }

    // setup canvas
    setupCanvas(video, canvas);

    // load model
    modelRef.current = await load(SupportedPackages.mediapipeFacemesh, {
      maxFaces: 1,
    });

    // render
    requestAnimationFrame(render);
  }, [render]);

  return (
    <div className="relative">
      <Video ref={videoRef} onLoadedMetadata={onLoadedMetadata} />
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
};

export default FaceLandmarksDetection;

function distance(a: Coord3D, b: Coord3D) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}
