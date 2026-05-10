import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const body = await req.json();

    const text = body.text?.trim();
    const mode = body.mode || "Short Summary";

    if (!text) {
      return Response.json(
        {
          error: "Text is required.",
        },
        {
          status: 400,
        }
      );
    }

    let prompt = "";

    switch (mode) {
      case "Detailed Summary":
        prompt =
          "Create a detailed summary of the following text.";
        break;

      case "Bullet Points":
        prompt =
          "Summarize the following text into bullet points.";
        break;

      case "Academic":
        prompt =
          "Create a formal academic summary of the following content.";
        break;

      case "Simple Language":
        prompt =
          "Summarize the following text in simple easy language.";
        break;

      default:
        prompt =
          "Create a concise short summary of the following text.";
    }

    const completion =
      await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are an expert AI summarization assistant.",
          },
          {
            role: "user",
            content: `${prompt}\n\n${text}`,
          },
        ],

        temperature: 0.5,
        max_tokens: 800,
      });

    const summary =
      completion.choices?.[0]?.message?.content || "";

    return Response.json({
      success: true,
      summary,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to summarize text.",
      },
      {
        status: 500,
      }
    );
  }
}