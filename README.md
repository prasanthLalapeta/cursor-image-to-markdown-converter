# Image to Markdown Converter

This is a Next.js application that converts images to markdown format using Llama 3.2 Vision model.

## Prerequisites

Before running this project, make sure you have:

- Node.js 18.x or later installed
- npm or yarn package manager
- Together AI API key

## Environment Variables Setup

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```bash
TOGETHER_API_KEY=your_together_api_key_here
```

To get your Together AI API key:
1. Sign up at [Together AI Platform](https://together.ai)
2. Navigate to your account settings
3. Generate a new API key
4. Copy the key to your `.env.local` file

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables as described above

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Dependencies

### Core Dependencies
```json
{
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-separator": "^1.1.0",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-tooltip": "^1.1.4",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "llama-ocr": "^0.0.6",
  "lucide-react": "^0.460.0",
  "next": "14.2.16",
  "react": "^18",
  "react-dom": "^18",
  "tailwind-merge": "^2.5.4",
  "tailwindcss-animate": "^1.0.7",
  "together-ai": "^0.9.0"
}
```

### Dev Dependencies
```json
{
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "autoprefixer": "^10.4.18",
  "eslint": "^8",
  "eslint-config-next": "14.2.16",
  "postcss": "^8",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```

## Troubleshooting Build Issues

If you encounter build errors, try these common solutions:

1. Clear Next.js cache and dependencies:
```bash
rm -rf .next node_modules package-lock.json
npm install
```

2. Ensure you're using the correct Node.js version:
```bash
node --version  # Should be 18.x or later
```

3. If you encounter TypeScript errors:
```bash
npm install --save-dev typescript @types/react @types/node @types/react-dom
```

## Features

- Upload images and convert them to markdown format using Llama 3.2 Vision
- Real-time markdown preview
- Copy markdown to clipboard
- Responsive design
- Drag and drop image upload
- Dark mode support

## Tech Stack

- [Next.js 14.2.16](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Together AI](https://together.ai/) for Llama 3.2 Vision model
- [Lucide React](https://lucide.dev/) for icons
- [llama-ocr](https://github.com/Nutlope/llama-ocr) for OCR functionality

## How It Works

This application uses the Llama 3.2 Vision model through Together AI's API to convert images to markdown format. The OCR functionality is powered by [llama-ocr](https://github.com/Nutlope/llama-ocr), an npm library created by [@Nutlope](https://github.com/Nutlope) that provides free OCR capabilities using Llama 3.2 Vision.

The library uses the Together AI API to:
- Process uploaded images
- Extract text and structure
- Convert the content to markdown format


## Project Structure

```
├── app/                    # Next.js app directory
├── components/            
│   ├── ui/                # Reusable UI components
│   ├── image-uploader.tsx # Image upload component
│   └── markdown-preview.tsx # Markdown preview component
├── lib/                   # Utility functions
└── public/                # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Together AI Documentation](https://docs.together.ai/)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [llama-ocr Documentation](https://github.com/Nutlope/llama-ocr#readme)
