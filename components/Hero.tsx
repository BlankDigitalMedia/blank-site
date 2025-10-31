"use client";

import Image from "next/image";
import Link from "next/link";
import heroPhoto from "@/public/images/blank-about.png";

export function Hero() {
    return (
        <section className="w-full mx-auto px-6 sm:px-9 md:px-14 lg:px-20 xl:px-24 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Column - Value Prop & CTAs */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                AI tools & fast websites for Southwest Michigan small businesses
                            </h1>
                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                Save 5–10 hours a week and look professional, without big-agency costs.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="https://cal.com/david-blank-umw37b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                                Book Free 15-Min Call
                            </a>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                                See Services & Pricing
                            </Link>
                        </div>

                        {/* Trust Chips */}
                        <div className="flex flex-wrap gap-3 pt-4 text-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-border">
                                <span className="text-xs">🇺🇸</span>
                                <span className="font-medium">Veteran-owned</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-border">
                                <span className="text-xs">📍</span>
                                <span className="font-medium">Southwest Michigan</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-border">
                                <span className="text-xs">✓</span>
                                <span className="font-medium">No agency overhead</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-2 space-y-2">
                            <p className="text-sm text-muted-foreground">
                                Serving Bangor • South Haven • Kalamazoo • Grand Rapids
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Prefer to call or text?{" "}
                                <a
                                    href="tel:+12694310941"
                                    className="font-medium text-foreground hover:underline"
                                >
                                    (269) 431-0941
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div className="relative">
                        <div className="relative aspect-square max-w-md mx-auto md:ml-auto md:mr-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-background rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                                <Image
                                    src={heroPhoto}
                                    alt="Portrait of Dave Blank, owner of Blank Digital, a veteran-owned web services provider in Southwest Michigan"
                                    className="w-full h-full object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                    <p className="text-white font-semibold text-base sm:text-lg">
                                        Dave Blank
                                    </p>
                                    <p className="text-white/90 text-xs sm:text-sm">
                                        Builder & Owner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
