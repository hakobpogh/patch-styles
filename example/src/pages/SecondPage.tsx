import React, { FC } from "react";
import styles from "./SecondPage.module.css";
import PatchStyles from "patch-styles";

interface SecondPageProp {
  pageActiveClassName: string;
}

const SecondPage: FC<SecondPageProp> = ({ pageActiveClassName }) => {
  const str = 'Some text content';
  return (
    <PatchStyles classNames={styles}>
      <div className={`SecondPage ${pageActiveClassName ?? ''}`}>
        <h2 className="SecondPage-heading">Second Page</h2>
        <div>{str}</div>
      </div>
    </PatchStyles>
  );
};

export default SecondPage;
