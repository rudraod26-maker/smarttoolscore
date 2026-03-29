"use client";

import { useState } from "react";

export default function ImageCompressor() {

  const [original, setOriginal] = useState<number | null>(null);
  const [compressed, setCompressed] = useState<number | null>(null);
  const [preview, setPreview] = useState<string>("");

  const compress = (file: File) => {

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

        canvas.toBlob(
          (blob) => {

            if (!blob) return;

            setOriginal(file.size);
            setCompressed(blob.size);

            const url = URL.createObjectURL(blob);
            setPreview(url);

          },
          "image/jpeg",
          0.6
        );

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
          if (file) compress(file);
        }}
      />

      {original && (
        <div style={{ marginTop: 20 }}>

          <p><strong>Original Size:</strong> {(original / 1024).toFixed(2)} KB</p>

          <p><strong>Compressed Size:</strong> {(compressed! / 1024).toFixed(2)} KB</p>

          <img
            src={preview}
            style={{
              maxWidth: "300px",
              marginTop: 10
            }}
          />

        </div>
      )}

    </div>
  );
}