<<<<<<< HEAD:formly-in-action/src/index.js
import {createRoot} from "react-dom/client";

import "./index.less";
import App from "./App";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.less";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
>>>>>>> c684ff4a5a3f5c3b1487448dac0db29212bb0c2e:formily-in-action/src/index.js

const root = createRoot(document.getElementById("root")).render(<App />);
