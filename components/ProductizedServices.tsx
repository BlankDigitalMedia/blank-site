"use client";

import { CheckIcon } from "@heroicons/react/24/outline";

const services = [
    {
        name: "Website Starter",
        price: "$1,200",
        timeline: "2–3 weeks",
        description: "Professional website that looks good, loads fast, and brings you business.",
        included: [
            "Clean, modern design",
            "Mobile-friendly & fast loading",
            "Contact form & Google-ready SEO",
            "Hosting setup & simple edits tutorial",
        ],
        notIncluded: [
            "Online booking/scheduling",
            "E-commerce functionality",
            "Blog or content management",
        ],
        cta: {
            text: "Get Started",
            href: "https://cal.com/david-blank-umw37b",
        },
        popular: true,
    },
    {
        name: "Automation Starter",
        price: "$600",
        timeline: "1 week",
        description: "Connect your existing tools so they work together automatically.",
        included: [
            "Custom workflow automation",
            "Integration with your current tools",
            "Documentation & setup guide",
            "First month of tweaks included",
        ],
        notIncluded: [
            "Complex multi-step workflows (10+ steps)",
            "Custom API development",
            "Ongoing monthly maintenance",
        ],
        cta: {
            text: "Get Started",
            href: "https://cal.com/david-blank-umw37b",
        },
        popular: false,
    },
    {
        name: "AI FAQ Bot",
        price: "$500",
        timeline: "1 week",
        description: "Answer common customer questions 24/7 without hiring staff.",
        included: [
            "Custom-trained on your business",
            "Embeds on your website",
            "Handles unlimited questions",
            "Updates & support for first month",
        ],
        notIncluded: [
            "Advanced integrations (CRM, etc.)",
            "Phone/voice capabilities",
            "Multi-language support",
        ],
        cta: {
            text: "Get Started",
            href: "https://cal.com/david-blank-umw37b",
        },
        popular: false,
    },
];

export function ProductizedServices() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
                <div
                    key={service.name}
                    className={`relative flex flex-col p-6 bg-background border-2 rounded-xl transition-all hover:shadow-lg ${service.popular
                            ? "border-primary shadow-md"
                            : "border-border hover:border-primary/50"
                        }`}
                >
                    {service.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-bold">{service.price}</span>
                            <span className="text-sm text-muted-foreground">
                                {service.timeline}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {service.description}
                        </p>
                    </div>

                    <div className="flex-grow mb-6 space-y-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                What's Included
                            </p>
                            <ul className="space-y-2">
                                {service.included.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <CheckIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                Not Included
                            </p>
                            <ul className="space-y-2">
                                {service.notIncluded.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                        <span className="text-muted-foreground/50 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <a
                        href={service.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center px-4 py-2.5 rounded-lg font-semibold transition-all text-center ${service.popular
                                ? "bg-primary text-primary-foreground hover:opacity-90"
                                : "bg-accent border border-border hover:bg-accent/80"
                            }`}
                    >
                        {service.cta.text}
                    </a>
                </div>
            ))}
        </div>
    );
}
