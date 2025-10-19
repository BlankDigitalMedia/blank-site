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
        "grid w-full grid-cols-1 auto-rows-[minmax(16rem,auto)] gap-5 sm:gap-6 md:grid-cols-2 md:auto-rows-[minmax(17rem,auto)] xl:grid-cols-3 xl:auto-rows-[minmax(18rem,auto)]",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition duration-200 sm:p-6 hover:shadow-lg",
        className,
      )}
    >
      {header ? <div className="mb-3 text-sm text-muted-foreground sm:text-base">{header}</div> : null}
      <div className="flex flex-1 flex-col gap-4">
        {(icon || title) && (
          <div className="flex items-start gap-3">
            {icon ? (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
                {icon}
              </span>
            ) : null}
            {title ? (
              <h3 className="min-w-0 text-pretty text-base font-semibold leading-snug text-foreground sm:text-lg">
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
    </div>
  );
};
