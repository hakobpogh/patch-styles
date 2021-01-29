import React, { FC } from "react";
import styles from "./ReactMarkdown.module.css";
import PatchStyles from "patch-styles";
import ReactMarkdown from 'react-markdown';

const ReactMarkdownPage: FC = () => {
  const myMarkdown = `
  [action] short description

   # description
   some advanced description here with markdown syntax

   # some heading
   * [action] description
   * [action] description
  `;

  return (
    <PatchStyles classNames={styles}>
      <div className="ReactMarkdown">
        <h2 className="ReactMarkdown-heading">React Markdown with PatchStyles preview</h2>

        <ReactMarkdown>{myMarkdown}</ReactMarkdown>
      </div>
    </PatchStyles>
  );
};

export default ReactMarkdownPage;
