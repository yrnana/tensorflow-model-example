import { useCallback, useRef } from 'react';
import { BlazeFaceModel, load } from '@tensorflow-models/blazeface';
import Video from '~/components/Video';
import { setupCanvas } from '~/helpers/canvas';

// https://github.com/tensorflow/tfjs-models/tree/master/blazeface
const FaceDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<BlazeFaceModel>();

  const render = useCallback(async () => {
    const model = modelRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!model || !video || !canvas || !ctx) {
      return;
    }

    const predictions = await model.estimateFaces(video, false, true, true);

    if (predictions.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < predictions.length; i++) {
        const start = predictions[i].topLeft as [number, number];
        const end = predictions[i].bottomRight as [number, number];
        const size = [end[0] - start[0], end[1] - start[1]];
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(start[0], start[1], size[0], size[1]);

        const landmarks = predictions[i].landmarks as number[][];
        ctx.fillStyle = '#00ff00';
        for (let j = 0; j < landmarks.length; j++) {
          const x = landmarks[j][0];
          const y = landmarks[j][1];
          ctx.fillRect(x, y, 5, 5);
        }
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
    setupCanvas(video, canvas);

    // load model
    modelRef.current = await load({
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

export default FaceDetection;
