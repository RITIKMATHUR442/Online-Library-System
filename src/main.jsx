// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import './components/Navbar.css';
import './components/AddBookPage.css';
import './components/BookDetailsPage.css';
import './components/HomePage.css';
import './components/BrowseBooksPage.css';
import './components/NotFoundPage.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
