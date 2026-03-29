"use client";

import { useState } from "react";

export default function ScreenshotToPdf() {

  const [pdfUrl, setPdfUrl] = useState("");

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

        const imageData = canvas.toDataURL("image/png");

        const pdfContent = `
          <html>
            <body style="margin:0">
              <img src="${imageData}" style="width:100%"/>
            </body>
          </html>
        `;

        const blob = new Blob([pdfContent], { type: "application/pdf" });

        const url = URL.createObjectURL(blob);

        setPdfUrl(url);

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
          if (file) convert(file);
        }}
      />

      {pdfUrl && (
        <div style={{ marginTop: 20 }}>

          <a
            href={pdfUrl}
            download="screenshot.pdf"
            style={{
              padding: "10px 20px",
              background: "#000",
              color: "#fff"
            }}
          >
            Download PDF
          </a>

        </div>
      )}

    </div>
  );
}