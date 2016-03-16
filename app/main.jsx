import "./styles/main.styl"

// External components
import React from "react"

// Internal components
import ContentList from "./components/ContentList.jsx"
import TextScrambler from "./components/TextScrambler.jsx"
import Header from "./components/Header.jsx"

let ScrambledHeader = TextScrambler(Header);

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
				<ScrambledHeader title='nwkotto codes' targets={['title']} containerClass="content-header"/>
				<div className="content">
					<ContentList items={this.state.items} itemClass="outlined" containerClass="section-index" />
					{this.props.children}
				</div>
			</div>
		)
	}
}