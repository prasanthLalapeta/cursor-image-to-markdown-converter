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

## Troubleshooting Build Issues

If you encounter build errors, try these common solutions:

1. Clear Next.js cache:
```bash
rm -rf .next
```

2. Delete node_modules and reinstall dependencies:
```bash
rm -rf node_modules
rm package-lock.json # or yarn.lock if using yarn
npm install # or yarn install
```

3. Ensure all dependencies are properly installed:
```bash
npm install @radix-ui/react-slot @radix-ui/react-toast class-variance-authority clsx tailwind-merge
```

4. Check Node.js version:
```bash
node --version
```
Make sure you're using Node.js 18.x or later.

5. If using TypeScript, ensure types are installed:
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

## Features

- Upload images and convert them to markdown format using Llama 3.2 Vision
- Preview markdown output in real-time
- Copy markdown to clipboard

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Llama 3.2 90B Vision Model](https://together.ai/products/llama-3.2-90b)
- [shadcn/ui](https://ui.shadcn.com/) components

## Project Structure

```
├── app/
│   ├── image-to-markdown/    # Main application page
│   └── ...
├── components/              # Reusable components
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## How It Works

This application uses the Llama 3.2 Vision model through Together AI's API to convert images to markdown format. We're using the `Llama-3.2-90B-Vision` model for optimal performance and accuracy. The implementation is inspired by the [llama-ocr](https://github.com/Nutlope/llama-ocr) library.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Together AI Documentation](https://docs.together.ai/)
- [llama-ocr Library](https://github.com/Nutlope/llama-ocr)
