import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'

// 1) I'd advice us to use lib styled-components for styling. It's easy to use and save time

// 2) I'd advice us to add some linter which will automatically fix our incorrect tabs
// I prefer 1 tab = 2 spaces at least because we write html in js files (jsx) with deep tree

// 3) Let's use all features of redux-toolkit

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
