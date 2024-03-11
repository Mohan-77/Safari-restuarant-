import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import statement
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"; // Only import BrowserRouter once
import { ShopProvider } from './ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);


