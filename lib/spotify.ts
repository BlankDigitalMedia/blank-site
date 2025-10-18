import "server-only";

const SPOTIFY_API_BASE = "https://api.spotify.com/v1";
const SPOTIFY_ACCOUNTS_BASE = "https://accounts.spotify.com";

type SpotifyImage = {
  url: string;
  width: number;
  height: number;
};

type SpotifyTrackItem = {
  name: string;
  artists: { name: string }[];
  album: { images: SpotifyImage[] };
  external_urls?: { spotify?: string };
};

type TrackResponse = {
  name: string;
  artist: string;
  artworkUrl: string | null;
  url: string | null;
  isPlaying: boolean;
};

async function resolveAccessToken(): Promise<string | null> {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN?.trim();
  const clientId = process.env.SPOTIFY_CLIENT_ID?.trim();
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET?.trim();

  // If refresh credentials are present, prefer using them to mint a fresh token
  if (refreshToken && clientId && clientSecret) {
    try {
      const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
      const res = await fetch(`${SPOTIFY_ACCOUNTS_BASE}/api/token`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
        cache: "no-store",
      });

      if (res.ok) {
        const json = (await res.json()) as { access_token?: string };
        if (json.access_token && json.access_token.trim().length > 0) {
          return json.access_token.trim();
        }
      } else {
        let details = "";
        try {
          const body = await res.json();
          details = ` - ${JSON.stringify(body)}`;
        } catch {}
        console.error(`Spotify token refresh failed: ${res.status} ${res.statusText}${details}`);
      }
    } catch (err) {
      console.error("Spotify token refresh threw:", err);
    }
  }

  // Fallback to direct token from env (useful for manual testing)
  const value = process.env.SPOTIFY_TOKEN ?? process.env.NEXT_PUBLIC_SPOTIFY_TOKEN ?? "";
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

async function spotifyFetch<T>(path: string): Promise<T | null> {
  const token = await resolveAccessToken();

  if (!token) {
    console.error("Missing SPOTIFY_TOKEN environment variable.");
    return null;
  }

  const res = await fetch(`${SPOTIFY_API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (res.status === 204 || res.status === 205) {
    return null;
  }

  if (!res.ok) {
    // Try to surface Spotify's error payload for easier debugging
    let details = "";
    try {
      // Spotify error bodies are usually JSON: { error: { status, message } }
      const body = await res.json();
      details = ` - ${JSON.stringify(body)}`;
    } catch {
      try {
        const text = await res.text();
        if (text && text.length < 2000) {
          details = ` - ${text}`;
        }
      } catch {
        // ignore
      }
    }
    console.error(`Spotify API request failed: ${res.status} ${res.statusText}${details}`);
    return null;
  }

  return (await res.json()) as T;
}

function normalizeTrack(track: SpotifyTrackItem, isPlaying: boolean): TrackResponse {
  const primaryArtist = track.artists.map(artist => artist.name).join(", ");
  const artwork = track.album.images?.[0]?.url ?? null;
  const url = track.external_urls?.spotify ?? null;

  return {
    name: track.name,
    artist: primaryArtist,
    artworkUrl: artwork,
    url,
    isPlaying,
  };
}

export async function getNowPlayingTrack(): Promise<TrackResponse | null> {
  const current = await spotifyFetch<{
    item: SpotifyTrackItem | null;
    is_playing: boolean;
  }>("/me/player/currently-playing");

  if (current?.item) {
    return normalizeTrack(current.item, current.is_playing);
  }

  const recent = await spotifyFetch<{
    items: { track: SpotifyTrackItem }[];
  }>("/me/player/recently-played?limit=1");

  const fallback = recent?.items?.[0]?.track;

  if (fallback) {
    return normalizeTrack(fallback, false);
  }

  return null;
}
