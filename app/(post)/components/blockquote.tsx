import type { ReactNode } from "react";

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-5 text-muted-foreground pl-3 border-l-4 border-muted-foreground">
      {children}
    </blockquote>
  );
}
