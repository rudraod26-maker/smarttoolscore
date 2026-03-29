"use client";

import { useState } from "react";

export default function ImageCrop() {

  const [preview, setPreview] = useState("");

  const crop = (file: File) => {

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

          const data = canvas.toDataURL("image/png");
          setPreview(data);

        }

      };

    };

    reader.readAsDataURL(file);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) crop(file);
        }}
      />

      {preview && (
        <img
          src={preview}
          style={{ maxWidth: "300px", marginTop: "20px" }}
        />
      )}

    </div>
  );

}