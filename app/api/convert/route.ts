import { NextRequest, NextResponse } from "next/server";
import { ocr } from "llama-ocr";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

export async function POST(request: NextRequest) {
    try {
        // Check if API key exists
        if (!process.env.TOGETHER_API_KEY) {
            console.error("TOGETHER_API_KEY is not defined");
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

        const formData = await request.formData();
        const image = formData.get("image") as File;

        if (!image) {
            return NextResponse.json(
                { error: "No image file provided" },
                { status: 400 }
            );
        }

        // Create temp directory in /tmp for Vercel compatibility
        const tempDir = "/tmp";
        await mkdir(tempDir, { recursive: true });

        // Save the file with a unique name
        const fileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
        const tempPath = path.join(tempDir, fileName);

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(tempPath, buffer);

        console.log("File saved at:", tempPath);

        try {
            console.log("Starting OCR process...");
            const markdown = await ocr({
                filePath: tempPath,
                apiKey: process.env.TOGETHER_API_KEY,
            });
            console.log("OCR completed successfully");

            return NextResponse.json({ markdown });
        } catch (err) {
            const error = err as Error;
            console.error("OCR Error:", error);
            return NextResponse.json(
                { error: "Failed to convert image to markdown", details: error.message },
                { status: 500 }
            );
        }
    } catch (err) {
        const error = err as Error;
        console.error("Server Error:", error);
        return NextResponse.json(
            { error: "Server error occurred", details: error.message },
            { status: 500 }
        );
    }
} 