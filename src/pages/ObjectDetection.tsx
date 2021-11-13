import { useEffect, useRef, useState } from 'react';
import {
  load,
  ObjectDetection as ObjectDetectionModel,
} from '@tensorflow-models/coco-ssd';

// https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd
const ObjectDetection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<ObjectDetectionModel>();

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    const image = imgRef.current;
    if (file && image) {
      image.src = URL.createObjectURL(file);
    }
  };

  const onImageLoad = async () => {
    const model = modelRef.current;
    const image = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (
      !image ||
      image.src.includes('placeholder') ||
      !model ||
      !canvas ||
      !ctx
    ) {
      return;
    }

    canvas.width = image.width;
    canvas.height = image.height;

    const predictions = await model.detect(image);
    console.log(predictions);

    ctx.drawImage(image, 0, 0);
    ctx.font = '14px system-ui, -apple-system';

    if (predictions.length > 0) {
      predictions.forEach((prediction) => {
        ctx.beginPath();
        ctx.rect(...prediction.bbox);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ff0000';
        ctx.fillStyle = '#ff0000';
        ctx.stroke();
        ctx.fillText(
          prediction.score.toFixed(3) + ' ' + prediction.class,
          prediction.bbox[0],
          prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10,
        );
      });
    }
  };

  useEffect(() => {
    load().then((model) => {
      modelRef.current = model;
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          disabled={!isLoaded}
          onChange={onFileChange}
        />
      </div>
      <div className="relative">
        <img
          src="https://via.placeholder.com/400"
          alt="preview"
          ref={imgRef}
          onLoad={onImageLoad}
        />
        <canvas ref={canvasRef} className="absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default ObjectDetection;
