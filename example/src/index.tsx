import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
