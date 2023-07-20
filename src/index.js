// Import the react and reactDOM libraries 

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App"

//Get a reference to the div with the root id 

const el = document.getElementById('root');

//Tell react to take control of that element 

const root = ReactDOM.createRoot(el);

//show th component on the screen 

root.render(<App/>);