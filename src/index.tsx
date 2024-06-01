import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Создание корневого элемента для рендеринга приложения
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Рендеринг приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Опциональное измерение производительности
reportWebVitals();
