"use client";

import { useState } from "react";

export default function PngToJpg() {

  const [preview, setPreview] = useState("");

  const convert = (file: File) => {

    const reader = new FileReader();

    reader.onload = (event) => {

      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        if (ctx) {

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);

          const jpg = canvas.toDataURL("image/jpeg", 0.9);
          setPreview(jpg);

        }

      };

    };

    reader.readAsDataURL(file);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="file"
        accept="image/png"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) convert(file);
        }}
      />

      {preview && (
        <div style={{ marginTop: 20 }}>

          <img src={preview} style={{ maxWidth: "300px" }} />

          <a
            href={preview}
            download="converted.jpg"
            style={{
              display: "block",
              marginTop: "10px",
              padding: "10px",
              background: "#000",
              color: "#fff",
              width: "fit-content"
            }}
          >
            Download JPG
          </a>

        </div>
      )}

    </div>
  );

}