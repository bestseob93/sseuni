import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

axios.defaults.baseURL = 'https://hg6pfn2h1m.execute-api.ap-northeast-2.amazonaws.com/dev';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
