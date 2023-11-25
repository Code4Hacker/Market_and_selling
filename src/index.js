import React from 'react';
import { createRoot }  from 'react-dom/client';
// import ReactDOM  from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import 'animate.css';

const root  = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);