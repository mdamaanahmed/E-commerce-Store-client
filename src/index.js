import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
