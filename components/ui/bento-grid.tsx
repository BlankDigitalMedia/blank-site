import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
        "grid w-full grid-cols-1 auto-rows-[minmax(14rem,auto)] gap-5 sm:gap-6 md:grid-cols-2 md:auto-rows-[minmax(16rem,auto)] xl:grid-cols-3 xl:auto-rows-[minmax(18rem,auto)] xl:gap-7",
    className,
    )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  density = "default",
  align = "start",
  watermarkIcon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  density?: "default" | "compact";
  align?: "start" | "center" | "between";
  watermarkIcon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm motion-safe:transition-all motion-safe:duration-200 hover:shadow-md motion-safe:hover:-translate-y-[1px] focus-within:ring-1 focus-within:ring-border/70",
        density === "compact" ? "px-5 pt-5 pb-4 md:px-6 md:pt-6" : "p-5 md:p-6",
        className,
      )}
    >
      {header ? <div className="mb-3 text-sm text-muted-foreground sm:text-base">{header}</div> : null}
      <div className={cn(
        "flex flex-1 flex-col gap-2.5",
        align === "center" && "justify-center",
        align === "between" && "justify-between"
      )}>
        {(icon || title) && (
          <div className="flex items-start gap-3">
            {icon ? (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
                {icon}
              </span>
            ) : null}
            {title ? (
              <h3 className="min-w-0 text-pretty text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
                {title}
              </h3>
            ) : null}
          </div>
        )}
        {description ? (
          typeof description === "string" ? (
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : (
            <div className="min-w-0 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </div>
          )
        ) : null}
      </div>
      {watermarkIcon && (
        <div className="pointer-events-none absolute bottom-3 right-3 opacity-10" aria-hidden="true">
          {watermarkIcon}
        </div>
      )}
    </div>
  );
};
