"use client";

import { useState } from "react";

export default function YoutubeThumbnailDownloader() {

  const [url, setUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const extract = () => {

    try {

      const videoId = url.split("v=")[1]?.split("&")[0];

      if (!videoId) {
        setThumbnail("");
        return;
      }

      const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      setThumbnail(thumb);

    } catch {
      setThumbnail("");
    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Paste YouTube video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={extract}
        style={{ padding: "10px 20px" }}
      >
        Get Thumbnail
      </button>

      {thumbnail && (
        <div style={{ marginTop: 20 }}>

          <img
            src={thumbnail}
            style={{
              maxWidth: "400px",
              display: "block",
              marginBottom: 10
            }}
          />

          <a
            href={thumbnail}
            download="thumbnail.jpg"
            style={{
              padding: "10px 20px",
              background: "#000",
              color: "#fff"
            }}
          >
            Download Thumbnail
          </a>

        </div>
      )}

    </div>
  );
}