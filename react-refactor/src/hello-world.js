import React from 'react';
import { render } from 'react-dom';

window.addEventListener('WebComponentsReady', () => {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      const shadowRootEl = this.attachShadow({mode: 'open'});
      shadowRootEl.innerHTML = '<div id="root"></div>';
      const internalRootEl = shadowRootEl.getElementById('root');
      render(
        <div>Hello World</div>,
        shadowRootEl.getElementById('root'),
      );
    }
  }
  window.customElements.define('hello-world', HelloWorld);
});
