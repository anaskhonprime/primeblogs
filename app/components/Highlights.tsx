import { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/vs2015.css";

hljs.registerLanguage("javascript", javascript);

interface HighlightCodeProps {
    content: string;
}

const HighlightCode: React.FC<HighlightCodeProps> = ({ content }) => {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div className="editor">
            <pre className="soft-margin">
                <code
                    className="code hljs"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></code>
            </pre>
        </div>
    );
};

export default HighlightCode;