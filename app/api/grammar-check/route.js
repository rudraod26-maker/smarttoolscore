const ALLOWED_LANGUAGES = new Set([
  "en-US",
  "en-GB",
  "fr",
  "de",
  "es",
  "it",
  "pt",
  "nl",
  "pl",
  "ru",
]);

export async function POST(req) {
  try {
    const { text, language } = await req.json();

    if (!text || !text.trim()) {
      return Response.json({ error: "Text is required." }, { status: 400 });
    }

    const selectedLanguage = language || "en-US";

    if (!ALLOWED_LANGUAGES.has(selectedLanguage)) {
      return Response.json(
        {
          error: "Selected language is not supported in this grammar checker.",
        },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();
    params.append("text", text);
    params.append("language", selectedLanguage);

    const ltRes = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const ltData = await ltRes.json();

    if (!ltRes.ok) {
      return Response.json(
        { error: ltData?.message || "LanguageTool request failed." },
        { status: 500 }
      );
    }

    let corrected = text;

    const sortedMatches = [...(ltData.matches || [])].sort(
      (a, b) => b.offset - a.offset
    );

    for (const match of sortedMatches) {
      const replacement = match?.replacements?.[0]?.value;
      if (!replacement) continue;

      corrected =
        corrected.slice(0, match.offset) +
        replacement +
        corrected.slice(match.offset + match.length);
    }

    return Response.json({
      original: text,
      corrected,
      matches: ltData.matches || [],
      language: selectedLanguage,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to check grammar." },
      { status: 500 }
    );
  }
}