import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Weather } from './component/Weather.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weather />
  </StrictMode>
);
