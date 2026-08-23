import React, { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';

const SENSITIVITY = 0.8;

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const seekingRef = useRef<boolean>(false);
  const queuedTargetRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const performSeek = (targetTime: number) => {
      if (!video) return;
      seekingRef.current = true;
      try {
        video.currentTime = targetTime;
      } catch (err) {
        seekingRef.current = false;
      }
    };

    const handleSeeked = () => {
      if (queuedTargetRef.current !== null) {
        const nextTarget = queuedTargetRef.current;
        queuedTargetRef.current = null;
        performSeek(nextTarget);
      } else {
        seekingRef.current = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!video) return;
      const duration = video.duration;

      if (!duration || isNaN(duration) || duration === 0) {
        return;
      }

      const currentX = e.clientX;

      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const offset = (delta / window.innerWidth) * SENSITIVITY * duration;
      const targetTime = Math.max(
        0,
        Math.min(duration, video.currentTime + offset)
      );

      if (seekingRef.current) {
        queuedTargetRef.current = targetTime;
      } else {
        performSeek(targetTime);
      }
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#e5e7eb',
      }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      />
    </div>
  );
};
