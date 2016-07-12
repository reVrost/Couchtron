// require('../styles/main.less');

// 'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <div className="myDiv"> <h1>Couchtron</h1> Hi Jimmy! </div>,
//     document.getElementById('content')
// );


import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from  "./components/Hello.tsx";

ReactDOM.render(<Hello compiler="TypeScript" framework="React" />,
document.getElementById("content"));
    
