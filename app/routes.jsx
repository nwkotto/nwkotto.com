// External components
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

// Internal components
import Main from "./main.jsx"
import ContentList from "./components/ContentList.jsx"
import Nwkotto from "./components/Nwkotto.jsx"

class App extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<Route path=":slug" component={Nwkotto}/>
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.body
);
