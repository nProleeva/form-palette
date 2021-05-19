import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {reducer as store} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStore(store)}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
