"use strict";
window.addEventListener('WebComponentsReady', () => {
  const rootEl = document.getElementById('root');
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
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
        <div id="root">
          <div data-flower="red rose" class="block block--red"></div>
          <div data-flower="blue iris" class="block block--blue"></div>
          <div id="root__flower">&nbsp;</div>
        </div>
      `;
      const internalRootEl = shadowRootEl.getElementById('root');
      this.flowerEl = shadowRootEl.getElementById('root__flower');
      this.blockEls = internalRootEl.getElementsByClassName('block');
      for (let i = 0; i < this.blockEls.length; i += 1) {
        const blockEl = this.blockEls[i];
        blockEl.addEventListener('click', this.handleClick);
      }
    }
    disconnectedCallback() {
      for (let i = 0; i < this.blockEls.length; i += 1) {
        const blockEl = this.blockEls[i];
        blockEl.removeEventListener('click', this.handleClick);
      }
    }
    handleClick(e) {
      this.flowerEl.innerHTML = e.target.dataset.flower;
    }
  }
  window.customElements.define('hello-world', HelloWorld);
  rootEl.appendChild(document.createElement('hello-world'));
  rootEl.appendChild(document.createElement('hello-world'));
});
