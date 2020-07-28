import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { render } from 'react-dom';
import App from './containers/App';

render (
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
