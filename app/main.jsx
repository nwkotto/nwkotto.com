import "./styles/main.styl"

// External components
import React from "react"

// Internal components
import ContentList from "./components/ContentList.jsx"

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'items': []
		}
	}
	componentDidMount() {
		var items = [
			{
				'title': 'About Me',
				'subtitle': "Srsly",
				'slug': 'about-me',
				'color': 'red'
			},
			{
				'title': 'Projects',
				'subtitle': 'What I do',
				'slug': 'projects',
				'color': 'orange'
			},
			{
				'title': 'Come at me',
				'subtitle': 'brah',
				'slug': 'come-at-me',
				'color': 'green'
			}
		];
		this.setState({
			'items': items
		});
	}
	render() {
		return (
			<div className="nwkotto container">
				<h1>Welcome to Zombocom</h1>
				<div className="content">
					<ContentList items={this.state.items} containerClass="content-index" />
					{this.children}
				</div>
			</div>
		)
	}
}