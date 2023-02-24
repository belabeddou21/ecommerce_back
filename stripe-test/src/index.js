import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = 'http://localhost:5000'; // Replace with your server URL

ReactDOM.render(<App />, document.getElementById('root'));