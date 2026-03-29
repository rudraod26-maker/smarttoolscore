"use client";

import { useState } from "react";

export default function LoremIpsumGenerator() {

  const [count, setCount] = useState(3);
  const [text, setText] = useState("");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const generate = () => {

    let result = "";

    for (let i = 0; i < count; i++) {

      result += lorem + "\n\n";

    }

    setText(result);

  };

  return (
    <div style={{ marginTop: 20 }}>

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        placeholder="Number of paragraphs"
        style={{
          padding: "10px",
          marginBottom: 10
        }}
      />

      <br />

      <button
        onClick={generate}
        style={{ padding: "10px 20px" }}
      >
        Generate Text
      </button>

      {text && (
        <div style={{ marginTop: 20 }}>

          <textarea
            rows={10}
            readOnly
            value={text}
            style={{
              width: "100%",
              padding: "10px"
            }}
          />

        </div>
      )}

    </div>
  );
}