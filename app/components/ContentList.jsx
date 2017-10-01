import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

import ContentDetail from "./ContentDetail.jsx"

export default class ContentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'activeElement': {}
    }
  }
  toggleActiveElement(element) {
    this.state.activeElement = element == this.state.activeElement ? {} : element;
  }
  isActive(element) {
    return element == this.state.activeElement;
  }
  listElementKey(idx) {
    return `${this.props.containerClass}-item-${idx}`
  }
  listClassName() {
    let color = this.state.activeElement.color || "";
    if (color) {
      color += " outlined";
    }
    return `${this.props.containerClass} ${color}`;
  }
  render() {
    let items = this.props.items.map((item, i) => {
      return (
        <ContentDetail
          key={this.listElementKey(i)}
          item={item}
          itemClass={this.props.itemClass || ""}
          onClick={this.toggleActiveElement.bind(this, item)}
          isActive={this.isActive(item)} />
      );
    });
    return (
      <div className={this.listClassName()}>
        {items}
      </div>
    );
  }
}