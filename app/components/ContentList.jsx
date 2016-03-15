import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

import ContentDetail from "./ContentDetail.jsx"

export default class ContentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'activeKey': ''
    }
    console.log(this.state);
  }
  toggleActiveElement(key) {
    console.log(this);
    this.state.activeKey = key == this.state.activeKey ? "" : key;
  }
  isActive(key) {
    return key == this.state.activeKey;
  }
  listElementKey(idx) {
    return `${this.props.containerClass}-item-${idx}`
  }
  render() {
    let that = this;
    let items = that.props.items.map(function(item, i) {
      return (
        <ContentDetail
          key={that.listElementKey(i)}
          item={item}
          onClick={that.toggleActiveElement.bind(that, that.listElementKey(i))}
          isActive={that.isActive(that.listElementKey(i))} />
      );
    });
    return (
      <div className={this.props.containerClass}>
        {items}
      </div>
    );
  }
}