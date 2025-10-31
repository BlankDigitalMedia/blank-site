"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { NewsletterCard } from "@/components/NewsletterCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Post } from "@/app/get-posts";
import { NowPlaying, type NowPlayingTrack } from "@/components/NowPlaying";
import Link from "next/link";

type LatestAndListeningProps = {
    latestPosts: Post[];
    nowPlaying: NowPlayingTrack | null;
};

export function LatestAndListening({ latestPosts, nowPlaying }: LatestAndListeningProps) {
    const items = [
        {
            title: "Latest Builder Notes",
            description: <LatestPostsList posts={latestPosts} />,
            header: null,
            className: "md:col-span-2",
            icon: null,
        },
        {
            title: "Now Listening",
            description: <NowPlaying track={nowPlaying} />,
            header: null,
            className: "md:col-span-1",
            icon: null,
        },
        {
            title: "Newsletter",
            align: "between" as const,
            description: <NewsletterCard />,
            header: null,
            className: "md:col-span-3",
            icon: null,
        },
    ];

    return (
        <BentoGrid className="w-full md:max-w-[80%] mx-auto px-6 sm:px-9 md:px-14 lg:px-20 xl:px-24">
            {items.map((item, index) => (
                <BentoGridItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    align={item.align}
                />
            ))}
        </BentoGrid>
    );
}

function LatestPostsList({ posts }: { posts: Post[] }) {
    const fmt = (dateStr: string) =>
        new Date(dateStr).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    return (
        <ul className="divide-y divide-border/50">
            {posts.map((post) => {
                const year = new Date(post.date).getFullYear();
                const tag =
                    (post as any).tag ||
                    ((post as any).tags?.[0] ?? null);
                return (
                    <li key={post.id}>
                        <Link
                            href={`/${year}/${post.id}`}
                            className="group flex items-start py-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md"
                        >
                            <div className="flex-1">
                                <span className="inline-flex items-center gap-2">
                                    <span className="transition-colors">
                                        {post.title}
                                    </span>
                                    <ArrowRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
                                </span>
                                <div className="mt-1 text-[11px] leading-4 text-muted-foreground">
                                    {fmt(post.date)}
                                    {tag ? <span> • {tag}</span> : null}
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
