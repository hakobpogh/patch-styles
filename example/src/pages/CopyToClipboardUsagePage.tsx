import React, { FC } from 'react';
import styles from './FirstPage.module.css';
import PatchStyles from 'patch-styles';
import CopyToClipboard from 'react-copy-to-clipboard';

const copyToClipboardNpmLink = 'https://www.npmjs.com/package/react-copy-to-clipboard';

const CopyToClipboardUsagePage: FC = () => {
  const text = 'some-text-copied';

  return (
    <PatchStyles classNames={styles}>
      <h2>Usage with CopyToClipboard inside</h2>

      <p>
        When using <a href={copyToClipboardNpmLink}>CopyToClipboard</a> or any other component
        which uses React.Children.only there was a bug in the PatchStyles which was causing
        an error.
      </p>

      <CopyToClipboard text={text}
                       onCopy={() => console.log(`copied text="${text}"`)}>
        <button>Copy to clipboard with span</button>
      </CopyToClipboard>
    </PatchStyles>
  );
};

export default CopyToClipboardUsagePage;
