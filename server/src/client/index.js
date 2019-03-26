import React from 'react';
import {render} from 'react-dom';
import {App} from './App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {mainReducer} from './reducers';
import {Run} from './services/AutoCalendarService';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'UA-62336323-2'
}

const store = createStore(mainReducer);
TagManager.initialize(tagManagerArgs)
Run();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
export {store}