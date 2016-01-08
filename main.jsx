import "./main.styl"

import SlidingText from "./components/SlidingText.jsx"
import React from "react"
import ReactDOM from "react-dom"

document.write("<div id='app'></div>");
ReactDOM.render(
	<SlidingText text="nwkotto" />,
	document.getElementById("app")
);
