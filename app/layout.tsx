import "./globals.css";

import { Alef, Abyssinica_SIL, Overpass_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const alef = Alef({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
});

const abyssinicaSil = Abyssinica_SIL({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata = {
  title: "Dave Blank's blog",
  description:
    "Builder. Technologist. AI Tinkerer. Writing about technology, creativity, and the things I tinker with.",
  openGraph: {
    title: "Dave Blank's blog",
    description:
      "Builder. Technologist. AI Tinkerer. Writing about technology, creativity, and the things I tinker with.",
    url: "https://daveblank.dev",
    siteName: "Dave Blank's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@isblank_dave",
    creator: "@isblank_dave",
  },
  metadataBase: new URL("https://daveblank.dev"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${alef.variable} ${abyssinicaSil.variable} ${overpassMono.variable} ${alef.className} antialiased theme`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${doge.toString()})();`,
          }}
        />
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>

      <body>
        <ConvexClientProvider>
          <main className="min-h-screen">
            <div className="max-w-2xl mx-auto px-6 pt-3 md:pt-6">
              <Header />
            </div>
            {children}
            <div className="max-w-2xl mx-auto">
              <Footer />
            </div>
          </main>
          <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
