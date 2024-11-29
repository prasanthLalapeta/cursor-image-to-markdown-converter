# Project Overview
Use this guide to build a web app where users can upload a Upload an image to turn it into structured markdown.

# Features
- We will use Next.js, Shadcn, and TailwindCSS for the frontend.
- We will use llama-ocr npm package to extract the text from the image. which uses a LLM from together.ai to extract the text from the image.
- Have a nice UI & animations when uploading an image and downloading the markdown.
- Use playground from shadcn to style the UI.
- User can upload an image
- User can download the markdown
- User can copy the markdown to clipboard
- User can download the markdown as a markdown file
- User can download the markdown as a PDF file

# Relevant docs
## How to use llama-ocr
- https://www.npmjs.com/package/llama-ocr
- https://github.com/Nutlope/llama-ocr

import { ocr } from "llama-ocr";

const markdown = await ocr({
  filePath: "./trader-joes-receipt.jpg", // path to your image (soon PDF!)
  apiKey: process.env.TOGETHER_API_KEY, // Together AI API key
});

# Current File Structure

IMAGE-TO-MARKDOWN/
├── .next/
├── app/
│   ├── fonts/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       └── tooltip.tsx
├── hooks/
├── lib/
├── node_modules/
├── requirements/
│   └── frontend_instructions.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

# Rules
- All new components should go in /components and be named like example-component.tsx unless otherwise specified.
- All new pages go in /app.
