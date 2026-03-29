"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QrCodeGenerator() {

  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  const generate = async () => {

    if (!text) return;

    try {

      const url = await QRCode.toDataURL(text);
      setQr(url);

    } catch {
      setQr("");
    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: 10
        }}
      />

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate QR Code
      </button>

      {qr && (
        <div style={{ marginTop: 20 }}>

          <img
            src={qr}
            style={{ width: "200px", marginBottom: 10 }}
          />

          <br />

          <a
            href={qr}
            download="qrcode.png"
            style={{
              padding: "10px 20px",
              background: "#000",
              color: "#fff"
            }}
          >
            Download QR Code
          </a>

        </div>
      )}

    </div>
  );
}