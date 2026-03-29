"use client";

import { useState } from "react";

export default function VideoMetadataViewer() {

  const [info, setInfo] = useState<any>(null);

  const loadVideo = (file: File) => {

    const url = URL.createObjectURL(file);

    const video = document.createElement("video");

    video.preload = "metadata";
    video.src = url;

    video.onloadedmetadata = () => {

      setInfo({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        type: file.type,
        duration: video.duration.toFixed(2) + " seconds",
        resolution: video.videoWidth + " x " + video.videoHeight
      });

      URL.revokeObjectURL(url);
    };

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) loadVideo(file);
        }}
      />

      {info && (
        <div style={{ marginTop: 20 }}>

          <p><strong>File Name:</strong> {info.name}</p>

          <p><strong>File Size:</strong> {info.size}</p>

          <p><strong>File Type:</strong> {info.type}</p>

          <p><strong>Duration:</strong> {info.duration}</p>

          <p><strong>Resolution:</strong> {info.resolution}</p>

        </div>
      )}

    </div>
  );
}