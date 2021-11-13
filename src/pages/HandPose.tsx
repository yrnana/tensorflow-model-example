import { useCallback, useRef } from 'react';
import { HandPose as HandPoseModel, load } from '@tensorflow-models/handpose';
import Video from '~/components/Video';
import { drawPath, drawPoint, setupCanvas } from '~/helpers/canvas';

const fingerLookupIndices = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
} as const;

// https://github.com/tensorflow/tfjs-models/tree/master/handpose
const HandPose = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<HandPoseModel>();

  const render = useCallback(async () => {
    const model = modelRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!model || !video || !canvas || !ctx) {
      return;
    }

    const predictions = await model.estimateHands(video, true);
    if (predictions.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const keypoints = predictions[0].landmarks;
      for (let i = 0; i < keypoints.length; i++) {
        const y = keypoints[i][0];
        const x = keypoints[i][1];
        drawPoint(ctx, x - 2, y - 2, 3);
      }

      const fingers = Object.keys(
        fingerLookupIndices,
      ) as (keyof typeof fingerLookupIndices)[];
      for (let i = 0; i < fingers.length; i++) {
        const finger = fingers[i];
        const points = fingerLookupIndices[finger].map((idx) => keypoints[idx]);
        drawPath(ctx, points, false);
      }
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
    setupCanvas(video, canvas, (ctx) => {
      ctx.strokeStyle = '#ff0000';
      ctx.fillStyle = '#ff0000';
    });

    // load model
    modelRef.current = await load();

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

export default HandPose;
