"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { PROMPTS, type PromptId } from "@/lib/prompts";
import { cn } from "@/lib/utils";

interface CopyPromptProps {
  id: PromptId;
  className?: string;
}

export default function CopyPrompt({ id, className }: CopyPromptProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = PROMPTS[id];
    if (!text) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center ml-2 -mt-0.5",
        "w-5 h-5 rounded opacity-30 hover:opacity-100 focus-visible:opacity-100",
        "text-muted-foreground hover:text-foreground",
        "transition-opacity duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        className
      )}
      aria-label={copied ? "Copied!" : `Copy learning prompt for ${id}`}
      title={copied ? "Copied!" : "Copy learning prompt"}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
      <span className="sr-only">{copied ? "Copied!" : "Copy prompt"}</span>
    </button>
  );
}
