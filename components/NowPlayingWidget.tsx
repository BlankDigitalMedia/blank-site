"use client";

import { NowPlaying, type NowPlayingTrack } from "@/components/NowPlaying";

type NowPlayingWidgetProps = {
    track: NowPlayingTrack | null;
};

export function NowPlayingWidget({ track }: NowPlayingWidgetProps) {
    return (
        <div className="bg-accent/30 border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Now Listening</h3>
            <NowPlaying track={track} />
        </div>
    );
}
