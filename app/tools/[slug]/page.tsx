import { tools } from "@/lib/tools";

/* TEXT TOOLS */
import WordCounter from "@/components/tools/WordCounter";
import CharacterCounter from "@/components/tools/CharacterCounter";
import SentenceCounter from "@/components/tools/SentenceCounter";
import ParagraphCounter from "@/components/tools/ParagraphCounter";
import ReadingTimeCalculator from "@/components/tools/ReadingTimeCalculator";
import CaseConverter from "@/components/tools/CaseConverter";
import TextRepeater from "@/components/tools/TextRepeater";
import AITitleGenerator from "@/components/tools/AITitleGenerator";
import AIBlogIdeaGenerator from "@/components/tools/AIBlogIdeaGenerator";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

/* SEO TOOLS */
import KeywordDensityChecker from "@/components/tools/KeywordDensityChecker";
import MetaTagGenerator from "@/components/tools/MetaTagGenerator";
import SitemapGenerator from "@/components/tools/SitemapGenerator";
import RobotsTxtGenerator from "@/components/tools/RobotsTxtGenerator";
import KeywordResearchTool from "@/components/tools/KeywordResearchTool";
import BacklinkChecker from "@/components/tools/BacklinkChecker";
import SeoAnalyzer from "@/components/tools/WebsiteSEOAnalyzer";
import DomainAuthorityChecker from "@/components/tools/DomainAuthorityChecker";
import PageSpeedChecker from "@/components/tools/PageSpeedChecker";
import HashtagGenerator from "@/components/tools/HashtagGenerator";

/* DEV TOOLS */
import JsonFormatter from "@/components/tools/JsonFormatter";
import JsonToCsvConverter from "@/components/tools/JsonToCsvConverter";
import Base64Encoder from "@/components/tools/Base64Encoder";
import UrlEncoder from "@/components/tools/UrlEncoder";
import JwtDecoder from "@/components/tools/JwtDecoder";
import UuidGenerator from "@/components/tools/UuidGenerator";
import UuidBulkGenerator from "@/components/tools/UuidBulkGenerator";
import RegexTester from "@/components/tools/RegexTester";
import HashGenerator from "@/components/tools/HashGenerator";
import HtmlMinifier from "@/components/tools/HtmlMinifier";
import CssMinifier from "@/components/tools/CssMinifier";
import MarkdownToHtml from "@/components/tools/MarkdownToHtml";
import TextDiffChecker from "@/components/tools/TextDiffChecker";

/* IMAGE TOOLS */
import ImageCompressor from "@/components/tools/ImageCompressor";
import ImageResizer from "@/components/tools/ImageResizer";
import ImageCrop from "@/components/tools/ImageCrop";
import JpgToPng from "@/components/tools/JpgToPng";
import PngToJpg from "@/components/tools/PngToJpg";
import ImageToBase64 from "@/components/tools/ImageToBase64";
import ScreenshotToPdf from "@/components/tools/ScreenshotToPdf";
import GifMaker from "@/components/tools/GifMaker";
import YoutubeThumbnailDownloader from "@/components/tools/YoutubeThumbnailDownloader";
import VideoMetadataViewer from "@/components/tools/VideoMetadataViewer";

/* FINANCE */
import EmiCalculator from "@/components/tools/EmiCalculator";
import LoanCalculator from "@/components/tools/LoanCalculator";
import SipCalculator from "@/components/tools/SipCalculator";
import CompoundInterest from "@/components/tools/CompoundInterestCalculator";
import SalaryAfterTaxCalculator from "@/components/tools/SalaryAfterTaxCalculator";
import InflationCalculator from "@/components/tools/InflationCalculator";
import RetirementCalculator from "@/components/tools/RetirementCalculator";
import CurrencyConverter from "@/components/tools/CurrencyConverter";
import DiscountCalculator from "@/components/tools/DiscountCalculator";
import TipCalculator from "@/components/tools/TipCalculator";

/* CALCULATORS */
import PercentageCalculator from "@/components/tools/PercentageCalculator";
import AgeCalculator from "@/components/tools/AgeCalculator";
import TimeCalculator from "@/components/tools/TimeCalculator";
import DateDifferenceCalculator from "@/components/tools/DateDifferenceCalculator";
import UnitConverter from "@/components/tools/UnitConverter";
import ScientificCalculator from "@/components/tools/ScientificCalculator";
import GpaCalculator from "@/components/tools/GpaCalculator";
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";

/* OTHER */
import QrCodeGenerator from "@/components/tools/QrCodeGenerator";
import QrCodeScanner from "@/components/tools/QrCodeScanner";
import BarcodeGenerator from "@/components/tools/BarcodeGenerator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import ColorPicker from "@/components/tools/ColorPicker";

