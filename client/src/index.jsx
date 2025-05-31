import React from "react"
import ReactDOM from "react-dom/client";
import App from "./components/App";
// In src/index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
ReactDOM.createRoot(document.querySelector('#root')).render(<App/>)