/*
 * @Author: your name
 * @Date: 2021-04-05 14:20:15
 * @LastEditTime: 2021-04-05 14:50:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap4/try-react/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
