"use client";

import { Logo } from "./logo";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`flex mb-5 md:mb-10 items-center transition-all ${isSticky
                    ? "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border py-3 px-6 -mx-6"
                    : ""
                }`}
        >
            <Logo />

            <nav className="text-xs grow justify-end items-center flex gap-1">
                <Link href="/services" className="group p-2">
                    <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
                        Services
                    </span>
                </Link>
                <Link href="/about" className="group p-2">
                    <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
                        About
                    </span>
                </Link>
                <a
                    href="https://x.com/isblank_dave"
                    target="_blank"
                    className="group inline-flex items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap"
                >
                    <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex items-center gap-1">
                        <TweetIcon style={{ marginRight: 4 }} />
                        <span className="hidden sm:inline">Follow me</span>
                    </span>
                </a>
                <a
                    href="https://cal.com/david-blank-umw37b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center px-3 py-1.5 bg-foreground text-background rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                    Book Call
                </a>
            </nav>
        </header>
    );
}

function TweetIcon(props: any) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="inline-flex fill-current"
            width={12}
            height={12}
        >
            <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
        </svg>
    );
}
