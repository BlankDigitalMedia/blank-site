import { ReactNode } from 'react';

type FigureProps = {
  caption?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function Figure({ caption, className = 'figure', children }: FigureProps) {
  return (
    <figure className={className}>
      {children}
      {caption ? <figcaption className="caption">{caption}</figcaption> : null}
    </figure>
  );
}
