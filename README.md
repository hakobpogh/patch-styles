# patch-styles

> A declarative way for patching styles and switching to
> CSS/SCSS modules with just a few lines of code.

[![NPM](https://img.shields.io/npm/v/patch-styles.svg)][npm-patch-styles]
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)][js-style-guide]

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
`<PatchStyles classNames={classes}>`.
See the example below or open an advanced example in
[StackBlitz][stackblitz-example].

PatchStyles also patches every prop which is a react node.

### Example

```tsx
import React from 'react';
import PatchStyles from 'patch-styles';
import classes from './App.module.css';

const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const App = () => {
  const first = Math.random();
  const second = Math.random();

  return (
    <PatchStyles classNames={classes}>
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

          <CustomComponent
            useFallback
            fallbackElement={
              <b className="fallback-node">Some Fallback Node</b>
            }
          />
        </header>
      </div>
    </PatchStyles>
  );
};
```

**Note:** The package includes typings too. So you don't need to import anything else with it.

## Props

* `classNames: Record<string, string>`.
  This is a required prop and is used to map classNames
  to module-build names.
* `extraProps?: string | string[] | null`.
  (optional) Specify extra props to patch.
  This can be both a string array or a comma separated list.

  e.g. In the case of NavLink you can use this prop
  to make `<PatchStyles>` to patch your active class too.
  In this case you need to specify `activeClassName="my-active-class"`
  explicitly and in the `PatchStyles` use extraProps.

  See the example bellow or open it in [StackBlitz][stackblitz-example].

```jsx
<PatchStyles classNames={styles} extraProps={'activeClassName'}>
  {/* ... */}
  <nav className="navbar">
    <NavLink to="/first" className="nav-link" activeClassName="my-active-class">First Page</NavLink>
    <NavLink to="/second" className="nav-link" activeClassName="my-active-class">Second Page</NavLink>
  </nav>
  {/* ... */}
</PatchStyles>
```


## License

MIT © [hakobpogh][github-hakobpogh]

[github-hakobpogh]: https://github.com/hakobpogh
[stackblitz-example]: https://stackblitz.com/edit/react-patch-styles?file=src/App.js
[npm-patch-styles]: https://www.npmjs.com/package/patch-styles
[js-style-guide]: https://standardjs.com
