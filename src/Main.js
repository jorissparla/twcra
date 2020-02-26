import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import ReactMarkdown from "react-markdown/with-html";
// import "./styles/app.css";
// import "react-mde/lib/styles/css/react-mde-all.css";

function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: "Andre",
          value: "@andre"
        },
        {
          preview: "Angela",
          value: "@angela"
        },
        {
          preview: "David",
          value: "@david"
        },
        {
          preview: "Louise",
          value: "@louise"
        }
      ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export default function App() {
  const markdown = `
  This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
  `;
  const [value, setValue] = React.useState(markdown);
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <div className="container">
      <ReactMarkdown source={value} escapeHtml={false} className="bg-white border shadow-lg px-4 ml-2" />
      <ReactMde
        value={value}
        onChange={setValue}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
        loadSuggestions={loadSuggestions}
      />
    </div>
  );
}
