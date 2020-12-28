import React, { FC } from "react";
import PatchStyles from "patch-styles";
import styles from "./SecondPage.module.css";

interface SecondPageProp {
  pageActiveClassName: string;
}

const SecondPage: FC<SecondPageProp> = ({ pageActiveClassName }) => {
  return (
    <PatchStyles classNames={styles}>
      <div className={`SecondPage ${pageActiveClassName ?? ''}`}>
        <h2 className="SecondPage-heading">Second Page</h2>
      </div>
    </PatchStyles>
  );
};

export default SecondPage;
