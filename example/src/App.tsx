import React from 'react';
import PatchClasses from 'patch-styles';
import classes from './App.module.css';

const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

const App = () => {
  const first = Math.random();
  const second = Math.random();

  return (
    <PatchClasses classNames={classes}>
      <div className={`App ${first < second ? 'With-DeepPink-Text' : 'With-AquaMarine-Text'}`}>
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

export default App
