"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

export function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, setClient] = React.useState<ConvexReactClient | null>(null);

  React.useEffect(() => {
    const address = process.env.NEXT_PUBLIC_CONVEX_URL as string | undefined;
    if (!address) {
      console.error("Missing NEXT_PUBLIC_CONVEX_URL for Convex client.");
      return;
    }
    setClient(new ConvexReactClient(address));
  }, []);

  if (!client) return null;

  return <ConvexProvider client={client}>{children}</ConvexProvider>;
}


