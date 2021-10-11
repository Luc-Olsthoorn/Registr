import React from 'react';
import {render} from 'react-dom';
import {App} from './App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {mainReducer} from './reducers';
import {Run} from './services/AutoCalendarService';


const store = createStore(mainReducer);
Run();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
export {store}