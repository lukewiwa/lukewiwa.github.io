import { PropsWithChildren } from "react-types";

interface ProjectEntryProps {
  title: string;
  url: string;
}

export default function ProjectEntry(
  { title, url, children }: PropsWithChildren<ProjectEntryProps>,
) {
  return (
    <section className="pb2">
      <h3>
        <a href={url}>
          {title}
        </a>
      </h3>
      {children}
    </section>
  );
}
