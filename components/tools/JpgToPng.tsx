"use client";

import { useState } from "react";

export default function JpgToPng() {

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

        ctx?.drawImage(img, 0, 0);

        const png = canvas.toDataURL("image/png");

        setPreview(png);

      };

    };

    reader.readAsDataURL(file);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="file"
        accept="image/jpeg"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) convert(file);
        }}
      />

      {preview && (
        <div style={{ marginTop: 20 }}>

          <img
            src={preview}
            style={{ maxWidth: "300px", display: "block", marginBottom: 10 }}
          />

          <a
            href={preview}
            download="converted.png"
            style={{ padding: "10px 20px", background: "#000", color: "#fff" }}
          >
            Download PNG
          </a>

        </div>
      )}

    </div>
  );
}