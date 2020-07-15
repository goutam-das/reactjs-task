import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import 'semantic-ui-css/semantic.min.css';
import './assets/scss/index.scss';

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;