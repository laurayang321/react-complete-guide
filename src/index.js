import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<app />, document.getElementById('root'));
registerServiceWorker();
