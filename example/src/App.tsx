import React from 'react';
import PatchStyles from 'patch-styles';
import styles from './App.module.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <PatchStyles classNames={styles} extraProps={['activeClassName', 'pageActiveClassName']}>
      <nav className="navbar">
        <NavLink to="/first" className="nav-link" activeClassName="active">First Page</NavLink>
        <NavLink to="/second" className="nav-link" activeClassName="active">Second Page</NavLink>
      </nav>
      <Switch>
        <Route path="/first">
          <FirstPage pageActiveClassName="With-AquaMarine-Text" />
        </Route>
        <Route path="/second">
          <SecondPage pageActiveClassName="With-DeepPink-Text" />
        </Route>
      </Switch>
    </PatchStyles>
  );
};

export default App
