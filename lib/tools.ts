export type Tool = {
  name: string;
  slug: string;
  description: string;
  category: string;
  isPopular?: boolean;
};

export const tools: Tool[] = [

/* ================= TEXT TOOLS ================= */

{ name: "Word Counter", slug: "word-counter", description: "Count words instantly.", category: "Text Tools", isPopular: true },
{ name: "Character Counter", slug: "character-counter", description: "Count characters quickly.", category: "Text Tools", isPopular: true },
{ name: "Sentence Counter", slug: "sentence-counter", description: "Count sentences in text.", category: "Text Tools" },
{ name: "Paragraph Counter", slug: "paragraph-counter", description: "Count paragraphs easily.", category: "Text Tools" },
{ name: "Case Converter", slug: "case-converter", description: "Convert text case formats.", category: "Text Tools", isPopular: true },
{ name: "Text Repeater", slug: "text-repeater", description: "Repeat text multiple times.", category: "Text Tools", isPopular: true },
{ name: "Remove Extra Spaces", slug: "remove-extra-spaces", description: "Clean extra spaces.", category: "Text Tools" },
{ name: "Text Sorter", slug: "text-sorter", description: "Sort text alphabetically.", category: "Text Tools" },
{ name: "Duplicate Line Remover", slug: "duplicate-line-remover", description: "Remove duplicate lines.", category: "Text Tools" },
{ name: "Text Reverser", slug: "text-reverser", description: "Reverse text instantly.", category: "Text Tools" },

/* ================= SEO TOOLS ================= */

{ name: "Meta Tag Generator", slug: "meta-tag-generator", description: "Generate SEO meta tags.", category: "SEO Tools", isPopular: true },
{ name: "Keyword Density Checker", slug: "keyword-density-checker", description: "Analyze keyword density.", category: "SEO Tools" },
{ name: "Slug Generator", slug: "slug-generator", description: "Create SEO-friendly URLs.", category: "SEO Tools" },
{ name: "Robots.txt Generator", slug: "robots-txt-generator", description: "Generate robots.txt file.", category: "SEO Tools" },
{ name: "Sitemap Generator", slug: "sitemap-generator", description: "Generate XML sitemap.", category: "SEO Tools" },
{ name: "SERP Preview Tool", slug: "serp-preview", description: "Preview Google search snippet.", category: "SEO Tools" },
{ name: "Keyword Suggestion Tool", slug: "keyword-suggestion", description: "Find keyword ideas.", category: "SEO Tools" },
{ name: "Backlink Checker", slug: "backlink-checker", description: "Check backlinks.", category: "SEO Tools" },
{ name: "Domain Authority Checker", slug: "domain-authority-checker", description: "Check domain authority.", category: "SEO Tools" },
{ name: "Page Speed Checker", slug: "page-speed-checker", description: "Check website speed.", category: "SEO Tools" },

/* ================= DEV TOOLS ================= */

{ name: "JSON Formatter", slug: "json-formatter", description: "Format JSON data.", category: "Developer Tools", isPopular: true },
{ name: "JSON Validator", slug: "json-validator", description: "Validate JSON structure.", category: "Developer Tools" },
{ name: "Base64 Encoder", slug: "base64-encoder", description: "Encode text to Base64.", category: "Developer Tools" },
{ name: "Base64 Decoder", slug: "base64-decoder", description: "Decode Base64 strings.", category: "Developer Tools" },
{ name: "URL Encoder", slug: "url-encoder", description: "Encode URLs.", category: "Developer Tools" },
{ name: "URL Decoder", slug: "url-decoder", description: "Decode URLs.", category: "Developer Tools" },
{ name: "HTML Minifier", slug: "html-minifier", description: "Minify HTML code.", category: "Developer Tools" },
{ name: "CSS Minifier", slug: "css-minifier", description: "Minify CSS code.", category: "Developer Tools" },
{ name: "JS Minifier", slug: "js-minifier", description: "Minify JavaScript.", category: "Developer Tools" },
{ name: "Regex Tester", slug: "regex-tester", description: "Test regex patterns.", category: "Developer Tools" },

/* ================= IMAGE TOOLS ================= */

{ name: "Image Compressor", slug: "image-compressor", description: "Reduce image size.", category: "Image Tools", isPopular: true },
{ name: "Image Resizer", slug: "image-resizer", description: "Resize images easily.", category: "Image Tools" },
{ name: "Image Cropper", slug: "image-cropper", description: "Crop images.", category: "Image Tools" },
{ name: "Image Converter", slug: "image-converter", description: "Convert image formats.", category: "Image Tools" },
{ name: "PNG to JPG", slug: "png-to-jpg", description: "Convert PNG to JPG.", category: "Image Tools" },
{ name: "JPG to PNG", slug: "jpg-to-png", description: "Convert JPG to PNG.", category: "Image Tools" },
{ name: "Image to Base64", slug: "image-to-base64", description: "Convert image to Base64.", category: "Image Tools" },
{ name: "Base64 to Image", slug: "base64-to-image", description: "Convert Base64 to image.", category: "Image Tools" },
{ name: "Image Metadata Viewer", slug: "image-metadata-viewer", description: "View image metadata.", category: "Image Tools" },
{ name: "Image Color Extractor", slug: "image-color-extractor", description: "Extract colors from image.", category: "Image Tools" },

/* ================= SECURITY TOOLS ================= */

{ name: "Password Generator", slug: "password-generator", description: "Generate strong passwords.", category: "Security Tools", isPopular: true },
{ name: "Password Strength Checker", slug: "password-strength-checker", description: "Check password strength.", category: "Security Tools" },
{ name: "MD5 Generator", slug: "md5-generator", description: "Generate MD5 hash.", category: "Security Tools" },
{ name: "SHA256 Generator", slug: "sha256-generator", description: "Generate SHA256 hash.", category: "Security Tools" },
{ name: "UUID Generator", slug: "uuid-generator", description: "Generate UUID.", category: "Security Tools" },
{ name: "IP Lookup", slug: "ip-lookup", description: "Lookup IP address.", category: "Security Tools" },
{ name: "Whois Lookup", slug: "whois-lookup", description: "Check domain WHOIS.", category: "Security Tools" },
{ name: "SSL Checker", slug: "ssl-checker", description: "Check SSL certificate.", category: "Security Tools" },
{ name: "JWT Decoder", slug: "jwt-decoder", description: "Decode JWT tokens.", category: "Security Tools" },
{ name: "Encryption Tool", slug: "encryption-tool", description: "Encrypt text data.", category: "Security Tools" },

/* ================= DESIGN TOOLS ================= */

{ name: "Color Picker", slug: "color-picker", description: "Pick colors easily.", category: "Design Tools" },
{ name: "Gradient Generator", slug: "gradient-generator", description: "Generate gradients.", category: "Design Tools" },
{ name: "Box Shadow Generator", slug: "box-shadow-generator", description: "Create CSS shadows.", category: "Design Tools" },
{ name: "Border Radius Generator", slug: "border-radius-generator", description: "Generate border radius.", category: "Design Tools" },
{ name: "CSS Button Generator", slug: "css-button-generator", description: "Create CSS buttons.", category: "Design Tools" },
{ name: "Favicon Generator", slug: "favicon-generator", description: "Generate favicon.", category: "Design Tools" },
{ name: "Placeholder Generator", slug: "placeholder-generator", description: "Generate placeholder images.", category: "Design Tools" },
{ name: "Color Converter", slug: "color-converter", description: "Convert HEX/RGB colors.", category: "Design Tools" },
{ name: "Font Pair Generator", slug: "font-pair-generator", description: "Find font combinations.", category: "Design Tools" },
{ name: "CSS Grid Generator", slug: "css-grid-generator", description: "Create CSS grid layouts.", category: "Design Tools" },

/* ================= EXTRA TOOLS ================= */

{ name: "HTML Formatter", slug: "html-formatter", description: "Format HTML code.", category: "Developer Tools" },
{ name: "CSS Formatter", slug: "css-formatter", description: "Format CSS code.", category: "Developer Tools" },
{ name: "JS Formatter", slug: "js-formatter", description: "Format JavaScript.", category: "Developer Tools" },
{ name: "Lorem Ipsum Generator", slug: "lorem-ipsum-generator", description: "Generate dummy text.", category: "Text Tools" },
{ name: "QR Code Generator", slug: "qr-code-generator", description: "Generate QR codes.", category: "Other Tools", isPopular: true },
{ name: "QR Code Scanner", slug: "qr-code-scanner", description: "Scan QR codes.", category: "Other Tools" },
{ name: "URL Shortener", slug: "url-shortener", description: "Shorten long URLs.", category: "Other Tools" },
{ name: "UUID Validator", slug: "uuid-validator", description: "Validate UUID.", category: "Developer Tools" },
{ name: "Text to Speech", slug: "text-to-speech", description: "Convert text to audio.", category: "Other Tools" },
{ name: "Speech to Text", slug: "speech-to-text", description: "Convert speech to text.", category: "Other Tools" },

];