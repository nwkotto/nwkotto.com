import "./main.styl"

import Nwkotto from "./components/nwkotto.jsx"
import React from "react"
import ReactDOM from "react-dom"

document.write("<div id='app'></div>");
ReactDOM.render(
	<Nwkotto />,
	document.getElementById("app")
);
