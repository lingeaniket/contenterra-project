import React from "react";
import DOMPurify from "dompurify";

function SecureHTML({ markdown }) {
    const decodedHtml = decodeHtmlEntities(markdown);
    const cleanHtml = DOMPurify.sanitize(decodedHtml.replace(/\n+/g, ""));

    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}

function decodeHtmlEntities(encodedString) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
}

export default SecureHTML;
