import "./admin-highlight.css";
import LanguageSelect from "./LanguageSelect";
import Preview from "./Preview";

const React = window.React;
const ReactDOM = window.ReactDOM;

class CodeHighlightBlockDefinition extends window.wagtailStreamField.blocks
  .StructBlockDefinition {
  language: string | undefined;
  code: string | undefined;
  render(placeholder, prefix, initialState, initialError) {
    const block = super.render(placeholder, prefix, initialState, initialError);

    const language = document.getElementById(
      prefix + "-language"
    ) as HTMLSelectElement;

    this.language = language.value;

    const code = document.getElementById(
      prefix + "-code"
    ) as HTMLTextAreaElement;

    this.code = code.value;

    const root = document.getElementById(prefix + "-preview") as HTMLDivElement;
    const renderPreview = ({ language, code }) => {
      ReactDOM.render(<Preview language={language} code={code} />, root);
    };
    renderPreview({ language: language.value, code: code.value });
    language.addEventListener("change", (event) => {
      this.language = event.target.value;
      renderPreview({ language: event.target.value, code: this.code });
    });
    code.addEventListener("input", (event) => {
      this.code = event.target.value;
      renderPreview({ language: this.language, code: event.target.value });
    });
    return block;
  }
}
window.telepath.register(
  "wagtail_highlight.blocks.CodeHighlightBlock",
  CodeHighlightBlockDefinition
);
