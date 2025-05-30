import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/Login.css'; // Certifica-te que este caminho está correto

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
