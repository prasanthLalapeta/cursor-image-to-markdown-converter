export interface UseCase {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  disabled?: boolean;
}

export const useCases: UseCase[] = [
  {
    id: "image-to-markdown",
    title: "Image to Markdown",
    description: "Convert images to structured markdown with AI-powered OCR",
    tags: ["llama-ocr", "Together.ai", "Documentation"],
    href: "/image-to-markdown",
    disabled: false,
  },
  {
    id: "bill-analyzer",
    title: "Bill Analyzer",
    description: "Analyze shopping bills from images and track expenses with AI insights",
    tags: ["Coming Soon", "Finance"],
    href: "#",
    disabled: true,
  },
  {
    id: "pdf-summarizer",
    title: "PDF Summarizer",
    description: "Extract key insights and generate concise summaries from PDF documents",
    tags: ["Coming Soon", "PDF"],
    href: "#",
    disabled: true,
  },
]; 