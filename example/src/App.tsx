import React from 'react';
import PatchStyles from 'patch-styles';
import styles from './App.module.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ReactMarkdownPage from './pages/ReactMarkdown';

const AppExample = () => {
  return (
    <PatchStyles classNames={styles} extraProps={['activeClassName', 'pageActiveClassName']}>
      <nav className="navbar">
        <NavLink to="/first" className="nav-link" activeClassName="active">First Page</NavLink>
        <NavLink to="/second" className="nav-link" activeClassName="active">Second Page</NavLink>
        <NavLink to="/react-markdown" className="nav-link" activeClassName="active">ReactMarkdown Preview</NavLink>
      </nav>
      <Switch>
        <Route path="/first">
          <FirstPage pageActiveClassName="With-AquaMarine-Text" />
        </Route>
        <Route path="/second">
          <SecondPage pageActiveClassName="With-DeepPink-Text" />
        </Route>
        <Route path="/react-markdown">
          <ReactMarkdownPage />
        </Route>
      </Switch>
    </PatchStyles>
  );
};

export default AppExample
