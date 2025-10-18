import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: { message: `Spotify authorization error: ${error}` } },
      { status: 400 }
    );
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID?.trim();
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET?.trim();
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI?.trim();

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      {
        error: {
          message:
            "Missing SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET or SPOTIFY_REDIRECT_URI",
          code: "MISSING_ENV",
        },
      },
      { status: 500 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: { message: "Missing authorization code" } },
      { status: 400 }
    );
  }

  try {
    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!res.ok) {
      let details = "";
      try {
        const body = await res.json();
        details = ` - ${JSON.stringify(body)}`;
      } catch {}
      return NextResponse.json(
        {
          error: {
            message: `Token exchange failed: ${res.status} ${res.statusText}${details}`,
          },
        },
        { status: 500 }
      );
    }

    const json = (await res.json()) as {
      access_token: string;
      token_type: string;
      scope: string;
      expires_in: number;
      refresh_token?: string;
    };

    return NextResponse.json(
      {
        message: "Authorization successful",
        note:
          "Copy the refresh_token into blog/.env.local as SPOTIFY_REFRESH_TOKEN",
        refresh_token: json.refresh_token ?? null,
        scope: json.scope,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: { message: "Unexpected error during Spotify callback" } },
      { status: 500 }
    );
  }
}


