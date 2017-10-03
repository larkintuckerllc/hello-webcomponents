"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.addEventListener('WebComponentsReady', function () {
  var rootEl = document.getElementById('root');

  var HelloWorld = function (_HTMLElement) {
    _inherits(HelloWorld, _HTMLElement);

    function HelloWorld() {
      _classCallCheck(this, HelloWorld);

      var _this = _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).call(this));

      _this.handleClick = _this.handleClick.bind(_this);
      var shadowRootEl = _this.attachShadow({ mode: 'open' });
      shadowRootEl.innerHTML = '\n        <style>\n          #root {\n            display: inline-block;\n            font-size: 0px;\n          }\n          .block {\n            display: inline-block;\n            width: 100px;\n            height: 100px;\n          }\n          .block--red {\n            background-color: red;\n          }\n          .block--blue {\n            background-color: blue;\n          }\n          #root__flower {\n            font-size: 20px;\n          }\n        </style>\n        <div id="root">\n          <div data-flower="red rose" class="block block--red"></div>\n          <div data-flower="blue iris" class="block block--blue"></div>\n          <div id="root__flower">&nbsp;</div>\n        </div>\n      ';
      var internalRootEl = shadowRootEl.getElementById('root');
      _this.flowerEl = shadowRootEl.getElementById('root__flower');
      _this.blockEls = internalRootEl.getElementsByClassName('block');
      for (var i = 0; i < _this.blockEls.length; i += 1) {
        var blockEl = _this.blockEls[i];
        blockEl.addEventListener('click', _this.handleClick);
      }
      return _this;
    }

    _createClass(HelloWorld, [{
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        for (var i = 0; i < this.blockEls.length; i += 1) {
          var blockEl = this.blockEls[i];
          blockEl.removeEventListener('click', this.handleClick);
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick(e) {
        this.flowerEl.innerHTML = e.target.dataset.flower;
      }
    }]);

    return HelloWorld;
  }(HTMLElement);

  window.customElements.define('hello-world', HelloWorld);
  rootEl.appendChild(document.createElement('hello-world'));
  rootEl.appendChild(document.createElement('hello-world'));
});