/* ================= TOOL MAP ================= */
const toolComponents: Record<string, React.ComponentType> = {
  "word-counter": WordCounter,
  "character-counter": CharacterCounter,
  "sentence-counter": SentenceCounter,
  "paragraph-counter": ParagraphCounter,
  "reading-time": ReadingTimeCalculator,
  "case-converter": CaseConverter,
  "text-repeater": TextRepeater,
  "ai-title-generator": AITitleGenerator,
  "ai-blog-idea-generator": AIBlogIdeaGenerator,
  "lorem-ipsum-generator": LoremIpsumGenerator,

  "keyword-density-checker": KeywordDensityChecker,
  "meta-tag-generator": MetaTagGenerator,
  "sitemap-generator": SitemapGenerator,
  "robots-txt-generator": RobotsTxtGenerator,
  "keyword-research": KeywordResearchTool,
  "backlink-checker": BacklinkChecker,
  "seo-analyzer": SeoAnalyzer,
  "domain-authority-checker": DomainAuthorityChecker,
  "page-speed-checker": PageSpeedChecker,
  "hashtag-generator": HashtagGenerator,

  "json-formatter": JsonFormatter,
  "json-to-csv": JsonToCsvConverter,
  "base64-encoder": Base64Encoder,
  "url-encoder": UrlEncoder,
  "jwt-decoder": JwtDecoder,
  "uuid-generator": UuidGenerator,
  "uuid-bulk-generator": UuidBulkGenerator,
  "hash-generator": HashGenerator,
  "regex-tester": RegexTester,
  "html-minifier": HtmlMinifier,
  "css-minifier": CssMinifier,
  "markdown-to-html": MarkdownToHtml,
  "text-diff-checker": TextDiffChecker,

  "image-compressor": ImageCompressor,
  "image-resizer": ImageResizer,
  "image-crop": ImageCrop,
  "jpg-to-png": JpgToPng,
  "png-to-jpg": PngToJpg,
  "image-to-base64": ImageToBase64,
  "screenshot-to-pdf": ScreenshotToPdf,
  "gif-maker": GifMaker,
  "youtube-thumbnail-downloader": YoutubeThumbnailDownloader,
  "video-metadata-viewer": VideoMetadataViewer,

  "emi-calculator": EmiCalculator,
  "loan-calculator": LoanCalculator,
  "sip-calculator": SipCalculator,
  "compound-interest": CompoundInterest,
  "salary-after-tax-calculator": SalaryAfterTaxCalculator,
  "inflation-calculator": InflationCalculator,
  "retirement-calculator": RetirementCalculator,
  "currency-converter": CurrencyConverter,
  "discount-calculator": DiscountCalculator,
  "tip-calculator": TipCalculator,

  "percentage-calculator": PercentageCalculator,
  "age-calculator": AgeCalculator,
  "time-calculator": TimeCalculator,
  "date-difference-calculator": DateDifferenceCalculator,
  "unit-converter": UnitConverter,
  "scientific-calculator": ScientificCalculator,
  "gpa-calculator": GpaCalculator,
  "random-number-generator": RandomNumberGenerator,

  "qr-code-generator": QrCodeGenerator,
  "qr-code-scanner": QrCodeScanner,
  "barcode-generator": BarcodeGenerator,
  "password-generator": PasswordGenerator,
  "color-picker": ColorPicker
};

/* ================= SEO ================= */
export async function generateMetadata({ params }: any) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  return {
    title: `${tool?.name} - Free Online Tool`,
    description: `Use ${tool?.name} online for free. Fast and easy.`,
  };
}

/* ================= PAGE ================= */
type Params = Promise<{ slug: string }>;

export default async function ToolPage({ params }: { params: Params }) {
  const { slug } = await params;

  const tool = tools.find((t) => t.slug === slug);
  const ToolComponent = toolComponents[slug];

  if (!tool) {
    return <div style={{ padding: "40px" }}>Tool not found</div>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "30px 20px" }}>

      <h1 style={{ fontSize: "32px", fontWeight: "700" }}>{tool.name}</h1>

      <p style={{ color: "#64748b", marginBottom: "20px" }}>
        {tool.description}
      </p>

      <div style={{
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "20px",
        background: "#fff",
        marginBottom: "30px"
      }}>
        {ToolComponent ? <ToolComponent /> : "Tool not available"}
      </div>

      <div style={{
        margin: "30px 0",
        padding: "20px",
        border: "1px dashed #e2e8f0",
        textAlign: "center"
      }}>
        AdSense Ad Space
      </div>

      {/* SEO CONTENT */}
      <div style={{ lineHeight: "1.7" }}>

        {tool.slug === "word-counter" && (
          <>
            <h2>What is Word Counter?</h2>
            <p>Word Counter helps you count words, characters and sentences instantly.</p>
          </>
        )}

        {tool.slug === "character-counter" && (
          <>
            <h2>What is Character Counter?</h2>
            <p>Character Counter counts characters including spaces and without spaces.</p>
          </>
        )}

        {tool.slug === "password-generator" && (
          <>
            <h2>What is Password Generator?</h2>
            <p>Password Generator creates secure passwords to protect your accounts.</p>
          </>
        )}

        {tool.slug === "json-formatter" && (
          <>
            <h2>What is JSON Formatter?</h2>
            <p>JSON Formatter beautifies and validates JSON data for developers.</p>
          </>
        )}

        {tool.slug === "qr-code-generator" && (
          <>
            <h2>What is QR Code Generator?</h2>
            <p>Create QR codes for links and text instantly.</p>
          </>
        )}

        <h2>Why use our {tool.name}?</h2>
        <ul>
          <li>Free</li>
          <li>Fast</li>
          <li>No login required</li>
        </ul>

        <h2>Related Tools</h2>
        <ul>
          <li><a href="/tools/word-counter">Word Counter</a></li>
          <li><a href="/tools/password-generator">Password Generator</a></li>
          <li><a href="/tools/json-formatter">JSON Formatter</a></li>
        </ul>

      </div>

    </div>
  );
}