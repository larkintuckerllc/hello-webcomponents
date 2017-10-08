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
      <div>
        <div data-flower="red rose" className="block block--red"></div>
        <div data-flower="blue iris" className="block block--blue"></div>
        <div id="root__flower">{flowerText}</div>
      </div>
    );
  }
}
export default App;
