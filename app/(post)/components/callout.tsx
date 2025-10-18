export const Callout = ({ emoji = null, text = null, children }) => (
  <div className="bg-muted dark:bg-muted text-muted-foreground flex items-start p-3 my-6 text-base">
    <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
    <span className="block grow">{text ?? children}</span>
  </div>
);
