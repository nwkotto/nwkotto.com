import React from "react";

export default React.createClass({
  render: function() {
  	let delayTime = 1
  	let letters = Array.prototype.map.call(this.props.text, function(letter) {
  		// Update animation delay time
  		let styles = {
  			"animationDelay": `${delayTime}s`
  		}
  		delayTime += 0.5;
  		return (
  			<div className="block-letter" style={styles}>
  				{letter}
  			</div>
  		)
  	});
    return (
      <div className="sliding-text">
      	{letters}
      </div>
    );
  }
});