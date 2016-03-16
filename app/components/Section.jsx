import React from "react"

import ContentList from "./ContentList.jsx"

export default class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    let items = [
      {
        'title': 'Hello',
        'subtitle': 'Moto',
        'content': 'Yo'
      }
    ]
    this.setState({ items });
  }
  render() {
    return (
      <ContentList containerClass="section" items={this.state.items} />
    )
  }
}