import React from 'react';
import ReactDOM from 'react-dom';
import * as tf from '@tensorflow/tfjs';
import App from './App';
import './index.css';

tf.setBackend('webgl').then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
