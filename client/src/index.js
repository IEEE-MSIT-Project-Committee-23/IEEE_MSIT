import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/index";
import AboutUs from "./components/Home/AboutUs/index";
import Events from "./components/Home/Events/index";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




