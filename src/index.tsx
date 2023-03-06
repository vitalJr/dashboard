import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pt from 'date-fns/locale/pt';
import { registerLocale } from 'react-datepicker';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import routes from './routes';

import 'react-datepicker/dist/react-datepicker.css';

import './assets/vendor/css/bootstrap-grid.min.css';

registerLocale('pt-BR', pt);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
