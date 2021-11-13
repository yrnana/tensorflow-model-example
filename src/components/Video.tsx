import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { mergeRefs, setupCamera } from '~/helpers/utils';

type VideoProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ onLoadedMetadata, ...props }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const onLoaded = useCallback(
      (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const video = videoRef.current;
        if (!video) return;

        video.width = video.videoWidth;
        video.height = video.videoHeight;
        onLoadedMetadata?.(e);
      },
      [onLoadedMetadata],
    );

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        setupCamera(video);
      }
    }, [ref]);

    return (
      <video
        {...props}
        autoPlay
        playsInline
        muted
        onLoadedMetadata={onLoaded}
        className="transform -scale-x-100"
        ref={mergeRefs([videoRef, ref])}
      />
    );
  },
);

Video.displayName = 'Video';

export default Video;
