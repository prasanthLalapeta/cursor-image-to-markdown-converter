"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

interface ApiKeyFormProps {
    onSubmit: (apiKey: string) => void;
}

export function ApiKeyForm({ onSubmit }: ApiKeyFormProps) {
    const [apiKey, setApiKey] = useState("");

    const handleTryDemo = () => {
        onSubmit("demo"); // Use a demo key
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-6 p-8 text-center">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">Enter Your Together AI API Key</h2>
                <p className="text-muted-foreground max-w-md">
                    For accurate results, use your own API key from{" "}
                    <Link
                        href="https://www.together.ai/"
                        target="_blank"
                        className="text-blue-500 hover:underline"
                    >
                        together.ai
                    </Link>
                </p>
            </div>
            <div className="flex w-full max-w-sm gap-2">
                <Input
                    type="password"
                    placeholder="Enter your API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                <Button onClick={() => onSubmit(apiKey)}>
                    Submit
                </Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
                <div className="text-sm text-muted-foreground">or</div>
                <Button variant="outline" onClick={handleTryDemo}>
                    Try with Demo API Key
                </Button>
                <p className="text-xs text-muted-foreground">
                    Note: Demo key has limited functionality
                </p>
            </div>
        </div>
    );
} 