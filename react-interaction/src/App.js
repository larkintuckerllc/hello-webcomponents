import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: 'Hello Sample',
    };
  }
  handlePhraseClick(phrase) {
    this.setState({
      sample: phrase,
    });
  }
  handleResetClick() {
    const { helloInteraction } = this;
    helloInteraction.resetSample();
  }
  render() {
    const { sample } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <hello-interaction
            sample={sample}
            ref={element =>  this.helloInteraction = element}
          />
        </div>
        <button onClick={() => this.handlePhraseClick('Roses are red.')}>Red</button>
        <button onClick={() => this.handlePhraseClick('Violets are blue.')}>Blue</button>
        <button onClick={() => this.handleResetClick()}>RESET</button>
      </div>
    );
  }
}

export default App;
