import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowerText: 'Hello Flower',
    }
  }
  render() {
    const { flowerText } = this.state;
    return(
      <div>{flowerText}</div>
    );
  }
}
export default App;
