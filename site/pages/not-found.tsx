import { Base } from "../components/Base";

export const NotFound = () => (
  <Base url="/404.html" title="Not found">
    <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
      Not found
    </h1>
    <p className="mt-4">
      Nothing lives at this address.{" "}
      <a href="/" className="text-sky-700 underline dark:text-sky-400">
        Head home
      </a>{" "}
      or have a look through the{" "}
      <a href="/blog/" className="text-sky-700 underline dark:text-sky-400">
        blog
      </a>
      .
    </p>
  </Base>
);
