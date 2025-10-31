import { CheckCircleIcon, MapPinIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function TrustSignals() {
  const signals = [
    {
      icon: MapPinIcon,
      title: "Based in Southwest Michigan",
      description: "Local to Bangor, South Haven, Kalamazoo, and Grand Rapids",
    },
    {
      icon: ShieldCheckIcon,
      title: "Marine Veteran",
      description: "Discipline, reliability, and commitment to getting it done right",
    },
    {
      icon: CheckCircleIcon,
      title: "No Agency Overhead",
      description: "Work directly with me — fast decisions, clear communication",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {signals.map((signal, idx) => {
          const Icon = signal.icon;
          return (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-3">
                <Icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{signal.title}</h3>
              <p className="text-xs text-muted-foreground">{signal.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

