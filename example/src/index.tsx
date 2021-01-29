import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import AppExample from './App'
import { BrowserRouter } from 'react-router-dom'

const root = (
  <BrowserRouter>
    <AppExample />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
