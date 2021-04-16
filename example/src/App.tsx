import React, { useState } from 'react';
import PatchStyles from 'patch-styles';
import styles from './App.module.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ReactMarkdownPage from './pages/ReactMarkdown';
import UsageWithOnlyChildCheck from './pages/CopyToClipboardUsagePage';

const AppExample = () => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <PatchStyles classNames={styles} extraProps={['activeClassName', 'pageActiveClassName']}>
      <nav className="navbar">
        <NavLink to="/first" className="nav-link" activeClassName="active">First Page</NavLink>
        <NavLink to="/second" className="nav-link" activeClassName="active">Second Page</NavLink>
        <NavLink to="/react-markdown" className="nav-link" activeClassName="active">ReactMarkdown Preview</NavLink>
        <NavLink to="/only-child" className="nav-link" activeClassName="active">Usage with only child Preview</NavLink>
      </nav>

      <div>
        <button onClick={() => setShowFooter(!showFooter)}>{ showFooter ? 'Hide' : 'Show' } Footer</button>
      </div>

      <Switch>
        <Route path="/first">
          {
            showFooter ? (
              <FirstPage
                pageActiveClassName="With-AquaMarine-Text"
                footerNode={
                  <div className="footer">Some Footer</div>
                }
              />
            ) : <FirstPage pageActiveClassName="With-AquaMarine-Text" />
          }
        </Route>
        <Route path="/second">
          <SecondPage pageActiveClassName="With-DeepPink-Text" />
        </Route>
        <Route path="/react-markdown">
          <ReactMarkdownPage />
        </Route>
        <Route path="/only-child">
          <UsageWithOnlyChildCheck />
        </Route>
      </Switch>
    </PatchStyles>
  );
};

export default AppExample
