"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Copy, FileDown } from "lucide-react";
import { useState } from "react";

interface MarkdownPreviewProps {
    markdown: string;
    isLoading: boolean;
}

export function MarkdownPreview({ markdown, isLoading }: MarkdownPreviewProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const downloadMarkdown = () => {
        const blob = new Blob([markdown], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "converted.md";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <Card className="flex flex-col">
            <div className="flex items-center justify-between border-b p-4">
                <h3 className="text-sm font-medium">Generated Markdown</h3>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={copyToClipboard}
                        disabled={!markdown || isLoading}
                    >
                        <Copy className="mr-2 h-4 w-4" />
                        {copied ? "Copied!" : "Copy"}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={downloadMarkdown}
                        disabled={!markdown || isLoading}
                    >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                    </Button>
                </div>
            </div>
            <div className="flex-1 p-4">
                {isLoading ? (
                    <div className="flex h-full items-center justify-center">
                        <div className="animate-spin rounded-full border-2 border-primary border-t-transparent h-8 w-8" />
                    </div>
                ) : markdown ? (
                    <pre className="whitespace-pre-wrap font-mono text-sm bg-muted/50 p-4 rounded-lg">{markdown}</pre>
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        Upload an image to see the converted markdown
                    </div>
                )}
            </div>
        </Card>
    );
} 