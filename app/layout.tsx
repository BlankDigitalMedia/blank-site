import "./globals.css";

import { Roboto_Flex, PT_Serif, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Dave Blank | AI & Web Tools for Southwest Michigan Small Businesses",
  description:
    "Helping small businesses in Bangor, South Haven, Kalamazoo, and Grand Rapids save time with AI tools, websites, and automation. Fast, affordable, no agency overhead.",
  openGraph: {
    title: "Dave Blank | AI & Web Tools for Southwest Michigan Small Businesses",
    description:
      "Helping small businesses in Bangor, South Haven, Kalamazoo, and Grand Rapids save time with AI tools, websites, and automation.",
    url: "https://daveblank.dev",
    siteName: "Dave Blank",
    images: ["/opengraph-image"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@isblank_dave",
    creator: "@isblank_dave",
  },
  metadataBase: new URL("https://daveblank.dev"),
  keywords: [
    "AI tools Michigan",
    "small business websites Southwest Michigan",
    "business automation Kalamazoo",
    "AI consultant Grand Rapids",
    "website developer South Haven",
    "small business technology Bangor",
    "affordable web design Michigan",
    "AI for small business",
  ],
  authors: [{ name: "Dave Blank" }],
  creator: "Dave Blank",
  alternates: {
    canonical: "https://daveblank.dev",
  },
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
      className={`${robotoFlex.variable} ${ptSerif.variable} ${ibmPlexMono.variable} ${robotoFlex.className} antialiased theme`}
      suppressHydrationWarning={true}
    >
      <head>
        <link rel="preconnect" href="https://tenor.com" />
        <link rel="preconnect" href="https://media.tenor.com" crossOrigin="" />
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
      </ConvexClientProvider>
      <Analytics />
      </body>
    </html>
  );
}
