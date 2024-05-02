"use client";
import React from "react";

export const Snippet = ({ code }) => {
  const [isSnippetShown, setIsSnippetShown] = React.useState(false);

  return isSnippetShown ? (
    code
  ) : (
    <div className="reveal">
      <button onClick={() => setIsSnippetShown(true)}>Reveal Content</button>
    </div>
  );
};
