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
    "grid w-full grid-cols-1 gap-6 md:auto-rows-[18rem] md:grid-cols-2 grid-flow-row-dense",
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
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-card p-6 transition duration-200 hover:shadow-lg",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mt-2 mb-2 font-sans font-semibold text-foreground">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-muted-foreground">
          {description}
        </div>
      </div>
    </div>
  );
};
