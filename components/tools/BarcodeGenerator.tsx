"use client";

import { useState, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function BarcodeGenerator() {

  const [value, setValue] = useState("");
  const svgRef = useRef<SVGSVGElement | null>(null);

  const generate = () => {

    if (!value) return;

    if (svgRef.current) {

      JsBarcode(svgRef.current, value, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 80,
        displayValue: true
      });

    }

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="text"
        placeholder="Enter text or number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
        Generate Barcode
      </button>

      <div style={{ marginTop: 20 }}>

        <svg ref={svgRef}></svg>

      </div>

    </div>
  );
}