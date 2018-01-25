import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import 'normalize.css';
import './index.scss';

import 'babel-core/register';
import 'babel-polyfill';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));