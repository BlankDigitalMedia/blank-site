import { getNowPlayingTrack } from "@/lib/spotify";
import { NowPlayingWidget } from "@/components/NowPlayingWidget";

export const revalidate = 300;

export default async function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const nowPlaying = await getNowPlayingTrack();

    return (
        <>
            {children}
            <div className="max-w-2xl mx-auto px-6 mt-12 mb-8">
                <NowPlayingWidget track={nowPlaying} />
            </div>
        </>
    );
}
