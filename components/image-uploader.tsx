"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarkdownPreview } from "./markdown-preview";

export function ImageUploader() {
    const [isUploading, setIsUploading] = useState(false);
    const [markdown, setMarkdown] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string>("");

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            setPreviewUrl(URL.createObjectURL(file));

            const formData = new FormData();
            formData.append("image", file);

            const response = await fetch("/api/convert", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setMarkdown(data.markdown);
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
                <Card className="flex flex-col items-center justify-center border-2 border-dashed p-4">
                    <label
                        htmlFor="image-upload"
                        className={cn(
                            "flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed px-5 py-6 text-center transition-colors hover:bg-accent",
                            previewUrl ? "border-0" : "border-muted-foreground/25"
                        )}
                    >
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="h-full w-full object-contain rounded-lg"
                            />
                        ) : (
                            <>
                                <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Drop your image here or click to upload
                                </p>
                            </>
                        )}
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileUpload}
                            disabled={isUploading}
                        />
                    </label>
                    <Button
                        disabled={isUploading}
                        variant="secondary"
                        className="mt-4 w-full"
                    >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                    </Button>
                </Card>
            </div>
            <MarkdownPreview markdown={markdown} isLoading={isUploading} />
        </div>
    );
} 