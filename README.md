# patch-styles

> auto patch css/scss modules to children

[![NPM](https://img.shields.io/npm/v/patch-styles.svg)](https://www.npmjs.com/package/patch-styles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save patch-styles
```
or
```bash
yarn add patch-styles
```


## Usage

Instead of changing to use `classes.ClassName` just wrap your code with
`<PatchClasses classNames={classes}>`. See the example below or open it in
[StackBlitz](https://stackblitz.com/edit/react-mmlhw8?file=src/App.js).

### Example

```tsx
import React from 'react';
import PatchClasses from 'patch-styles';
import classes from './App.module.css';

const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const App = () => {
  const first = Math.random();
  const second = Math.random();

  return (
    <PatchClasses classNames={classes}>
      <div className={`App ${someCondition ? 'Option-1' : 'Option-2'}`}>
        <header className="App-header Some-class">
          <img src={REACT_LOGO} className="App-logo" alt="React Logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </PatchClasses>
  );
};
```

**Note:** The package includes typings too. So you don't need to import anything else with it.

## License

MIT © [hakobpogh](https://github.com/hakobpogh)
