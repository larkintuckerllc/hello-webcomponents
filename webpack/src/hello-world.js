window.addEventListener('WebComponentsReady', () => {
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      const shadowRootEl = this.attachShadow({mode: 'open'});
      shadowRootEl.innerHTML = '<div>Hello World</div>';
      const internalRootEl = shadowRootEl.getElementById('root');
    }
  }
  window.customElements.define('hello-world', HelloWorld);
});
