import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import { Provider } from 'react-redux';
import App from './App';
import LayoutDefault from './component/Layout/LayoutDefault';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <LayoutDefault>
        <App />
      </LayoutDefault>
    </React.StrictMode>
  </Provider>,
);
