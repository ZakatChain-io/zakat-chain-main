import React from "react";

// Reusable Video Component
const VideoPlayer = ({
  src,
  poster,
  className = "",
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  width = "100%",
  height = "auto",
  onPlay,
  onPause,
  onEnded,
}) => {
  return (
    <video
      className={`rounded-[10px] shadow-lg ${className}`}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      width={width}
      height={height}
      poster={poster}
      preload="metadata"
      playsInline
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
    >
      <source src={src} type="video/mp4" />
      {/* Add WebM source for better browser support */}
      {src.includes(".mp4") && (
        <source src={src.replace(".mp4", ".webm")} type="video/webm" />
      )}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
