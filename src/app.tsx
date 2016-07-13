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

class Greeter {
    constructor(public greeting: string) {}
    greet() {
        return "<u>" + this.greeting + "</u>";
    }
};

var greeter = new Greeter("Andrew the gay typescript-boy");

ReactDOM.render(<Hello compiler={greeter.greet()} framework="React" />,
document.getElementById("content"));
    
