import React from "react";
import SlidingText from "./SlidingText.jsx"

export default React.createClass({
  render: function() {
    return (
      <div className="fader">
      	<SlidingText text="nwkotto"/>
        {this.props.children}
      </div>
    );
  }
});