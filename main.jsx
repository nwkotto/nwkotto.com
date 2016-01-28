import "./main.styl"

// External components
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

// Internal components
import Nwkotto from "./components/Nwkotto.jsx"

let App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Nwkotto}/>
			</Router>
		)
	}
})

ReactDOM.render(
	<App />,
	document.body
);
