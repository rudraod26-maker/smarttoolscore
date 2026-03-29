"use client";

import { useState } from "react";

export default function ImageResizer() {

  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const resize = (file: File) => {

    const reader = new FileReader();

    reader.onload = (event) => {

      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx?.drawImage(img, 0, 0, width, height);

        const url = canvas.toDataURL("image/jpeg");

        setPreview(url);

      };

    };

    reader.readAsDataURL(file);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
        style={{ padding: "10px", marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        style={{ padding: "10px", marginBottom: 10 }}
      />

      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) resize(file);
        }}
      />

      {preview && (
        <div style={{ marginTop: 20 }}>

          <img
            src={preview}
            style={{ maxWidth: "300px" }}
          />

        </div>
      )}

    </div>
  );
}