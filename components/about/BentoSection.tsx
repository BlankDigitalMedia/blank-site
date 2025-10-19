import { cn } from "@/lib/utils";

const sections = [
  {
    title: "HOW I WORK",
    paragraphs: [
      [
        "Build fast. Break early. Fix what matters.",
        "Ghostty and nvim keep me focused.",
        "The whiteboard keeps me honest.",
      ],
    ],
  },
  {
    title: "DIGITAL COCKPIT",
    paragraphs: [
      [
        "MacBook with too many terminals.",
        "Agents running while I build.",
        "Organized chaos that ships.",
      ],
    ],
  },
  {
    title: "WORKBENCH",
    paragraphs: [
      [
        "Leather notebook for thoughts worth keeping.",
        "Whiteboard Kanban when I need to see the mess.",
        "Nine dogs and fifteen chickens keep me humble.",
      ],
    ],
  },
  {
    title: "SYSTEMS",
    paragraphs: [
      [
        "Linear when it’s real work.",
        "Jira when it’s required.",
        "Whiteboard when it’s mine.",
      ],
    ],
  },
];

export function BentoSection() {
  return (
    <section className="max-w-2xl mx-auto px-6">
      <div className="space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="space-y-2 hover:opacity-95 transition-opacity"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {section.title}
            </p>
            <div className="text-sm leading-snug text-foreground/90">
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.title}-${index}`} className="space-y-1">
                  {paragraph.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
