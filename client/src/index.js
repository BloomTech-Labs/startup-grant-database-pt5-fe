import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/browser';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

Sentry.init({dsn: "https://889f61c0912a41a0ad235050efeba874@sentry.io/1783456"});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
