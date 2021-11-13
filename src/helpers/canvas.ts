import type { Coords3D } from '~/types';

export function setupCanvas(
  video: HTMLVideoElement,
  canvas: HTMLCanvasElement,
  callback?: (ctx: CanvasRenderingContext2D) => void,
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';

  callback?.(ctx);
}

export function drawPath(
  ctx: CanvasRenderingContext2D,
  points: Coords3D,
  closePath: boolean,
) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }
  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}

export function drawPoint(
  ctx: CanvasRenderingContext2D,
  y: number,
  x: number,
  r: number,
) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
