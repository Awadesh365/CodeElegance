
// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import application-specific files
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the root component of the application
// The root component is the main App component
// It is wrapped in a React StrictMode component for extra checks in development
// The root component is rendered into an HTML element with the id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app,
// pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
