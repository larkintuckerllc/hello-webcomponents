"use strict";
const thisDocument = document.currentScript.ownerDocument;
window.addEventListener('WebComponentsReady', () => {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      this.handleClick = this.handleClick.bind(this);
      const shadowRootEl = this.attachShadow({mode: 'open'});
      const template = thisDocument.getElementById('hello-world');
      const clone = document.importNode(template.content, true);
      shadowRootEl.appendChild(clone);
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
});
