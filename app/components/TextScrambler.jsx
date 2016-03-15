import React from "react"

export default function TextScrambler(Component) {
  return class ContentList extends React.Component {
    constructor(props) {
      super(props);
      let that = this;

      // Base state
      let timeElapsed = 0;

      // Settings
      let { totalTime = 3000, timePerIteration = 100 } = this.props.scramblerSettings || {};
      let settings = { timeElapsed, totalTime, timePerIteration };

      // Duplicate props
      let updatedProps = Object.assign({}, props);

      // Update state
      let state = { settings, updatedProps, timeElapsed };
      this.state = state;
    }
    getRandomIndex(values) {
      return Math.floor(Math.random() * values.length);
    }
    swapElements(values, index1, index2) {
      let temp = values[index1];
      values[index1] = values[index2];
      values[index2] = temp;
      return values;
    }
    scrambleValue(text) {
      let that = this,
        words = text.split(' ');

      words = words.map(function(word) {
        let charArray = word.split(''),
          charArrayClone = charArray.slice();
        if (charArray.length > 1) {
          let index1 = that.getRandomIndex(charArray);
          let index2 = that.getRandomIndex(charArrayClone.splice(0, index1).concat(charArrayClone.splice(index1 + 1)));
          charArray = that.swapElements(charArray, index1, index2);
        }
        return charArray.join("");
      });

      return words.join(" ");
    }
    scramble() {
      let that = this,
        updatedProps = that.state.updatedProps;

      this.props.targets.map(function(toScramble) {
        updatedProps[toScramble] = that.scrambleValue(updatedProps[toScramble]);
      });
      let timeElapsed = that.state.settings.timeElapsed += that.state.settings.timePerIteration;
      this.setState({ updatedProps, timeElapsed });
    }
    unscramble() {
      let updatedProps = Object.assign({}, this.props);
      this.setState({ updatedProps });
    }
    componentDidMount() {
      let that = this,
        settings = that.state.settings;

      let interval = setInterval(function() {
        that.scramble()
        if (settings.timeElapsed >= settings.totalTime) {
          clearInterval(interval);
          that.unscramble();
        }
      }, settings.timePerIteration);
    }
    render() {
      return (
        <Component
          {...this.state.updatedProps} />
      )
    }
  }
}