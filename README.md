# tensorflow model example

## video -> canvas

```ts
const takePhoto = () => {
  const video = videoRef.current;
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');
  if (video && canvas && ctx) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.save();
    ctx.translate(video.videoWidth, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    ctx.restore();
  }
};
```

## reference

- https://www.tensorflow.org/js?hl=ko
- https://www.tensorflow.org/js/models?hl=ko
- https://github.com/tensorflow/tfjs-examples/tree/master/simple-object-detection
