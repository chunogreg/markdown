import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function App() {
  const defaultText = `# H1 Text\n## H2 Text\n+ List\n\n\`Inline Code\`\n\`\`\`\nblock of code\n\`\`\`\n>Quote\n\n**Strong Text**\n### You can even click [here](www.google.com)\n![  This is an image](https://ibb.co/5YH7NwN)`;

  const [content, setContent] = useState(defaultText);

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div id="container">
        <textarea
          id="editor"
          value={content}
          onChange={handleContent}
        ></textarea>
        <div id="preview">
          <ReactMarkdown ramarkPlugins={[remarkBreaks]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
