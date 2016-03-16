import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, browserHistory } from "react-router"

export default class ContentDetail extends React.Component {
  activeSelector() {
    return this.props.isActive ? "active" : "";
  }
  linkTo() {
    return this.props.isActive ? '/' : `/${this.props.item.slug}`;
  }
  render() {
    let item = this.props.item;
    let className = `item ${this.props.itemClass} ${item.color} ${this.activeSelector()}`;
    let contents = (
      <div>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
      </div>
    );
    let wrapper = (
      <div className={className} onClick={this.props.onClick}>
        {contents}
      </div>
    );
    if (item.slug) {
      // Create link wrapper
      wrapper = (
        <Link to={this.linkTo()} className={className} onClick={this.props.onClick}>
          {contents}
        </Link>
      );
    }
    return wrapper;
  }
}