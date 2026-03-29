"use client";

import { useState } from "react";

export default function ImageCrop() {

  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const crop = (file: File) => {

    const reader = new FileReader();

    reader.onload = (event) => {

      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        const x = (img.width - width) / 2;
        const y = (img.height - height) / 2;

        ctx?.drawImage(
          img,
          x,
          y,
          width,
          height,
          0,
          0,
          width,
          height
        );

        const cropped = canvas.toDataURL("image/png");

        setPreview(cropped);

      };

    };

    reader.readAsDataURL(file);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        placeholder="Crop Width"
        style={{ padding: "10px", marginRight: 10 }}
      />

      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        placeholder="Crop Height"
        style={{ padding: "10px" }}
      />

      <br /><br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) crop(file);
        }}
      />

      {preview && (
        <div style={{ marginTop: 20 }}>

          <img
            src={preview}
            style={{
              maxWidth: "300px",
              display: "block",
              marginBottom: 10
            }}
          />

          <a
            href={preview}
            download="cropped.png"
            style={{
              padding: "10px 20px",
              background: "#000",
              color: "#fff"
            }}
          >
            Download Cropped Image
          </a>

        </div>
      )}

    </div>
  );
}