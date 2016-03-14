import React from "react";
import { Router, Route, Link, browserHistory } from "react-router"

export default React.createClass({
  render: function() {
    let items = this.props.items.map(function(item) {
      let className = `item outlined ${item.color}`;
      let contents = (
        <div>
          <h2>{item.title}</h2>
          <h3>{item.subtitle}</h3>
        </div>
      );
      let wrapper = (
        <div className={className}>
          {contents}
        </div>
      );
      if (item.slug) {
        // Create link wrapper
        wrapper = (
          <Link to={`/${item.slug}`} className={className}>
            {contents}
          </Link>
        );
      }
      return wrapper;
    });
    return (
      <div>
        <div className={this.props.containerClass}>
          {items}
        </div>
        {this.children}
      </div>
    );
  }
});