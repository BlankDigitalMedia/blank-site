import { cn } from "@/lib/utils";

const sections = [
  {
    title: "HOW I WORK",
    paragraphs: [
      [
        "I prototype quickly, iterate often, and fix only what moves the needle.",
        "Tools like Ghostty and nvim let me stay in the code while thinking like a product owner.",
        "My whiteboard acts as a bridge between strategy and execution, where business requirements become user stories and architecture sketches.",
      ],
    ],
  },
  {
    title: "FROM DASHBOARD TO TERMINAL",
    paragraphs: [
      [
        "I run a fleet of terminals and AI agents on my MacBook to automate the busywork and free my brain for problem‑solving.",
        "Coming from business, this ‘digital cockpit’ helps me translate high‑level objectives into step‑by‑step builds: from setting OKRs to spinning up a working prototype in an afternoon.",
      ],
    ],
  },
  {
    title: "WHERE STRATEGY MEETS CODE",
    paragraphs: [
      [
        "My workbench balances analog and digital: a leather notebook for capturing insights from customer calls or market research, a Kanban board for visualizing experiments, and yes, a farm full of animals to keep me grounded.",
        "This is where I turn business insights into experiments, sketching architectures, listing risks, and then committing the first line of code.",
      ],
    ],
  },
  {
    title: "SYSTEMS",
    paragraphs: [
      [
        "I use Linear for my own projects, Jira when I have to integrate with a client’s process, and a whiteboard when I’m brainstorming solo.",
      ],
    ],
  },
];

export function BentoSection() {
  return (
    <section className="max-w-2xl mx-auto px-6">
      <div className="space-y-12">
        {sections.map((section) => (
          <div
            key={section.title}
            className="space-y-2 hover:opacity-95 transition-opacity"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-foreground/90">
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
