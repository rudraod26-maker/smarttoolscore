"use client";

import { useState } from "react";
import jsQR from "jsqr";

export default function QrCodeScanner() {

  const [result, setResult] = useState("");

  const scan = (file: File) => {

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

        const imageData = ctx?.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );

        if (!imageData) return;

        const code = jsQR(
          imageData.data,
          imageData.width,
          imageData.height
        );

        if (code) {
          setResult(code.data);
        } else {
          setResult("No QR code detected");
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
          if (file) scan(file);
        }}
      />

      {result && (
        <div style={{ marginTop: 20 }}>

          <h3>Result:</h3>

          <p>{result}</p>

        </div>
      )}

    </div>
  );
}