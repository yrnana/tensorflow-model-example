export async function setupCamera(
  video: HTMLVideoElement,
  constraints?: MediaStreamConstraints,
) {
  return new Promise<MediaStream>((resolve, reject) => {
    if (navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(
          constraints || {
            audio: false,
            video: {
              width: 960,
              height: 540,
              facingMode: 'user',
            },
          },
        )
        .then((stream) => {
          video.srcObject = stream;
          resolve(stream);
        })
        .catch(reject);
    } else {
      reject(new Error('mediaDevices not support'));
    }
  });
}

export function mergeRefs<T>(refs: Array<React.ForwardedRef<T>>) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
