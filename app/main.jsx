import "./styles/main.styl"

// External components
import React from "react"

// Internal components
import ContentList from "./components/ContentList.jsx"

export default React.createClass({
	getInitialState: function() {
		return {
			'items': []
		}
	},
	componentDidMount: function() {
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
	},
	render: function() {
		return (
			<div id="nwkotto container">
				<h1>Welcome to Zombocom</h1>
				<ContentList items={this.state.items} containerClass="content-index" />
			</div>
		)
	}
})