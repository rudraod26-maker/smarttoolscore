export async function POST(req) {
  try {
    const { text, mode, bullet, length, plagiarism, humanize } = await req.json();

    if (!text || !text.trim()) {
      return Response.json({ result: "Please enter text" }, { status: 400 });
    }

    const finalLength = Math.min(Math.max(parseInt(length, 10) || 300, 30), 1000);

    let instruction = `
Paraphrase the text below.

STRICT RULES:
- Keep the output in the EXACT SAME language as the input.
- Do NOT translate the text.
- Do NOT switch to another language.
- Keep the same writing system/script as the input.
- Preserve the original meaning.
- Return ONLY the final paraphrased text.
- Do not add explanations, labels, notes, or quotation marks.

Paraphrasing mode: ${mode || "Natural"}
Target length: about ${finalLength} words.
`;

    if (plagiarism) {
      instruction += `
Make the wording more original and unique while preserving the meaning.
`;
    }

    if (humanize) {
      instruction += `
Make the wording sound natural and human-written.
Avoid robotic phrasing.
`;
    }

    if (bullet) {
      instruction += `
Format the result as bullet points.
`;
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "SmartToolsCore",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You are a multilingual paraphrasing assistant. You must preserve the input language exactly and never translate.",
          },
          {
            role: "user",
            content: `${instruction}\n\nText:\n${text}`,
          },
        ],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenRouter error:", data);
      return Response.json(
        { result: "Error generating text" },
        { status: 500 }
      );
    }

    return Response.json({
      result: data.choices?.[0]?.message?.content?.trim() || "No output",
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { result: "Error generating text" },
      { status: 500 }
    );
  }
}