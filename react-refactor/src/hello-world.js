import React from 'react';
import { render } from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';
import App from './App';

window.addEventListener('WebComponentsReady', () => {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      const shadowRootEl = this.attachShadow({mode: 'open'});
      shadowRootEl.innerHTML = `
        <style>
          #root {
            display: inline-block;
            font-size: 0px;
          }
          .block {
            display: inline-block;
            width: 100px;
            height: 100px;
          }
          #root__flower {
            font-size: 20px;
          }
        </style>
        <div id="root"></div>
      `;
      const internalRootEl = shadowRootEl.getElementById('root');
      render(
        <App />,
        shadowRootEl.getElementById('root'),
      );
      retargetEvents(shadowRootEl);
    }
  }
  window.customElements.define('hello-world', HelloWorld);
});
