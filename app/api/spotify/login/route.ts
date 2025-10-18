import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID?.trim();
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI?.trim();

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      {
        error: {
          message: "Missing SPOTIFY_CLIENT_ID or SPOTIFY_REDIRECT_URI",
          code: "MISSING_ENV",
        },
      },
      { status: 500 }
    );
  }

  const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
  ].join(" ");

  const state = Math.random().toString(36).slice(2);
  const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", scope);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);

  // For simplicity, we don't persist state server-side here.
  return NextResponse.redirect(authorizeUrl.toString());
}


