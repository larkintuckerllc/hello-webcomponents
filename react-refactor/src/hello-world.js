import React from 'react';
import { render } from 'react-dom';
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
          .block--red {
            background-color: red;
          }
          .block--blue {
            background-color: blue;
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
    }
  }
  window.customElements.define('hello-world', HelloWorld);
});
