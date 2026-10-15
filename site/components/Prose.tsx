/** Rendered markdown, styled by @tailwindcss/typography. */
export const Prose = ({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) => (
  <div
    className={`prose prose-stone dark:prose-invert prose-a:text-sky-700 dark:prose-a:text-sky-400 max-w-none ${className}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
