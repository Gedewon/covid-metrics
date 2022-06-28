import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import App from './App';
import LayoutDefault from './component/Layout/LayoutDefault';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LayoutDefault>
      <App />
    </LayoutDefault>
  </React.StrictMode>,
);
