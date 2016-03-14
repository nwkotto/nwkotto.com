// External components
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

// Internal components
import Main from "./main.jsx"
import ContentList from "./components/ContentList.jsx"

let App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<Route path=":slug" component={ContentList}/>
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(
	<App />,
	document.body
);
