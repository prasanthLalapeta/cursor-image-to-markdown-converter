"use client";

import { ImageUploader } from "@/components/image-uploader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImageToMarkdown() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Image to Markdown</h1>
        </div>
        <div className="flex-1 rounded-xl border shadow-2xl">
          <div className="flex flex-col space-y-4 p-4 md:p-8">
            <ImageUploader />
          </div>
        </div>
      </main>
    </div>
  );
}