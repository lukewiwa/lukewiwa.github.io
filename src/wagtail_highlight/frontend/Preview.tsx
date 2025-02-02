import hljs from "highlight.js";
import "highlight.js/styles/default.css";

const React = window.React;

type PreviewProps = {
  language: string;
  code: string;
};

const Preview = ({ language, code }: PreviewProps) => {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (ref.current instanceof HTMLElement) {
      delete ref.current.dataset.highlighted;
      hljs.highlightElement(ref.current);
    }
  }, [language, code]);
  return (
    <pre>
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default Preview;
