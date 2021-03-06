import React, { FC, ReactNode } from "react";
import styles from "./FirstPage.module.css";
import PatchStyles from "patch-styles";

interface FirstPageProp {
  pageActiveClassName: string;
  footerNode?: ReactNode | null;
}

const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const FirstPage: FC<FirstPageProp> = ({ pageActiveClassName = '', footerNode }) => {
  return (
    <PatchStyles classNames={styles}>
      <div className={`FirstPage ${pageActiveClassName}`}>
        <header className="FirstPage-header Some-class">
          <img src={REACT_LOGO} className="FirstPage-logo" alt="React Logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="FirstPage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {footerNode}
      </div>
    </PatchStyles>
  );
};

export default FirstPage;
