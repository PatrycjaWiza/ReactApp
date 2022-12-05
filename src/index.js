import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ReactApp/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
