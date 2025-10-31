import Link from "next/link";
import {
  SparklesIcon,
  GlobeAltIcon,
  CogIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export function ServicesHighlight() {
  const services = [
    {
      icon: MagnifyingGlassIcon,
      title: "Free AI Audit",
      description: "30-minute call to find 2-3 ways AI could save you time or money",
      price: "Free",
      link: "https://cal.com/david-blank-umw37b",
      external: true,
    },
    {
      icon: SparklesIcon,
      title: "Simple AI Tools",
      description: "Custom automation for repetitive tasks — data entry, customer service, content",
      price: "From $500",
      link: "/services#ai-tools",
    },
    {
      icon: GlobeAltIcon,
      title: "Fast Websites",
      description: "Professional sites that load fast and bring you business",
      price: "$800-$2,500",
      link: "/services#websites",
    },
    {
      icon: CogIcon,
      title: "Business Automation",
      description: "Connect your tools so they work together automatically",
      price: "From $600",
      link: "/services#automation",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-3">How I Can Help</h2>
        <p className="text-lg text-muted-foreground">
          Practical solutions for small businesses who want to work smarter
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const content = (
            <>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-foreground">{service.price}</p>
                </div>
              </div>
            </>
          );

          return service.external ? (
            <a
              key={idx}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-background border border-border rounded-lg hover:border-foreground/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              {content}
            </a>
          ) : (
            <Link
              key={idx}
              href={service.link}
              className="block p-6 bg-background border border-border rounded-lg hover:border-foreground/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              {content}
            </Link>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          View All Services & Pricing
        </Link>
      </div>
    </div>
  );
}

