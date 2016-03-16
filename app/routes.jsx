// External components
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

// Internal components
import Main from "./main.jsx"
import ContentList from "./components/ContentList.jsx"
import Section from "./components/Section.jsx"

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="" component={Main}>
					<Route path="/" component={Section}/>
					<Route path="/:slug" component={Section}/>
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.body
);
