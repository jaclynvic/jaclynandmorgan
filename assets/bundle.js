(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * @property inQuad
 * @static
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var inQuad = function inQuad(t) {
    return t * t;
};

exports.inQuad = inQuad;
/**
 * @property outQuad
 * @static
 */
var outQuad = function outQuad(t) {
    return -(t -= 1) * t + 1;
};

exports.outQuad = outQuad;
/**
 * @property inOutQuad
 * @static
 */
var inOutQuad = function inOutQuad(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t;
    return -0.5 * (--t * (t - 2) - 1);
};

exports.inOutQuad = inOutQuad;
/**
 * @property inCubic
 * @static
 */
var inCubic = function inCubic(t) {
    return t * t * t;
};

exports.inCubic = inCubic;
/**
 * @property outCubic
 * @static
 */
var outCubic = function outCubic(t) {
    return --t * t * t + 1;
};

exports.outCubic = outCubic;
/**
 * @property inOutCubic
 * @static
 */
var inOutCubic = function inOutCubic(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t;
    return 0.5 * ((t -= 2) * t * t + 2);
};

exports.inOutCubic = inOutCubic;
/**
 * @property inQuart
 * @static
 */
var inQuart = function inQuart(t) {
    return t * t * t * t;
};

exports.inQuart = inQuart;
/**
 * @property outQuart
 * @static
 */
var outQuart = function outQuart(t) {
    return -(--t * t * t * t - 1);
};

exports.outQuart = outQuart;
/**
 * @property inOutQuart
 * @static
 */
var inOutQuart = function inOutQuart(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t * t;
    return -0.5 * ((t -= 2) * t * t * t - 2);
};

exports.inOutQuart = inOutQuart;
/**
 * @property inQuint
 * @static
 */
var inQuint = function inQuint(t) {
    return t * t * t * t * t;
};

exports.inQuint = inQuint;
/**
 * @property outQuint
 * @static
 */
var outQuint = function outQuint(t) {
    return --t * t * t * t * t + 1;
};

exports.outQuint = outQuint;
/**
 * @property inOutQuint
 * @static
 */
var inOutQuint = function inOutQuint(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
};

exports.inOutQuint = inOutQuint;
/**
 * @property inSine
 * @static
 */
var inSine = function inSine(t) {
    return -1.0 * Math.cos(t * (Math.PI / 2)) + 1.0;
};

exports.inSine = inSine;
/**
 * @property outSine
 * @static
 */
var outSine = function outSine(t) {
    return Math.sin(t * (Math.PI / 2));
};

exports.outSine = outSine;
/**
 * @property inOutSine
 * @static
 */
var inOutSine = function inOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
};

exports.inOutSine = inOutSine;
/**
 * @property inExpo
 * @static
 */
var inExpo = function inExpo(t) {
    return t === 0 ? 0.0 : Math.pow(2, 10 * (t - 1));
};

exports.inExpo = inExpo;
/**
 * @property outExpo
 * @static
 */
var outExpo = function outExpo(t) {
    return t === 1.0 ? 1.0 : -Math.pow(2, -10 * t) + 1;
};

exports.outExpo = outExpo;
/**
 * @property inOutExpo
 * @static
 */
var inOutExpo = function inOutExpo(t) {
    if (t === 0) return 0.0;
    if (t === 1.0) return 1.0;
    if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    return 0.5 * (-Math.pow(2, -10 * --t) + 2);
};

exports.inOutExpo = inOutExpo;
/**
 * @property inCirc
 * @static
 */
var inCirc = function inCirc(t) {
    return -(Math.sqrt(1 - t * t) - 1);
};

exports.inCirc = inCirc;
/**
 * @property outCirc
 * @static
 */
var outCirc = function outCirc(t) {
    return Math.sqrt(1 - --t * t);
};

exports.outCirc = outCirc;
/**
 * @property inOutCirc
 * @static
 */
var inOutCirc = function inOutCirc(t) {
    if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
};

exports.inOutCirc = inOutCirc;
/**
 * @property inElastic
 * @static
 */
var inElastic = function inElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1.0;
    if (t === 0) return 0.0;
    if (t === 1) return 1.0;
    if (!p) p = 0.3;
    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
};

exports.inElastic = inElastic;
/**
 * @property outElastic
 * @static
 */
var outElastic = function outElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1.0;
    if (t === 0) return 0.0;
    if (t === 1) return 1.0;
    if (!p) p = 0.3;
    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1.0;
};

exports.outElastic = outElastic;
/**
 * @property inOutElastic
 * @static
 */
var inOutElastic = function inOutElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1.0;
    if (t === 0) return 0.0;
    if ((t /= 0.5) === 2) return 1.0;
    if (!p) p = 0.3 * 1.5;
    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
    if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1.0;
};

exports.inOutElastic = inOutElastic;
/**
 * @property inBack
 * @static
 */
var inBack = function inBack(t, s) {
    if (s === undefined) s = 1.70158;
    return t * t * ((s + 1) * t - s);
};

exports.inBack = inBack;
/**
 * @property outBack
 * @static
 */
var outBack = function outBack(t, s) {
    if (s === undefined) s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
};

exports.outBack = outBack;
/**
 * @property inOutBack
 * @static
 */
var inOutBack = function inOutBack(t, s) {
    if (s === undefined) s = 1.70158;
    if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
};

exports.inOutBack = inOutBack;
/**
 * @property inBounce
 * @static
 */
var inBounce = function inBounce(t) {
    return 1.0 - Easing.outBounce(1.0 - t);
};

exports.inBounce = inBounce;
/**
 * @property outBounce
 * @static
 */
var outBounce = function outBounce(t) {
    if (t < 1 / 2.75) {
        return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
        return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
};

exports.outBounce = outBounce;
/**
 * @property inOutBounce
 * @static
 */
var inOutBounce = function inOutBounce(t) {
    if (t < 0.5) return Easing.inBounce(t * 2) * 0.5;
    return Easing.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
};
exports.inOutBounce = inOutBounce;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _STATE$TRANSITION, _stateMachine;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _glfx = require("glfx");

var _glfx2 = _interopRequireDefault(_glfx);

var _elementBuilder = require("./elementBuilder");

var _Easings = require("./Easings");

var _transitionBuilder = require("./transitionBuilder");

var checkVisibleY = function checkVisibleY(el) {
  var rect = el.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

var checkVisibleX = function checkVisibleX(el, width) {
  var rect = el.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.right < 0 || rect.left - viewWidth >= 0);
};

var STATE = {
  ON: "ON",
  OFF: "OFF",
  TRANSITION: "TRANSITION"
};

var SHOW_IMAGE = "SHOW_IMAGE";
var HIDE_IMAGE = "HIDE_IMAGE";
var DONE_SHOW = "DONE_SHOW";
var DONE_HIDE = "DONE_HIDE";

var stateMachine = (_stateMachine = {}, _defineProperty(_stateMachine, STATE.ON, _defineProperty({}, HIDE_IMAGE, STATE.TRANSITION)), _defineProperty(_stateMachine, STATE.TRANSITION, (_STATE$TRANSITION = {}, _defineProperty(_STATE$TRANSITION, DONE_HIDE, STATE.OFF), _defineProperty(_STATE$TRANSITION, DONE_SHOW, STATE.ON), _STATE$TRANSITION)), _defineProperty(_stateMachine, STATE.OFF, _defineProperty({}, SHOW_IMAGE, STATE.TRANSITION)), _stateMachine);

var Polaroid = (function () {
  function Polaroid(_ref) {
    var srcs = _ref.srcs;
    var loop = _ref.loop;

    _classCallCheck(this, Polaroid);

    this.loop = loop;
    this.currentState = STATE.OFF;
    this.stateMachine = stateMachine;
    this._addListeners = this._addListeners.bind(this);
    this.initImageCanvas = this.initImageCanvas.bind(this);
    this.checkVisibility = this.checkVisibility.bind(this);
    this.hideImage = this.hideImage.bind(this);
    this.showImage = this.showImage.bind(this);
    this.transitional = this.transitional.bind(this);
    this.tween = this.tween.bind(this);

    this.images = srcs.map(function (src) {
      return (0, _elementBuilder.elementBuilder)("img", {
        className: "image-item",
        src: src
      });
    });

    this.bgImg = (0, _elementBuilder.elementBuilder)("img", {
      src: "/assets/images/polaroid.png",
      className: "polaroid-frame"
    });

    this.fadeIn = (0, _elementBuilder.elementBuilder)("div", {
      className: "fade-in"
    });

    this.el = (0, _elementBuilder.elementBuilder)("div", {
      className: "image-wrap",
      childNodes: [this.bgImg].concat(_toConsumableArray(this.images), [this.fadeIn])
    });

    this._addListeners();
    return this;
  }

  _createClass(Polaroid, [{
    key: "_addListeners",
    value: function _addListeners() {
      this.images[0].addEventListener("load", this.initImageCanvas);
    }
  }, {
    key: "initImageCanvas",
    value: function initImageCanvas() {
      try {
        this.canvas = _glfx2["default"].canvas();
        this.canvas.className = "image-item";
      } catch (e) {
        this.fadeIn.style.opacity = 0;
        return this.images[0];
      }
      var image = this.images[0];
      this.images.forEach(function (image) {
        image.style.opacity = 0;
      });

      // image.parentNode.insertBefore(this.canvas, image);
      // this.loadImage();
      //const image = this.images[index];
      this.texture = this.canvas.texture(image);
      image.parentNode.insertBefore(this.canvas, image);
      //image.parentNode.removeChild(image);
      //this.canvas = canvas;
    }
  }, {
    key: "loadImage",
    value: function loadImage() {
      var index = Math.floor(Math.random() * this.images.length);
      var image = this.images[index];
      this.texture.loadContentsOf(image);

      // image.parentNode.removeChild(image);
      // this.canvas = canvas;
    }
  }, {
    key: "showImage",
    value: function showImage(params) {
      this.loop.start();
      // transform value from 1 to 0
      var transform = function transform(inter) {
        return inter <= 1 ? 1 - inter : 0;
      };
      this.tween(transform, 2000, this.dispatchAction.bind(this, DONE_SHOW));
    }
  }, {
    key: "hideImage",
    value: function hideImage() {
      var _this = this;

      // transform value from 0 to 1
      var transform = function transform(inter) {
        return inter >= 1 ? 1 : inter;
      };
      this.tween(transform, 2000, function () {
        _this.loadImage();
        _this.dispatchAction(DONE_HIDE);
      });
    }
  }, {
    key: "transitional",
    value: function transitional() {
      return (0, _transitionBuilder.transitionBuilder)(0, 60, this.loop).apply(undefined, arguments);
    }
  }, {
    key: "dispatchAction",
    value: function dispatchAction(action, cb) {
      var nextState = this.stateMachine[this.currentState][action];
      if (nextState) {
        this.currentState = nextState;
        cb && cb();
      }
    }
  }, {
    key: "checkVisibility",
    value: function checkVisibility() {
      if (checkVisibleY(this.bgImg) && checkVisibleX(this.bgImg)) {
        this.dispatchAction(SHOW_IMAGE, this.showImage);
      } else {
        this.dispatchAction(HIDE_IMAGE, this.hideImage);
      }
    }
  }, {
    key: "tween",
    value: function tween(action, duration, done) {
      var _this2 = this;

      var value = 1;
      this.transitional({
        animation: function animation(inter) {
          var tween = action(inter);
          _this2.canvas.draw(_this2.texture).lensBlur(20 * tween, value * tween, 0).update();
          _this2.fadeIn.style.opacity = tween;
        },
        duration: duration,
        easing: _Easings.inCubic,
        delay: 100,
        done: done
      });
    }
  }]);

  return Polaroid;
})();

exports.Polaroid = Polaroid;

},{"./Easings":1,"./elementBuilder":5,"./transitionBuilder":6,"glfx":8}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _glfx = require("glfx");

var _glfx2 = _interopRequireDefault(_glfx);

var _elementBuilder = require("./elementBuilder");

var _Easings = require("./Easings");

var _transitionBuilder = require("./transitionBuilder");

var RecordPlayer = (function () {
  function RecordPlayer(_ref) {
    var loop = _ref.loop;

    _classCallCheck(this, RecordPlayer);

    this.loop = loop;

    //this._addListeners = this._addListeners.bind(this);

    this.record = (0, _elementBuilder.elementBuilder)("img", {
      className: "record spin",
      src: "/assets/images/record.png"
    });

    this.player = (0, _elementBuilder.elementBuilder)("img", {
      src: "/assets/images/lp.jpg",
      className: "record-player"
    });

    this.el = (0, _elementBuilder.elementBuilder)("div", {
      className: "image-bg-record",
      childNodes: [this.player, this.record]
    });

    //this._addListeners();
    return this;
  }

  _createClass(RecordPlayer, [{
    key: "_addListeners",
    value: function _addListeners() {
      //this.image.addEventListener("load", this._initImageCanvas);
    }
  }]);

  return RecordPlayer;
})();

exports.RecordPlayer = RecordPlayer;

},{"./Easings":1,"./elementBuilder":5,"./transitionBuilder":6,"glfx":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _simple_animation_loop = require("simple_animation_loop");

var _simple_animation_loop2 = _interopRequireDefault(_simple_animation_loop);

var _Polaroid = require("./Polaroid");

var _RecordPlayer = require('./RecordPlayer');

var getSrc = function getSrc(indexes) {
  var randIndex = Math.round(Math.random() * indexes.length - 1);
  var value = indexes.splice(randIndex, 1);
  return "/assets/images/download-" + value[0] + ".jpg";
};

var createPolaroidPics = function createPolaroidPics(_ref) {
  var entry = _ref.entry;
  var loop = _ref.loop;

  var indexes = new Array(36).fill().map(function (_, i) {
    return i + 1;
  });

  var images = new Array(12).fill().map(function (_, i) {

    var polaroid = new _Polaroid.Polaroid({
      srcs: [getSrc(indexes), getSrc(indexes), getSrc(indexes)],
      loop: loop
    });

    var padding = 100;
    polaroid.el.style.left = i * 350 + padding * (i + 1) + "px";
    entry.appendChild(polaroid.el);
    return polaroid;
  });

  document.querySelector('.record-wrap').addEventListener('scroll', function () {
    images.forEach(function (image, i) {
      image.checkVisibility();
    });
  });
};

var createRecordPlayer = function createRecordPlayer(_ref2) {
  var entry = _ref2.entry;
  var loop = _ref2.loop;

  entry.appendChild(new _RecordPlayer.RecordPlayer({ loop: loop }).el);
};

var createApp = function createApp() {
  var entry = document.getElementById("entry");
  var loop = new _simple_animation_loop2["default"]();
  var options = { entry: entry, loop: loop };
  createPolaroidPics(options);
  // createRecordPlayer(options)
};
exports.createApp = createApp;

},{"./Polaroid":2,"./RecordPlayer":3,"simple_animation_loop":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elementBuilder = function elementBuilder(tagName, options) {
  if (tagName === undefined) tagName = "div";

  var target = document.createElement(tagName);
  Object.keys(options).forEach(function (key) {
    if (key !== "childNodes") {
      target[key] = options[key];
    }
  });
  options.childNodes && options.childNodes.forEach(function (node) {
    target.appendChild(node);
  });
  return target;
};
exports.elementBuilder = elementBuilder;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ident = function ident(x) {
  return x;
};
var transitionBuilder = function transitionBuilder(count, step, loop) {
  return function (_ref) {
    var animation = _ref.animation;
    var duration = _ref.duration;
    var _ref$easing = _ref.easing;
    var easing = _ref$easing === undefined ? ident : _ref$easing;
    var _ref$delay = _ref.delay;
    var delay = _ref$delay === undefined ? 0 : _ref$delay;
    var done = _ref.done;

    loop.setAnimationTimeout(function () {
      var updater = loop.setAnimationInterval(function () {
        if (count >= duration) {
          loop.removeAnimation(updater);
          !loop.animations.length && loop.stop();
          done && done();
        }
        animation(easing(count / duration));
        count += step;
      }, step);
    }, delay);
  };
};
exports.transitionBuilder = transitionBuilder;

},{}],7:[function(require,module,exports){
'use strict';

var _assetsJsApp = require('./assets/js/app');

setTimeout(function () {
  (0, _assetsJsApp.createApp)();
}, 1000);

},{"./assets/js/app":4}],8:[function(require,module,exports){
/*
 * glfx.js
 * http://evanw.github.com/glfx.js/
 *
 * Copyright 2011 Evan Wallace
 * Released under the MIT license
 */
var fx=function(){function q(a,d,c){return Math.max(a,Math.min(d,c))}function w(b){return{_:b,loadContentsOf:function(b){a=this._.gl;this._.loadContentsOf(b)},destroy:function(){a=this._.gl;this._.destroy()}}}function A(a){return w(r.fromElement(a))}function B(b,d){var c=a.UNSIGNED_BYTE;if(a.getExtension("OES_texture_float")&&a.getExtension("OES_texture_float_linear")){var e=new r(100,100,a.RGBA,a.FLOAT);try{e.drawTo(function(){c=a.FLOAT})}catch(g){}e.destroy()}this._.texture&&this._.texture.destroy();
this._.spareTexture&&this._.spareTexture.destroy();this.width=b;this.height=d;this._.texture=new r(b,d,a.RGBA,c);this._.spareTexture=new r(b,d,a.RGBA,c);this._.extraTexture=this._.extraTexture||new r(0,0,a.RGBA,c);this._.flippedShader=this._.flippedShader||new h(null,"uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,vec2(texCoord.x,1.0-texCoord.y));}");this._.isInitialized=!0}function C(a,d,c){if(!this._.isInitialized||
a._.width!=this.width||a._.height!=this.height)B.call(this,d?d:a._.width,c?c:a._.height);a._.use();this._.texture.drawTo(function(){h.getDefaultShader().drawRect()});return this}function D(){this._.texture.use();this._.flippedShader.drawRect();return this}function f(a,d,c,e){(c||this._.texture).use();this._.spareTexture.drawTo(function(){a.uniforms(d).drawRect()});this._.spareTexture.swapWith(e||this._.texture)}function E(a){a.parentNode.insertBefore(this,a);a.parentNode.removeChild(a);return this}
function F(){var b=new r(this._.texture.width,this._.texture.height,a.RGBA,a.UNSIGNED_BYTE);this._.texture.use();b.drawTo(function(){h.getDefaultShader().drawRect()});return w(b)}function G(){var b=this._.texture.width,d=this._.texture.height,c=new Uint8Array(4*b*d);this._.texture.drawTo(function(){a.readPixels(0,0,b,d,a.RGBA,a.UNSIGNED_BYTE,c)});return c}function k(b){return function(){a=this._.gl;return b.apply(this,arguments)}}function x(a,d,c,e,g,n,l,p){var m=c-g,h=e-n,f=l-g,k=p-n;g=a-c+g-l;n=
d-e+n-p;var q=m*k-f*h,f=(g*k-f*n)/q,m=(m*n-g*h)/q;return[c-a+f*c,e-d+f*e,f,l-a+m*l,p-d+m*p,m,a,d,1]}function y(a){var d=a[0],c=a[1],e=a[2],g=a[3],n=a[4],l=a[5],p=a[6],m=a[7];a=a[8];var f=d*n*a-d*l*m-c*g*a+c*l*p+e*g*m-e*n*p;return[(n*a-l*m)/f,(e*m-c*a)/f,(c*l-e*n)/f,(l*p-g*a)/f,(d*a-e*p)/f,(e*g-d*l)/f,(g*m-n*p)/f,(c*p-d*m)/f,(d*n-c*g)/f]}function z(a){var d=a.length;this.xa=[];this.ya=[];this.u=[];this.y2=[];a.sort(function(a,b){return a[0]-b[0]});for(var c=0;c<d;c++)this.xa.push(a[c][0]),this.ya.push(a[c][1]);
this.u[0]=0;this.y2[0]=0;for(c=1;c<d-1;++c){a=this.xa[c+1]-this.xa[c-1];var e=(this.xa[c]-this.xa[c-1])/a,g=e*this.y2[c-1]+2;this.y2[c]=(e-1)/g;this.u[c]=(6*((this.ya[c+1]-this.ya[c])/(this.xa[c+1]-this.xa[c])-(this.ya[c]-this.ya[c-1])/(this.xa[c]-this.xa[c-1]))/a-e*this.u[c-1])/g}this.y2[d-1]=0;for(c=d-2;0<=c;--c)this.y2[c]=this.y2[c]*this.y2[c+1]+this.u[c]}function u(a,d){return new h(null,a+"uniform sampler2D texture;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 coord=texCoord*texSize;"+
d+"gl_FragColor=texture2D(texture,coord/texSize);vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}")}function H(b){a.noise=a.noise||new h(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(texture,texCoord);float diff=(rand(texCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}");
f.call(this,a.noise,{amount:q(0,b,1)});return this}function I(b){a.vibrance=a.vibrance||new h(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;float mx=max(color.r,max(color.g,color.b));float amt=(mx-average)*(-amount*3.0);color.rgb=mix(color.rgb,vec3(mx),amt);gl_FragColor=color;}");
f.call(this,a.vibrance,{amount:q(-1,b,1)});return this}function J(b,d){a.vignette=a.vignette||new h(null,"uniform sampler2D texture;uniform float size;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float dist=distance(texCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}");
f.call(this,a.vignette,{size:q(0,b,1),amount:q(0,d,1)});return this}function K(b){a.denoise=a.denoise||new h(null,"uniform sampler2D texture;uniform float exponent;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec4 center=texture2D(texture,texCoord);vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(texture,texCoord+vec2(x,y)/texSize);float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}");
for(var d=0;2>d;d++)f.call(this,a.denoise,{exponent:Math.max(0,b),texSize:[this.width,this.height]});return this}function L(b,d){a.brightnessContrast=a.brightnessContrast||new h(null,"uniform sampler2D texture;uniform float brightness;uniform float contrast;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.rgb+=brightness;if(contrast>0.0){color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;}else{color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;}gl_FragColor=color;}");
f.call(this,a.brightnessContrast,{brightness:q(-1,b,1),contrast:q(-1,d,1)});return this}function t(a){a=new z(a);for(var d=[],c=0;256>c;c++)d.push(q(0,Math.floor(256*a.interpolate(c/255)),255));return d}function M(b,d,c){b=t(b);1==arguments.length?d=c=b:(d=t(d),c=t(c));for(var e=[],g=0;256>g;g++)e.splice(e.length,0,b[g],d[g],c[g],255);this._.extraTexture.initFromBytes(256,1,e);this._.extraTexture.use(1);a.curves=a.curves||new h(null,"uniform sampler2D texture;uniform sampler2D map;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.r=texture2D(map,vec2(color.r)).r;color.g=texture2D(map,vec2(color.g)).g;color.b=texture2D(map,vec2(color.b)).b;gl_FragColor=color;}");
a.curves.textures({map:1});f.call(this,a.curves,{});return this}function N(b,d){a.unsharpMask=a.unsharpMask||new h(null,"uniform sampler2D blurredTexture;uniform sampler2D originalTexture;uniform float strength;uniform float threshold;varying vec2 texCoord;void main(){vec4 blurred=texture2D(blurredTexture,texCoord);vec4 original=texture2D(originalTexture,texCoord);gl_FragColor=mix(blurred,original,1.0+strength);}");
this._.extraTexture.ensureFormat(this._.texture);this._.texture.use();this._.extraTexture.drawTo(function(){h.getDefaultShader().drawRect()});this._.extraTexture.use(1);this.triangleBlur(b);a.unsharpMask.textures({originalTexture:1});f.call(this,a.unsharpMask,{strength:d});this._.extraTexture.unuse(1);return this}function O(b){a.sepia=a.sepia||new h(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}");
f.call(this,a.sepia,{amount:q(0,b,1)});return this}function P(b,d){a.hueSaturation=a.hueSaturation||new h(null,"uniform sampler2D texture;uniform float hue;uniform float saturation;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float angle=hue*3.14159265;float s=sin(angle),c=cos(angle);vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;float len=length(color.rgb);color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));float average=(color.r+color.g+color.b)/3.0;if(saturation>0.0){color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));}else{color.rgb+=(average-color.rgb)*(-saturation);}gl_FragColor=color;}");
f.call(this,a.hueSaturation,{hue:q(-1,b,1),saturation:q(-1,d,1)});return this}function Q(b,d,c){a.zoomBlur=a.zoomBlur||new h(null,"uniform sampler2D texture;uniform vec2 center;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;"+s+"void main(){vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-texCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(texture,texCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
f.call(this,a.zoomBlur,{center:[b,d],strength:c,texSize:[this.width,this.height]});return this}function R(b,d,c,e,g,n){a.tiltShift=a.tiltShift||new h(null,"uniform sampler2D texture;uniform float blurRadius;uniform float gradientRadius;uniform vec2 start;uniform vec2 end;uniform vec2 delta;uniform vec2 texSize;varying vec2 texCoord;"+s+"void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(texCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta/texSize*percent*radius);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
var l=c-b,p=e-d,m=Math.sqrt(l*l+p*p);f.call(this,a.tiltShift,{blurRadius:g,gradientRadius:n,start:[b,d],end:[c,e],delta:[l/m,p/m],texSize:[this.width,this.height]});f.call(this,a.tiltShift,{blurRadius:g,gradientRadius:n,start:[b,d],end:[c,e],delta:[-p/m,l/m],texSize:[this.width,this.height]});return this}function S(b,d,c){a.lensBlurPrePass=a.lensBlurPrePass||new h(null,"uniform sampler2D texture;uniform float power;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color=pow(color,vec4(power));gl_FragColor=vec4(color);}");
var e="uniform sampler2D texture0;uniform sampler2D texture1;uniform vec2 delta0;uniform vec2 delta1;uniform float power;varying vec2 texCoord;"+s+"vec4 sample(vec2 delta){float offset=random(vec3(delta,151.7182),0.0);vec4 color=vec4(0.0);float total=0.0;for(float t=0.0;t<=30.0;t++){float percent=(t+offset)/30.0;color+=texture2D(texture0,texCoord+delta*percent);total+=1.0;}return color/total;}";
a.lensBlur0=a.lensBlur0||new h(null,e+"void main(){gl_FragColor=sample(delta0);}");a.lensBlur1=a.lensBlur1||new h(null,e+"void main(){gl_FragColor=(sample(delta0)+sample(delta1))*0.5;}");a.lensBlur2=a.lensBlur2||(new h(null,e+"void main(){vec4 color=(sample(delta0)+2.0*texture2D(texture1,texCoord))/3.0;gl_FragColor=pow(color,vec4(power));}")).textures({texture1:1});for(var e=
[],g=0;3>g;g++){var n=c+2*g*Math.PI/3;e.push([b*Math.sin(n)/this.width,b*Math.cos(n)/this.height])}b=Math.pow(10,q(-1,d,1));f.call(this,a.lensBlurPrePass,{power:b});this._.extraTexture.ensureFormat(this._.texture);f.call(this,a.lensBlur0,{delta0:e[0]},this._.texture,this._.extraTexture);f.call(this,a.lensBlur1,{delta0:e[1],delta1:e[2]},this._.extraTexture,this._.extraTexture);f.call(this,a.lensBlur0,{delta0:e[1]});this._.extraTexture.use(1);f.call(this,a.lensBlur2,{power:1/b,delta0:e[2]});return this}
function T(b){a.triangleBlur=a.triangleBlur||new h(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+s+"void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta*percent);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");
f.call(this,a.triangleBlur,{delta:[b/this.width,0]});f.call(this,a.triangleBlur,{delta:[0,b/this.height]});return this}function U(b){a.edgeWork1=a.edgeWork1||new h(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+s+"void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec3 sample=texture2D(texture,texCoord+delta*percent).rgb;float average=(sample.r+sample.g+sample.b)/3.0;color.x+=average*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=average*weight;total.y+=weight;}}gl_FragColor=vec4(color/total,0.0,1.0);}");
a.edgeWork2=a.edgeWork2||new h(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+s+"void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec2 sample=texture2D(texture,texCoord+delta*percent).xy;color.x+=sample.x*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=sample.y*weight;total.y+=weight;}}float c=clamp(10000.0*(color.y/total.y-color.x/total.x)+0.5,0.0,1.0);gl_FragColor=vec4(c,c,c,1.0);}");
f.call(this,a.edgeWork1,{delta:[b/this.width,0]});f.call(this,a.edgeWork2,{delta:[0,b/this.height]});return this}function V(b,d,c){a.hexagonalPixelate=a.hexagonalPixelate||new h(null,"uniform sampler2D texture;uniform vec2 center;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 tex=(texCoord*texSize-center)/scale;tex.y/=0.866025404;tex.x-=tex.y*0.5;vec2 a;if(tex.x+tex.y-floor(tex.x)-floor(tex.y)<1.0)a=vec2(floor(tex.x),floor(tex.y));else a=vec2(ceil(tex.x),ceil(tex.y));vec2 b=vec2(ceil(tex.x),floor(tex.y));vec2 c=vec2(floor(tex.x),ceil(tex.y));vec3 TEX=vec3(tex.x,tex.y,1.0-tex.x-tex.y);vec3 A=vec3(a.x,a.y,1.0-a.x-a.y);vec3 B=vec3(b.x,b.y,1.0-b.x-b.y);vec3 C=vec3(c.x,c.y,1.0-c.x-c.y);float alen=length(TEX-A);float blen=length(TEX-B);float clen=length(TEX-C);vec2 choice;if(alen<blen){if(alen<clen)choice=a;else choice=c;}else{if(blen<clen)choice=b;else choice=c;}choice.x+=choice.y*0.5;choice.y*=0.866025404;choice*=scale/texSize;gl_FragColor=texture2D(texture,choice+center/texSize);}");
f.call(this,a.hexagonalPixelate,{center:[b,d],scale:c,texSize:[this.width,this.height]});return this}function W(b,d,c,e){a.colorHalftone=a.colorHalftone||new h(null,"uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(float angle){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);vec3 cmy=1.0-color.rgb;float k=min(cmy.x,min(cmy.y,cmy.z));cmy=(cmy-k)/(1.0-k);cmy=clamp(cmy*10.0-3.0+vec3(pattern(angle+0.26179),pattern(angle+1.30899),pattern(angle)),0.0,1.0);k=clamp(k*10.0-5.0+pattern(angle+0.78539),0.0,1.0);gl_FragColor=vec4(1.0-cmy-k,color.a);}");
f.call(this,a.colorHalftone,{center:[b,d],angle:c,scale:Math.PI/e,texSize:[this.width,this.height]});return this}function X(b){a.ink=a.ink||new h(null,"uniform sampler2D texture;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 dx=vec2(1.0/texSize.x,0.0);vec2 dy=vec2(0.0,1.0/texSize.y);vec4 color=texture2D(texture,texCoord);float bigTotal=0.0;float smallTotal=0.0;vec3 bigAverage=vec3(0.0);vec3 smallAverage=vec3(0.0);for(float x=-2.0;x<=2.0;x+=1.0){for(float y=-2.0;y<=2.0;y+=1.0){vec3 sample=texture2D(texture,texCoord+dx*x+dy*y).rgb;bigAverage+=sample;bigTotal+=1.0;if(abs(x)+abs(y)<2.0){smallAverage+=sample;smallTotal+=1.0;}}}vec3 edge=max(vec3(0.0),bigAverage/bigTotal-smallAverage/smallTotal);gl_FragColor=vec4(color.rgb-dot(edge,edge)*strength*100000.0,color.a);}");
f.call(this,a.ink,{strength:b*b*b*b*b,texSize:[this.width,this.height]});return this}function Y(b,d,c,e){a.dotScreen=a.dotScreen||new h(null,"uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;gl_FragColor=vec4(vec3(average*10.0-5.0+pattern()),color.a);}");
f.call(this,a.dotScreen,{center:[b,d],angle:c,scale:Math.PI/e,texSize:[this.width,this.height]});return this}function Z(b,d,c){a.matrixWarp=a.matrixWarp||u("uniform mat3 matrix;uniform bool useTextureSpace;","if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;");b=Array.prototype.concat.apply([],b);if(4==b.length)b=
[b[0],b[1],0,b[2],b[3],0,0,0,1];else if(9!=b.length)throw"can only warp with 2x2 or 3x3 matrix";f.call(this,a.matrixWarp,{matrix:d?y(b):b,texSize:[this.width,this.height],useTextureSpace:c|0});return this}function $(b,d,c,e){a.swirl=a.swirl||u("uniform float radius;uniform float angle;uniform vec2 center;","coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;");
f.call(this,a.swirl,{radius:c,center:[b,d],angle:e,texSize:[this.width,this.height]});return this}function aa(b,d,c,e){a.bulgePinch=a.bulgePinch||u("uniform float radius;uniform float strength;uniform vec2 center;","coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;");
f.call(this,a.bulgePinch,{radius:c,strength:q(-1,e,1),center:[b,d],texSize:[this.width,this.height]});return this}function ba(a,d){var c=x.apply(null,d),e=x.apply(null,a),c=y(c);return this.matrixWarp([c[0]*e[0]+c[1]*e[3]+c[2]*e[6],c[0]*e[1]+c[1]*e[4]+c[2]*e[7],c[0]*e[2]+c[1]*e[5]+c[2]*e[8],c[3]*e[0]+c[4]*e[3]+c[5]*e[6],c[3]*e[1]+c[4]*e[4]+c[5]*e[7],c[3]*e[2]+c[4]*e[5]+c[5]*e[8],c[6]*e[0]+c[7]*e[3]+c[8]*e[6],c[6]*e[1]+c[7]*e[4]+c[8]*e[7],c[6]*e[2]+c[7]*e[5]+c[8]*e[8]])}var v={};(function(){function a(b){if(!b.getExtension("OES_texture_float"))return!1;
var c=b.createFramebuffer(),e=b.createTexture();b.bindTexture(b.TEXTURE_2D,e);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,1,1,0,b.RGBA,b.UNSIGNED_BYTE,null);b.bindFramebuffer(b.FRAMEBUFFER,c);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,
e,0);c=b.createTexture();b.bindTexture(b.TEXTURE_2D,c);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,2,2,0,b.RGBA,b.FLOAT,new Float32Array([2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));var e=b.createProgram(),d=b.createShader(b.VERTEX_SHADER),g=b.createShader(b.FRAGMENT_SHADER);
b.shaderSource(d,"attribute vec2 vertex;void main(){gl_Position=vec4(vertex,0.0,1.0);}");b.shaderSource(g,"uniform sampler2D texture;void main(){gl_FragColor=texture2D(texture,vec2(0.5));}");b.compileShader(d);b.compileShader(g);b.attachShader(e,d);b.attachShader(e,g);b.linkProgram(e);d=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,d);b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,0]),b.STREAM_DRAW);b.enableVertexAttribArray(0);
b.vertexAttribPointer(0,2,b.FLOAT,!1,0,0);d=new Uint8Array(4);b.useProgram(e);b.viewport(0,0,1,1);b.bindTexture(b.TEXTURE_2D,c);b.drawArrays(b.POINTS,0,1);b.readPixels(0,0,1,1,b.RGBA,b.UNSIGNED_BYTE,d);return 127===d[0]||128===d[0]}function d(){}function c(a){"OES_texture_float_linear"===a?(void 0===this.$OES_texture_float_linear$&&Object.defineProperty(this,"$OES_texture_float_linear$",{enumerable:!1,configurable:!1,writable:!1,value:new d}),a=this.$OES_texture_float_linear$):a=l.call(this,a);return a}
function e(){var a=f.call(this);-1===a.indexOf("OES_texture_float_linear")&&a.push("OES_texture_float_linear");return a}try{var g=document.createElement("canvas").getContext("experimental-webgl")}catch(n){}if(g&&-1===g.getSupportedExtensions().indexOf("OES_texture_float_linear")&&a(g)){var l=WebGLRenderingContext.prototype.getExtension,f=WebGLRenderingContext.prototype.getSupportedExtensions;WebGLRenderingContext.prototype.getExtension=c;WebGLRenderingContext.prototype.getSupportedExtensions=e}})();
var a;v.canvas=function(){var b=document.createElement("canvas");try{a=b.getContext("experimental-webgl",{premultipliedAlpha:!1})}catch(d){a=null}if(!a)throw"This browser does not support WebGL";b._={gl:a,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null};b.texture=k(A);b.draw=k(C);b.update=k(D);b.replace=k(E);b.contents=k(F);b.getPixelArray=k(G);b.brightnessContrast=k(L);b.hexagonalPixelate=k(V);b.hueSaturation=k(P);b.colorHalftone=k(W);b.triangleBlur=k(T);b.unsharpMask=k(N);b.perspective=
k(ba);b.matrixWarp=k(Z);b.bulgePinch=k(aa);b.tiltShift=k(R);b.dotScreen=k(Y);b.edgeWork=k(U);b.lensBlur=k(S);b.zoomBlur=k(Q);b.noise=k(H);b.denoise=k(K);b.curves=k(M);b.swirl=k($);b.ink=k(X);b.vignette=k(J);b.vibrance=k(I);b.sepia=k(O);return b};v.splineInterpolate=t;var r=function(){function b(b,c,d,l){this.gl=a;this.id=a.createTexture();this.width=b;this.height=c;this.format=d;this.type=l;a.bindTexture(a.TEXTURE_2D,this.id);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);b&&c&&a.texImage2D(a.TEXTURE_2D,0,this.format,b,c,0,this.format,this.type,null)}function d(a){null==c&&(c=document.createElement("canvas"));c.width=a.width;c.height=a.height;a=c.getContext("2d");a.clearRect(0,0,c.width,c.height);return a}b.fromElement=function(c){var d=new b(0,0,a.RGBA,a.UNSIGNED_BYTE);d.loadContentsOf(c);return d};b.prototype.loadContentsOf=
function(b){this.width=b.width||b.videoWidth;this.height=b.height||b.videoHeight;a.bindTexture(a.TEXTURE_2D,this.id);a.texImage2D(a.TEXTURE_2D,0,this.format,this.format,this.type,b)};b.prototype.initFromBytes=function(b,c,d){this.width=b;this.height=c;this.format=a.RGBA;this.type=a.UNSIGNED_BYTE;a.bindTexture(a.TEXTURE_2D,this.id);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,b,c,0,a.RGBA,this.type,new Uint8Array(d))};b.prototype.destroy=function(){a.deleteTexture(this.id);this.id=null};b.prototype.use=function(b){a.activeTexture(a.TEXTURE0+
(b||0));a.bindTexture(a.TEXTURE_2D,this.id)};b.prototype.unuse=function(b){a.activeTexture(a.TEXTURE0+(b||0));a.bindTexture(a.TEXTURE_2D,null)};b.prototype.ensureFormat=function(b,c,d,l){if(1==arguments.length){var f=arguments[0];b=f.width;c=f.height;d=f.format;l=f.type}if(b!=this.width||c!=this.height||d!=this.format||l!=this.type)this.width=b,this.height=c,this.format=d,this.type=l,a.bindTexture(a.TEXTURE_2D,this.id),a.texImage2D(a.TEXTURE_2D,0,this.format,b,c,0,this.format,this.type,null)};b.prototype.drawTo=
function(b){a.framebuffer=a.framebuffer||a.createFramebuffer();a.bindFramebuffer(a.FRAMEBUFFER,a.framebuffer);a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.id,0);if(a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw Error("incomplete framebuffer");a.viewport(0,0,this.width,this.height);b();a.bindFramebuffer(a.FRAMEBUFFER,null)};var c=null;b.prototype.fillUsingCanvas=function(b){b(d(this));this.format=a.RGBA;this.type=a.UNSIGNED_BYTE;a.bindTexture(a.TEXTURE_2D,
this.id);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,c);return this};b.prototype.toImage=function(b){this.use();h.getDefaultShader().drawRect();var g=4*this.width*this.height,f=new Uint8Array(g),l=d(this),p=l.createImageData(this.width,this.height);a.readPixels(0,0,this.width,this.height,a.RGBA,a.UNSIGNED_BYTE,f);for(var m=0;m<g;m++)p.data[m]=f[m];l.putImageData(p,0,0);b.src=c.toDataURL()};b.prototype.swapWith=function(a){var b;b=a.id;a.id=this.id;this.id=b;b=a.width;a.width=this.width;
this.width=b;b=a.height;a.height=this.height;this.height=b;b=a.format;a.format=this.format;this.format=b};return b}();z.prototype.interpolate=function(a){for(var d=0,c=this.ya.length-1;1<c-d;){var e=c+d>>1;this.xa[e]>a?c=e:d=e}var e=this.xa[c]-this.xa[d],g=(this.xa[c]-a)/e;a=(a-this.xa[d])/e;return g*this.ya[d]+a*this.ya[c]+((g*g*g-g)*this.y2[d]+(a*a*a-a)*this.y2[c])*e*e/6};var h=function(){function b(b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);if(!a.getShaderParameter(d,a.COMPILE_STATUS))throw"compile error: "+
a.getShaderInfoLog(d);return d}function d(d,f){this.texCoordAttribute=this.vertexAttribute=null;this.program=a.createProgram();d=d||c;f=f||e;f="precision highp float;"+f;a.attachShader(this.program,b(a.VERTEX_SHADER,d));a.attachShader(this.program,b(a.FRAGMENT_SHADER,f));a.linkProgram(this.program);if(!a.getProgramParameter(this.program,a.LINK_STATUS))throw"link error: "+a.getProgramInfoLog(this.program);}var c="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main(){texCoord=_texCoord;gl_Position=vec4(vertex*2.0-1.0,0.0,1.0);}",
e="uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,texCoord);}";d.prototype.destroy=function(){a.deleteProgram(this.program);this.program=null};d.prototype.uniforms=function(b){a.useProgram(this.program);for(var c in b)if(b.hasOwnProperty(c)){var d=a.getUniformLocation(this.program,c);if(null!==d){var e=b[c];if("[object Array]"==Object.prototype.toString.call(e))switch(e.length){case 1:a.uniform1fv(d,new Float32Array(e));break;
case 2:a.uniform2fv(d,new Float32Array(e));break;case 3:a.uniform3fv(d,new Float32Array(e));break;case 4:a.uniform4fv(d,new Float32Array(e));break;case 9:a.uniformMatrix3fv(d,!1,new Float32Array(e));break;case 16:a.uniformMatrix4fv(d,!1,new Float32Array(e));break;default:throw"dont't know how to load uniform \""+c+'" of length '+e.length;}else if("[object Number]"==Object.prototype.toString.call(e))a.uniform1f(d,e);else throw'attempted to set uniform "'+c+'" to invalid value '+(e||"undefined").toString();
}}return this};d.prototype.textures=function(b){a.useProgram(this.program);for(var c in b)b.hasOwnProperty(c)&&a.uniform1i(a.getUniformLocation(this.program,c),b[c]);return this};d.prototype.drawRect=function(b,c,d,e){var f=a.getParameter(a.VIEWPORT);c=void 0!==c?(c-f[1])/f[3]:0;b=void 0!==b?(b-f[0])/f[2]:0;d=void 0!==d?(d-f[0])/f[2]:1;e=void 0!==e?(e-f[1])/f[3]:1;null==a.vertexBuffer&&(a.vertexBuffer=a.createBuffer());a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer);a.bufferData(a.ARRAY_BUFFER,new Float32Array([b,
c,b,e,d,c,d,e]),a.STATIC_DRAW);null==a.texCoordBuffer&&(a.texCoordBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),a.STATIC_DRAW));null==this.vertexAttribute&&(this.vertexAttribute=a.getAttribLocation(this.program,"vertex"),a.enableVertexAttribArray(this.vertexAttribute));null==this.texCoordAttribute&&(this.texCoordAttribute=a.getAttribLocation(this.program,"_texCoord"),a.enableVertexAttribArray(this.texCoordAttribute));
a.useProgram(this.program);a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer);a.vertexAttribPointer(this.vertexAttribute,2,a.FLOAT,!1,0,0);a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer);a.vertexAttribPointer(this.texCoordAttribute,2,a.FLOAT,!1,0,0);a.drawArrays(a.TRIANGLE_STRIP,0,4)};d.getDefaultShader=function(){a.defaultShader=a.defaultShader||new d;return a.defaultShader};return d}(),s="float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}";
return v}();"object"===typeof module?module.exports=fx:window.fx=fx;

},{}],9:[function(require,module,exports){
var rAF_Polyfills = require('./rAFPolyfill');
var rAF = rAF_Polyfills.requestAnimationFrame;
var cAF = rAF_Polyfills.cancelAnimationFrame;

/**
 * The animation loop provides a wrapper for requestAnimationFrame and a
 * reimplementation of browser timers. It can schedule multiple callbacks
 * and help maximize performance for in browser animations.
 * 
 * @class AnimationLoop
 * @constructor
 */
function AnimationLoop(){
  this.animations = [];
  this._animations = [];
  this.isRunning = false;
  this.startTime = 0;
  this._time = 0;
}

/**
 * Internal main callback method that is passed to requestAnimationFrame 
 * and handles calling all scheduled animations. Copies animations array 
 * before calling animation callbacks so items can be safely removed midway 
 * through a loop cycle. 
 * 
 * @method
 * @private
 *
 * @param {Number} time - time high resolution timstamp 
 *
 * @returns {undefined} undefined
*/
AnimationLoop.prototype._updateLoop = function _updateLoop(time){ 
  this._time = time;
  // make a copy so animations can be removed during loop
  this._animations = this.animations.slice();
  while(this._animations.length){
    // pop animations off and call each animation passin in time
    this._animations.pop()(time);
  }
  //store reference so we can cancel it later
  this._rAF = rAF(this.updateLoop);
}

/**
 * Starts the main animation loop and prevents multiple updates to 
 * requestAnimationFrame.
 * 
 * @method 
 *
 * @returns {AnimationLoop} this
*/
AnimationLoop.prototype.start = function start(){
  if(!this.isRunning){
    this.isRunning = true;
    this.updateLoop = this._updateLoop.bind(this);
    rAF(this.updateLoop);
  }
  return this;
};

/**
 * Stops the main animation loop by calling cancelAnimationFrame. 
 * 
 * @method 
 *
 * @returns {AnimationLoop} this
*/
AnimationLoop.prototype.stop = function stop(){
  if(this.isRunning){
    cAF(this._rAF);
  }
  return this;
};

/**
 * Adds a callback to the update loop and prevents the same callback from being 
 * added twice. 
 * 
 * @method 
 *
 * @param {Function} animation - callback that will be added to the main update loop.  
 *
 * @returns {Function} animation callback passed in
*/
AnimationLoop.prototype.addAnimation = function addAnimation(animation){
  if (typeof animation === "function" && this.animations.indexOf(animation) === -1) {
    this.animations.push(animation);
  }
  return animation;
};

/**
 * Removes a callback from the current update loop and next scheduled loop. 
 * 
 * @method 
 *
 * @param {Function} animation - callback that will be added to the main update loop.  
 *
 * @returns {undefined} undefined
*/
AnimationLoop.prototype.removeAnimation = function removeAnimation(animation) {
  var index = this.animations.indexOf(animation);
  if (index !== -1) {
    this.animations.splice(index, 1);
  }
  index = this._animations.indexOf(animation);
  // remove animation if midway through loop
  if(index !== -1){
    this._animations.splice(index, 1);
  }
};

/**
 * Mimics browser's setTimeout basic functionality. Prevents browser timer from 
 * degrading performance of the main update loop. It is recommended to use this over
 * setTimeout after `.start()` has been called. 
 * 
 * @method 
 *
 * @param {Function} animation - A function to be executed after the timer expires. 
 * @param {Number} delay - The time, in milliseconds (thousandths of a second), the timer 
 * should wait before the specified function is executed. 
 *
 * @returns {Function} timeout callback returned so it can be canceled via `removeAnimation()`
*/
AnimationLoop.prototype.setAnimationTimeout = function setAnimationTimeout(animation, delay){
  var startTime = this._time;
  var animLoop = this;
  return this.addAnimation(function timeoutAnimation(time){
    if(time - startTime >= delay){
      animation();
      animLoop.removeAnimation(timeoutAnimation);
    }
  });
}

/**
 * Mimics browser's setInterval basic functionality. Prevents browser timer from 
 * degrading performance of the main update loop. It is recommended to use this over
 * setInternal after `.start()` has been called. 
 * 
 * @method 
 *
 * @param {Function} animation - A function to be executed every `delay` milliseconds. 
 * @param {Number} delay - The time, in milliseconds (thousandths of a second), the timer 
 * should delay in between executions of the specified function.
 *
 * @returns {Function} interval callback returned so it can be canceled via `removeAnimation()`
*/
AnimationLoop.prototype.setAnimationInterval = function setAnimationInterval(animation, interval){
  var startTime = this._time;
  var animLoop = this;
  return this.addAnimation(function intervalAnimation(time){
    if(time - startTime >= interval){
      animation();
      startTime = time;
    }
  });
}

/*
* Get the current [high resolution timestamp](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp).
*
* @method
*
* @returns {Number} high resolution timestamp
*/

AnimationLoop.prototype.getTime = function(){
  return this._time
}

module.exports = AnimationLoop;

},{"./rAFPolyfill":10}],10:[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

'use strict';

var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];

var rAF, cAF;

if (typeof window === 'object') {
    rAF = window.requestAnimationFrame;
    cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame;
    for (var x = 0; x < vendors.length && !rAF; ++x) {
        rAF = window[vendors[x] + 'RequestAnimationFrame'];
        cAF = window[vendors[x] + 'CancelRequestAnimationFrame'] ||
              window[vendors[x] + 'CancelAnimationFrame'];
    }

    if (rAF && !cAF) {
        // cAF not supported.
        // Fall back to setInterval for now (very rare).
        rAF = null;
    }
}

if (!rAF) {
    var now = Date.now ? Date.now : function () {
        return new Date().getTime();
    };

    rAF = function(callback) {
        var currTime = now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    cAF = function (id) {
        clearTimeout(id);
    };
}

var animationFrame = {
    /**
     * Cross browser version of [requestAnimationFrame]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame}.
     *
     * Used by Engine in order to establish a render loop.
     *
     * If no (vendor prefixed version of) `requestAnimationFrame` is available,
     * `setTimeout` will be used in order to emulate a render loop running at
     * approximately 60 frames per second.
     *
     * @method  requestAnimationFrame
     *
     * @param   {Function}  callback function to be invoked on the next frame.
     * @return  {Number}    requestId to be used to cancel the request using
     *                      {@link cancelAnimationFrame}.
     */
    requestAnimationFrame: rAF,

    /**
     * Cross browser version of [cancelAnimationFrame]{@link https://developer.mozilla.org/en-US/docs/Web/API/window/cancelAnimationFrame}.
     *
     * Cancels a previously using [requestAnimationFrame]{@link animationFrame#requestAnimationFrame}
     * scheduled request.
     *
     * Used for immediately stopping the render loop within the Engine.
     *
     * @method  cancelAnimationFrame
     *
     * @param   {Number}    requestId of the scheduled callback function
     *                      returned by [requestAnimationFrame]{@link animationFrame#requestAnimationFrame}.
     */
    cancelAnimationFrame: cAF
};

module.exports = animationFrame;
},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21vcmdhbnBsYW50L2NvZGUvd2Vic2l0ZS9hc3NldHMvanMvRWFzaW5ncy5qcyIsIi9Vc2Vycy9tb3JnYW5wbGFudC9jb2RlL3dlYnNpdGUvYXNzZXRzL2pzL1BvbGFyb2lkLmpzIiwiL1VzZXJzL21vcmdhbnBsYW50L2NvZGUvd2Vic2l0ZS9hc3NldHMvanMvUmVjb3JkUGxheWVyLmpzIiwiL1VzZXJzL21vcmdhbnBsYW50L2NvZGUvd2Vic2l0ZS9hc3NldHMvanMvYXBwLmpzIiwiL1VzZXJzL21vcmdhbnBsYW50L2NvZGUvd2Vic2l0ZS9hc3NldHMvanMvZWxlbWVudEJ1aWxkZXIuanMiLCIvVXNlcnMvbW9yZ2FucGxhbnQvY29kZS93ZWJzaXRlL2Fzc2V0cy9qcy90cmFuc2l0aW9uQnVpbGRlci5qcyIsIi9Vc2Vycy9tb3JnYW5wbGFudC9jb2RlL3dlYnNpdGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2xmeC9nbGZ4LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZV9hbmltYXRpb25fbG9vcC9hbmltYXRpb25Mb29wLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZV9hbmltYXRpb25fbG9vcC9yQUZQb2x5ZmlsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0lPLElBQU0sTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUNyQyxXQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEIsQ0FBQzs7Ozs7OztBQU1LLElBQU0sT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUN2QyxXQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQSxBQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM1QixDQUFDOzs7Ozs7O0FBTUssSUFBTSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQzNDLFFBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBLEdBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsV0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0NBQ3JDLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDdkMsV0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQixDQUFDOzs7Ozs7O0FBTUssSUFBTSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3pDLFdBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDMUIsQ0FBQzs7Ozs7OztBQU1LLElBQU0sVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLENBQUMsRUFBRTtBQUM3QyxRQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQSxHQUFJLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQyxXQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsR0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7Q0FDdkMsQ0FBQzs7Ozs7OztBQU1LLElBQU0sT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUN2QyxXQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN4QixDQUFDOzs7Ozs7O0FBTUssSUFBTSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3pDLFdBQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0NBQ2pDLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLFVBQVUsR0FBRyxTQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUU7QUFDN0MsUUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUEsR0FBSSxDQUFDLEVBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLFdBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLEdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQztDQUM1QyxDQUFDOzs7Ozs7O0FBTUssSUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ3ZDLFdBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM1QixDQUFDOzs7Ozs7O0FBTUssSUFBTSxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3pDLFdBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNsQyxDQUFDOzs7Ozs7O0FBTUssSUFBTSxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQzdDLFFBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBLEdBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsV0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLEdBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7Q0FDL0MsQ0FBQzs7Ozs7OztBQU1LLElBQU0sTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUNyQyxXQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUNuRCxDQUFDOzs7Ozs7O0FBTUssSUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ3ZDLFdBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDLENBQUM7Q0FDdEMsQ0FBQzs7Ozs7OztBQU1LLElBQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUMzQyxXQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0NBQzdDLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDckMsV0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUMsQ0FBQztDQUNwRCxDQUFDOzs7Ozs7O0FBTUssSUFBTSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ3ZDLFdBQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDdEQsQ0FBQzs7Ozs7OztBQU1LLElBQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUMzQyxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDeEIsUUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQzFCLFFBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBLEdBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQyxDQUFDO0FBQzNELFdBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0NBQzlDLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDckMsV0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0NBQ3RDLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxDQUFDLEVBQUU7QUFDdkMsV0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNqQyxDQUFDOzs7Ozs7O0FBTUssSUFBTSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQzNDLFFBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFBLEdBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7QUFDN0QsV0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQztDQUNsRCxDQUFDOzs7Ozs7O0FBTUssSUFBTSxTQUFTLEdBQUcsU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFO0FBQzNDLFFBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUNoQixRQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixRQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDWixRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDeEIsUUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ3hCLFFBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNoQixLQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQyxXQUFPLEVBQ0gsQ0FBQyxHQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLEFBQUMsQ0FBQyxHQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxJQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBLEFBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxBQUN4QyxDQUFDO0NBQ0wsQ0FBQzs7Ozs7OztBQU1LLElBQU0sVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLENBQUMsRUFBRTtBQUM3QyxRQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDaEIsUUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsUUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ1osUUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDO0FBQ3hCLFFBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUN4QixRQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDaEIsS0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0MsV0FDSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsSUFBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQSxBQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUN4RTtDQUNMLENBQUM7Ozs7Ozs7QUFNSyxJQUFNLFlBQVksR0FBRyxTQUFTLFlBQVksQ0FBQyxDQUFDLEVBQUU7QUFDakQsUUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQ2hCLFFBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFFBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNaLFFBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUN4QixRQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQSxLQUFNLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNqQyxRQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLEtBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFFBQUksQ0FBQyxHQUFHLENBQUMsRUFDTCxPQUNJLENBQUMsR0FBRyxJQUNILENBQUMsR0FDRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxBQUFDLENBQUMsR0FDMUIsSUFBSSxDQUFDLEdBQUcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogQHByb3BlcnR5IGluUXVhZFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5RdWFkID0gZnVuY3Rpb24gaW5RdWFkKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRRdWFkXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRRdWFkID0gZnVuY3Rpb24gb3V0UXVhZCh0KSB7XG4gICAgcmV0dXJuIC0odCAtPSAxKSAqIHQgKyAxO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRRdWFkXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dFF1YWQgPSBmdW5jdGlvbiBpbk91dFF1YWQodCkge1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0O1xuICAgIHJldHVybiAtMC41ICogKC0tdCAqICh0IC0gMikgLSAxKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluQ3ViaWNcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluQ3ViaWMgPSBmdW5jdGlvbiBpbkN1YmljKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0Q3ViaWNcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IG91dEN1YmljID0gZnVuY3Rpb24gb3V0Q3ViaWModCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbk91dEN1YmljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dEN1YmljID0gZnVuY3Rpb24gaW5PdXRDdWJpYyh0KSB7XG4gICAgaWYgKCh0IC89IDAuNSkgPCAxKSByZXR1cm4gMC41ICogdCAqIHQgKiB0O1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5RdWFydFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5RdWFydCA9IGZ1bmN0aW9uIGluUXVhcnQodCkge1xuICAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0UXVhcnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IG91dFF1YXJ0ID0gZnVuY3Rpb24gb3V0UXVhcnQodCkge1xuICAgIHJldHVybiAtKC0tdCAqIHQgKiB0ICogdCAtIDEpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRRdWFydFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRRdWFydCA9IGZ1bmN0aW9uIGluT3V0UXVhcnQodCkge1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQ7XG4gICAgcmV0dXJuIC0wLjUgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluUXVpbnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluUXVpbnQgPSBmdW5jdGlvbiBpblF1aW50KHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRRdWludFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0UXVpbnQgPSBmdW5jdGlvbiBvdXRRdWludCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRRdWludFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRRdWludCA9IGZ1bmN0aW9uIGluT3V0UXVpbnQodCkge1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0O1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMik7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpblNpbmVcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluU2luZSA9IGZ1bmN0aW9uIGluU2luZSh0KSB7XG4gICAgcmV0dXJuIC0xLjAgKiBNYXRoLmNvcyh0ICogKE1hdGguUEkgLyAyKSkgKyAxLjA7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRTaW5lXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRTaW5lID0gZnVuY3Rpb24gb3V0U2luZSh0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKHQgKiAoTWF0aC5QSSAvIDIpKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0U2luZVxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRTaW5lID0gZnVuY3Rpb24gaW5PdXRTaW5lKHQpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluRXhwb1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5FeHBvID0gZnVuY3Rpb24gaW5FeHBvKHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMCA/IDAuMCA6IE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRFeHBvXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRFeHBvID0gZnVuY3Rpb24gb3V0RXhwbyh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDEuMCA/IDEuMCA6IC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDE7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbk91dEV4cG9cbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0RXhwbyA9IGZ1bmN0aW9uIGluT3V0RXhwbyh0KSB7XG4gICAgaWYgKHQgPT09IDApIHJldHVybiAwLjA7XG4gICAgaWYgKHQgPT09IDEuMCkgcmV0dXJuIDEuMDtcbiAgICBpZiAoKHQgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xuICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluQ2lyY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5DaXJjID0gZnVuY3Rpb24gaW5DaXJjKHQpIHtcbiAgICByZXR1cm4gLShNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0Q2lyY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0Q2lyYyA9IGZ1bmN0aW9uIG91dENpcmModCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRDaXJjXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dENpcmMgPSBmdW5jdGlvbiBpbk91dENpcmModCkge1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5FbGFzdGljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbkVsYXN0aWMgPSBmdW5jdGlvbiBpbkVsYXN0aWModCkge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSAxLjA7XG4gICAgaWYgKHQgPT09IDApIHJldHVybiAwLjA7XG4gICAgaWYgKHQgPT09IDEpIHJldHVybiAxLjA7XG4gICAgaWYgKCFwKSBwID0gMC4zO1xuICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxLjAgLyBhKTtcbiAgICByZXR1cm4gLShcbiAgICAgICAgYSAqXG4gICAgICAgIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICpcbiAgICAgICAgTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKVxuICAgICk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRFbGFzdGljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRFbGFzdGljID0gZnVuY3Rpb24gb3V0RWxhc3RpYyh0KSB7XG4gICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgIHZhciBwID0gMDtcbiAgICB2YXIgYSA9IDEuMDtcbiAgICBpZiAodCA9PT0gMCkgcmV0dXJuIDAuMDtcbiAgICBpZiAodCA9PT0gMSkgcmV0dXJuIDEuMDtcbiAgICBpZiAoIXApIHAgPSAwLjM7XG4gICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEuMCAvIGEpO1xuICAgIHJldHVybiAoXG4gICAgICAgIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyAxLjBcbiAgICApO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRFbGFzdGljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dEVsYXN0aWMgPSBmdW5jdGlvbiBpbk91dEVsYXN0aWModCkge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSAxLjA7XG4gICAgaWYgKHQgPT09IDApIHJldHVybiAwLjA7XG4gICAgaWYgKCh0IC89IDAuNSkgPT09IDIpIHJldHVybiAxLjA7XG4gICAgaWYgKCFwKSBwID0gMC4zICogMS41O1xuICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxLjAgLyBhKTtcbiAgICBpZiAodCA8IDEpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAtMC41ICpcbiAgICAgICAgICAgIChhICpcbiAgICAgICAgICAgICAgICBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSlcbiAgICAgICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgICBhICpcbiAgICAgICAgICAgIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqXG4gICAgICAgICAgICBNYXRoLnNpbigodCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICpcbiAgICAgICAgICAgIDAuNSArXG4gICAgICAgIDEuMFxuICAgICk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbkJhY2tcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluQmFjayA9IGZ1bmN0aW9uIGluQmFjayh0LCBzKSB7XG4gICAgaWYgKHMgPT09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRCYWNrXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRCYWNrID0gZnVuY3Rpb24gb3V0QmFjayh0LCBzKSB7XG4gICAgaWYgKHMgPT09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbk91dEJhY2tcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0QmFjayA9IGZ1bmN0aW9uIGluT3V0QmFjayh0LCBzKSB7XG4gICAgaWYgKHMgPT09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgaWYgKCh0IC89IDAuNSkgPCAxKSByZXR1cm4gMC41ICogKHQgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgLSBzKSk7XG4gICAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMik7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbkJvdW5jZVxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5Cb3VuY2UgPSBmdW5jdGlvbiBpbkJvdW5jZSh0KSB7XG4gICAgcmV0dXJuIDEuMCAtIEVhc2luZy5vdXRCb3VuY2UoMS4wIC0gdCk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBvdXRCb3VuY2VcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IG91dEJvdW5jZSA9IGZ1bmN0aW9uIG91dEJvdW5jZSh0KSB7XG4gICAgaWYgKHQgPCAxIC8gMi43NSkge1xuICAgICAgICByZXR1cm4gNy41NjI1ICogdCAqIHQ7XG4gICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh0IC09IDEuNSAvIDIuNzUpICogdCArIDAuNzU7XG4gICAgfSBlbHNlIGlmICh0IDwgMi41IC8gMi43NSkge1xuICAgICAgICByZXR1cm4gNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIDAuOTM3NTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAwLjk4NDM3NTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbk91dEJvdW5jZVxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRCb3VuY2UgPSBmdW5jdGlvbiBpbk91dEJvdW5jZSh0KSB7XG4gICAgaWYgKHQgPCAwLjUpIHJldHVybiBFYXNpbmcuaW5Cb3VuY2UodCAqIDIpICogMC41O1xuICAgIHJldHVybiBFYXNpbmcub3V0Qm91bmNlKHQgKiAyIC0gMS4wKSAqIDAuNSArIDAuNTtcbn07XG4iLCJpbXBvcnQgZ2xmeCBmcm9tIFwiZ2xmeFwiO1xuaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tIFwiLi9lbGVtZW50QnVpbGRlclwiO1xuaW1wb3J0IHsgb3V0Q3ViaWMsIGluQ3ViaWMsIGluRXhwbywgb3V0UXVpbnQgfSBmcm9tIFwiLi9FYXNpbmdzXCI7XG5pbXBvcnQgeyB0cmFuc2l0aW9uQnVpbGRlciB9IGZyb20gXCIuL3RyYW5zaXRpb25CdWlsZGVyXCI7XG5cbmNvbnN0IGNoZWNrVmlzaWJsZVkgPSAoZWwpID0+IHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdIZWlnaHQgPSBNYXRoLm1heChcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgIHdpbmRvdy5pbm5lckhlaWdodFxuICApO1xuICByZXR1cm4gIShyZWN0LmJvdHRvbSA8IDAgfHwgcmVjdC50b3AgLSB2aWV3SGVpZ2h0ID49IDApO1xufTtcblxuY29uc3QgY2hlY2tWaXNpYmxlWCA9IChlbCwgd2lkdGgpPT4ge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgdmlld1dpZHRoID0gTWF0aC5tYXgoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgIHdpbmRvdy5pbm5lcldpZHRoXG4gICk7XG4gIHJldHVybiAhKHJlY3QucmlnaHQgPCAwIHx8IHJlY3QubGVmdCAtIHZpZXdXaWR0aCA+PSAwKTtcbn07XG5cbmNvbnN0IFNUQVRFID0ge1xuICBPTjogXCJPTlwiLFxuICBPRkY6IFwiT0ZGXCIsXG4gIFRSQU5TSVRJT046IFwiVFJBTlNJVElPTlwiXG59O1xuXG5jb25zdCBTSE9XX0lNQUdFID0gXCJTSE9XX0lNQUdFXCI7XG5jb25zdCBISURFX0lNQUdFID0gXCJISURFX0lNQUdFXCI7XG5jb25zdCBET05FX1NIT1cgPSBcIkRPTkVfU0hPV1wiO1xuY29uc3QgRE9ORV9ISURFID0gXCJET05FX0hJREVcIjtcblxuY29uc3Qgc3RhdGVNYWNoaW5lID0ge1xuICBbU1RBVEUuT05dOiB7XG4gICAgW0hJREVfSU1BR0VdOiBTVEFURS5UUkFOU0lUSU9OXG4gIH0sXG4gIFtTVEFURS5UUkFOU0lUSU9OXToge1xuICAgIFtET05FX0hJREVdOiBTVEFURS5PRkYsXG4gICAgW0RPTkVfU0hPV106IFNUQVRFLk9OXG4gIH0sXG4gIFtTVEFURS5PRkZdOiB7XG4gICAgW1NIT1dfSU1BR0VdOiBTVEFURS5UUkFOU0lUSU9OXG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBQb2xhcm9pZCB7XG4gIGNvbnN0cnVjdG9yKHsgc3JjcywgbG9vcCB9KSB7XG4gICAgdGhpcy5sb29wID0gbG9vcDtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFNUQVRFLk9GRjtcbiAgICB0aGlzLnN0YXRlTWFjaGluZSA9IHN0YXRlTWFjaGluZTtcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcnMgPSB0aGlzLl9hZGRMaXN0ZW5lcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluaXRJbWFnZUNhbnZhcyA9IHRoaXMuaW5pdEltYWdlQ2FudmFzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja1Zpc2liaWxpdHkgPSB0aGlzLmNoZWNrVmlzaWJpbGl0eS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGlkZUltYWdlID0gdGhpcy5oaWRlSW1hZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dJbWFnZSA9IHRoaXMuc2hvd0ltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmFuc2l0aW9uYWwgPSB0aGlzLnRyYW5zaXRpb25hbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHdlZW4gPSB0aGlzLnR3ZWVuLmJpbmQodGhpcyk7XG4gICAgXG4gICAgdGhpcy5pbWFnZXMgPSBzcmNzLm1hcChzcmM9PiBlbGVtZW50QnVpbGRlcihcImltZ1wiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaW1hZ2UtaXRlbVwiLFxuICAgICAgc3JjXG4gICAgfSkpXG5cbiAgICB0aGlzLmJnSW1nID0gZWxlbWVudEJ1aWxkZXIoXCJpbWdcIiwge1xuICAgICAgc3JjOiBcIi9hc3NldHMvaW1hZ2VzL3BvbGFyb2lkLnBuZ1wiLFxuICAgICAgY2xhc3NOYW1lOiBcInBvbGFyb2lkLWZyYW1lXCJcbiAgICB9KTtcblxuICAgIHRoaXMuZmFkZUluID0gZWxlbWVudEJ1aWxkZXIoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImZhZGUtaW5cIlxuICAgIH0pO1xuXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJpbWFnZS13cmFwXCIsXG4gICAgICBjaGlsZE5vZGVzOiBbdGhpcy5iZ0ltZywgLi4udGhpcy5pbWFnZXMsIHRoaXMuZmFkZUluXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fYWRkTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgX2FkZExpc3RlbmVycygpIHtcbiAgICB0aGlzLmltYWdlc1swXS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLmluaXRJbWFnZUNhbnZhcyk7XG4gIH1cbiAgaW5pdEltYWdlQ2FudmFzKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNhbnZhcyA9IGdsZnguY2FudmFzKCk7XG4gICAgICB0aGlzLmNhbnZhcy5jbGFzc05hbWUgPSBcImltYWdlLWl0ZW1cIjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZhZGVJbi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLmltYWdlc1swXTtcbiAgICB9XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1swXTtcbiAgICB0aGlzLmltYWdlcy5mb3JFYWNoKGltYWdlPT57XG4gICAgICBpbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9KVxuXG4gICAgLy8gaW1hZ2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jYW52YXMsIGltYWdlKTtcbiAgICAvLyB0aGlzLmxvYWRJbWFnZSgpO1xuICAgIC8vY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tpbmRleF07XG4gICAgdGhpcy50ZXh0dXJlID0gdGhpcy5jYW52YXMudGV4dHVyZShpbWFnZSk7XG4gICAgaW1hZ2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jYW52YXMsIGltYWdlKTtcbiAgICAvL2ltYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2UpO1xuICAgIC8vdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgbG9hZEltYWdlKCl7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5pbWFnZXMubGVuZ3RoKVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZXNbaW5kZXhdO1xuICAgIHRoaXMudGV4dHVyZS5sb2FkQ29udGVudHNPZihpbWFnZSk7XG4gICAgXG4gICAgLy8gaW1hZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZSk7XG4gICAgLy8gdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgc2hvd0ltYWdlKHBhcmFtcykge1xuICAgIHRoaXMubG9vcC5zdGFydCgpO1xuICAgIC8vIHRyYW5zZm9ybSB2YWx1ZSBmcm9tIDEgdG8gMFxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGludGVyID0+IChpbnRlciA8PSAxID8gMSAtIGludGVyIDogMCk7XG4gICAgdGhpcy50d2Vlbih0cmFuc2Zvcm0sIDIwMDAsIHRoaXMuZGlzcGF0Y2hBY3Rpb24uYmluZCh0aGlzLCBET05FX1NIT1cpKTtcbiAgfVxuICBoaWRlSW1hZ2UoKSB7XG4gICAgLy8gdHJhbnNmb3JtIHZhbHVlIGZyb20gMCB0byAxXG4gICAgY29uc3QgdHJhbnNmb3JtID0gaW50ZXIgPT4gKGludGVyID49IDEgPyAxIDogaW50ZXIpO1xuICAgIHRoaXMudHdlZW4odHJhbnNmb3JtLCAyMDAwLCAoKT0+e1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24oRE9ORV9ISURFKVxuICAgIH0pO1xuICB9XG4gIHRyYW5zaXRpb25hbCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25CdWlsZGVyKDAsIDYwLCB0aGlzLmxvb3ApKC4uLmFyZ3MpO1xuICB9XG4gIGRpc3BhdGNoQWN0aW9uKGFjdGlvbiwgY2Ipe1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMuc3RhdGVNYWNoaW5lW3RoaXMuY3VycmVudFN0YXRlXVthY3Rpb25dO1xuICAgIGlmKG5leHRTdGF0ZSl7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9XG4gIGNoZWNrVmlzaWJpbGl0eSgpIHtcbiAgICBpZiAoY2hlY2tWaXNpYmxlWSh0aGlzLmJnSW1nKSAmJiBjaGVja1Zpc2libGVYKHRoaXMuYmdJbWcpKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKFNIT1dfSU1BR0UsIHRoaXMuc2hvd0ltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwYXRjaEFjdGlvbihISURFX0lNQUdFLCB0aGlzLmhpZGVJbWFnZSk7XG4gICAgfVxuICB9XG5cbiAgdHdlZW4oYWN0aW9uLCBkdXJhdGlvbiwgZG9uZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSAxO1xuICAgICAgdGhpcy50cmFuc2l0aW9uYWwoe1xuICAgICAgICBhbmltYXRpb246IGludGVyID0+IHtcbiAgICAgICAgICBjb25zdCB0d2VlbiA9IGFjdGlvbihpbnRlcik7XG4gICAgICAgICAgdGhpcy5jYW52YXNcbiAgICAgICAgICAgIC5kcmF3KHRoaXMudGV4dHVyZSlcbiAgICAgICAgICAgIC5sZW5zQmx1cigyMCAqIHR3ZWVuLCB2YWx1ZSAqIHR3ZWVuLCAwKVxuICAgICAgICAgICAgLnVwZGF0ZSgpO1xuICAgICAgICAgIHRoaXMuZmFkZUluLnN0eWxlLm9wYWNpdHkgPSB0d2VlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZzogaW5DdWJpYyxcbiAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgZG9uZVxuICAgICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBnbGZ4IGZyb20gXCJnbGZ4XCI7XG5pbXBvcnQgeyBlbGVtZW50QnVpbGRlciB9IGZyb20gXCIuL2VsZW1lbnRCdWlsZGVyXCI7XG5pbXBvcnQgeyBvdXRDdWJpYywgaW5DdWJpYywgaW5FeHBvLCBvdXRRdWludCB9IGZyb20gXCIuL0Vhc2luZ3NcIjtcbmltcG9ydCB7IHRyYW5zaXRpb25CdWlsZGVyIH0gZnJvbSBcIi4vdHJhbnNpdGlvbkJ1aWxkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJlY29yZFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHsgbG9vcCB9KSB7XG4gICAgdGhpcy5sb29wID0gbG9vcDtcblxuICAgIC8vdGhpcy5fYWRkTGlzdGVuZXJzID0gdGhpcy5fYWRkTGlzdGVuZXJzLmJpbmQodGhpcyk7XG4gICBcblxuICAgIHRoaXMucmVjb3JkID0gZWxlbWVudEJ1aWxkZXIoXCJpbWdcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcInJlY29yZCBzcGluXCIsXG4gICAgICBzcmM6IFwiL2Fzc2V0cy9pbWFnZXMvcmVjb3JkLnBuZ1wiXG4gICAgfSk7XG5cbiAgICB0aGlzLnBsYXllciA9IGVsZW1lbnRCdWlsZGVyKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogXCIvYXNzZXRzL2ltYWdlcy9scC5qcGdcIixcbiAgICAgIGNsYXNzTmFtZTogXCJyZWNvcmQtcGxheWVyXCJcbiAgICB9KTtcblxuICAgIFxuXG4gICAgdGhpcy5lbCA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJpbWFnZS1iZy1yZWNvcmRcIixcbiAgICAgIGNoaWxkTm9kZXM6IFt0aGlzLnBsYXllciwgdGhpcy5yZWNvcmRdXG4gICAgfSk7XG5cbiAgICAvL3RoaXMuX2FkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIF9hZGRMaXN0ZW5lcnMoKSB7XG4gICAgLy90aGlzLmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuX2luaXRJbWFnZUNhbnZhcyk7XG4gIH1cbiBcbn1cbiIsIlxuaW1wb3J0IHNBTCBmcm9tIFwic2ltcGxlX2FuaW1hdGlvbl9sb29wXCI7XG5pbXBvcnQgeyBQb2xhcm9pZCB9IGZyb20gXCIuL1BvbGFyb2lkXCI7XG5pbXBvcnQgeyBSZWNvcmRQbGF5ZXIgfSBmcm9tICcuL1JlY29yZFBsYXllcic7XG5cbmNvbnN0IGdldFNyYyA9IChpbmRleGVzKSA9PiB7XG4gIGNvbnN0IHJhbmRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGluZGV4ZXMubGVuZ3RoIC0gMSk7XG4gIHZhciB2YWx1ZSA9IGluZGV4ZXMuc3BsaWNlKHJhbmRJbmRleCwgMSlcbiAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9kb3dubG9hZC0ke3ZhbHVlWzBdfS5qcGdgXG59XG5cbmNvbnN0IGNyZWF0ZVBvbGFyb2lkUGljcyA9ICh7ZW50cnksIGxvb3B9KSA9PntcbiAgdmFyIGluZGV4ZXMgPSBuZXcgQXJyYXkoMzYpLmZpbGwoKS5tYXAoKF8saSkgPT4gaSArIDEpO1xuXG4gICB2YXIgaW1hZ2VzID0gbmV3IEFycmF5KDEyKS5maWxsKCkubWFwKChfLCBpKSA9PiB7XG5cbiAgIFxuICAgIGNvbnN0IHBvbGFyb2lkID0gbmV3IFBvbGFyb2lkKHtcbiAgICAgIHNyY3M6IFtnZXRTcmMoaW5kZXhlcyksIGdldFNyYyhpbmRleGVzKSwgZ2V0U3JjKGluZGV4ZXMpXSxcbiAgICAgIGxvb3BcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhZGRpbmcgPSAxMDA7XG4gICAgcG9sYXJvaWQuZWwuc3R5bGUubGVmdCA9IGAke2kgKiAzNTAgKyBwYWRkaW5nICogKGkgKyAxKX1weGA7XG4gICAgZW50cnkuYXBwZW5kQ2hpbGQocG9sYXJvaWQuZWwpO1xuICAgIHJldHVybiBwb2xhcm9pZDtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY29yZC13cmFwJykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCk9PntcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGkpPT57XG4gICAgICAgaW1hZ2UuY2hlY2tWaXNpYmlsaXR5KClcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBjcmVhdGVSZWNvcmRQbGF5ZXIgPSAoe2VudHJ5LCBsb29wfSkgPT4ge1xuICBlbnRyeS5hcHBlbmRDaGlsZChuZXcgUmVjb3JkUGxheWVyKHsgbG9vcCB9KS5lbCk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9ICgpID0+IHtcbiAgY29uc3QgZW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudHJ5XCIpO1xuICBjb25zdCBsb29wID0gbmV3IHNBTCgpO1xuICBjb25zdCBvcHRpb25zID0ge2VudHJ5LCBsb29wfVxuICBjcmVhdGVQb2xhcm9pZFBpY3Mob3B0aW9ucyk7XG4gIC8vIGNyZWF0ZVJlY29yZFBsYXllcihvcHRpb25zKVxufTtcblxuXG4iLCJleHBvcnQgY29uc3QgZWxlbWVudEJ1aWxkZXIgPSAodGFnTmFtZSA9IFwiZGl2XCIsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChrZXkgIT09IFwiY2hpbGROb2Rlc1wiKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xuICBvcHRpb25zLmNoaWxkTm9kZXMgJiZcbiAgICBvcHRpb25zLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJjb25zdCBpZGVudCA9IHggPT4geDtcbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uQnVpbGRlciA9IChjb3VudCwgc3RlcCwgbG9vcCkgPT4ge1xuICByZXR1cm4gKHthbmltYXRpb24sIGR1cmF0aW9uLCBlYXNpbmcgPSBpZGVudCwgZGVsYXkgPSAwLCBkb25lfSkgPT4ge1xuICAgIGxvb3Auc2V0QW5pbWF0aW9uVGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVyID0gbG9vcC5zZXRBbmltYXRpb25JbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjb3VudCA+PSBkdXJhdGlvbikge1xuICAgICAgICAgIGxvb3AucmVtb3ZlQW5pbWF0aW9uKHVwZGF0ZXIpO1xuICAgICAgICAgICFsb29wLmFuaW1hdGlvbnMubGVuZ3RoICYmIGxvb3Auc3RvcCgpO1xuICAgICAgICAgIGRvbmUgJiYgZG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFuaW1hdGlvbihlYXNpbmcoY291bnQgLyBkdXJhdGlvbikpO1xuICAgICAgICBjb3VudCArPSBzdGVwO1xuICAgICAgfSwgc3RlcCk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJy4vYXNzZXRzL2pzL2FwcCc7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgY3JlYXRlQXBwKCk7XG59LCAxMDAwKSIsIi8qXG4gKiBnbGZ4LmpzXG4gKiBodHRwOi8vZXZhbncuZ2l0aHViLmNvbS9nbGZ4LmpzL1xuICpcbiAqIENvcHlyaWdodCAyMDExIEV2YW4gV2FsbGFjZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbnZhciBmeD1mdW5jdGlvbigpe2Z1bmN0aW9uIHEoYSxkLGMpe3JldHVybiBNYXRoLm1heChhLE1hdGgubWluKGQsYykpfWZ1bmN0aW9uIHcoYil7cmV0dXJue186Yixsb2FkQ29udGVudHNPZjpmdW5jdGlvbihiKXthPXRoaXMuXy5nbDt0aGlzLl8ubG9hZENvbnRlbnRzT2YoYil9LGRlc3Ryb3k6ZnVuY3Rpb24oKXthPXRoaXMuXy5nbDt0aGlzLl8uZGVzdHJveSgpfX19ZnVuY3Rpb24gQShhKXtyZXR1cm4gdyhyLmZyb21FbGVtZW50KGEpKX1mdW5jdGlvbiBCKGIsZCl7dmFyIGM9YS5VTlNJR05FRF9CWVRFO2lmKGEuZ2V0RXh0ZW5zaW9uKFwiT0VTX3RleHR1cmVfZmxvYXRcIikmJmEuZ2V0RXh0ZW5zaW9uKFwiT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXCIpKXt2YXIgZT1uZXcgcigxMDAsMTAwLGEuUkdCQSxhLkZMT0FUKTt0cnl7ZS5kcmF3VG8oZnVuY3Rpb24oKXtjPWEuRkxPQVR9KX1jYXRjaChnKXt9ZS5kZXN0cm95KCl9dGhpcy5fLnRleHR1cmUmJnRoaXMuXy50ZXh0dXJlLmRlc3Ryb3koKTtcbnRoaXMuXy5zcGFyZVRleHR1cmUmJnRoaXMuXy5zcGFyZVRleHR1cmUuZGVzdHJveSgpO3RoaXMud2lkdGg9Yjt0aGlzLmhlaWdodD1kO3RoaXMuXy50ZXh0dXJlPW5ldyByKGIsZCxhLlJHQkEsYyk7dGhpcy5fLnNwYXJlVGV4dHVyZT1uZXcgcihiLGQsYS5SR0JBLGMpO3RoaXMuXy5leHRyYVRleHR1cmU9dGhpcy5fLmV4dHJhVGV4dHVyZXx8bmV3IHIoMCwwLGEuUkdCQSxjKTt0aGlzLl8uZmxpcHBlZFNoYWRlcj10aGlzLl8uZmxpcHBlZFNoYWRlcnx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx2ZWMyKHRleENvb3JkLngsMS4wLXRleENvb3JkLnkpKTt9XCIpO3RoaXMuXy5pc0luaXRpYWxpemVkPSEwfWZ1bmN0aW9uIEMoYSxkLGMpe2lmKCF0aGlzLl8uaXNJbml0aWFsaXplZHx8XG5hLl8ud2lkdGghPXRoaXMud2lkdGh8fGEuXy5oZWlnaHQhPXRoaXMuaGVpZ2h0KUIuY2FsbCh0aGlzLGQ/ZDphLl8ud2lkdGgsYz9jOmEuXy5oZWlnaHQpO2EuXy51c2UoKTt0aGlzLl8udGV4dHVyZS5kcmF3VG8oZnVuY3Rpb24oKXtoLmdldERlZmF1bHRTaGFkZXIoKS5kcmF3UmVjdCgpfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gRCgpe3RoaXMuXy50ZXh0dXJlLnVzZSgpO3RoaXMuXy5mbGlwcGVkU2hhZGVyLmRyYXdSZWN0KCk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gZihhLGQsYyxlKXsoY3x8dGhpcy5fLnRleHR1cmUpLnVzZSgpO3RoaXMuXy5zcGFyZVRleHR1cmUuZHJhd1RvKGZ1bmN0aW9uKCl7YS51bmlmb3JtcyhkKS5kcmF3UmVjdCgpfSk7dGhpcy5fLnNwYXJlVGV4dHVyZS5zd2FwV2l0aChlfHx0aGlzLl8udGV4dHVyZSl9ZnVuY3Rpb24gRShhKXthLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsYSk7YS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpO3JldHVybiB0aGlzfVxuZnVuY3Rpb24gRigpe3ZhciBiPW5ldyByKHRoaXMuXy50ZXh0dXJlLndpZHRoLHRoaXMuXy50ZXh0dXJlLmhlaWdodCxhLlJHQkEsYS5VTlNJR05FRF9CWVRFKTt0aGlzLl8udGV4dHVyZS51c2UoKTtiLmRyYXdUbyhmdW5jdGlvbigpe2guZ2V0RGVmYXVsdFNoYWRlcigpLmRyYXdSZWN0KCl9KTtyZXR1cm4gdyhiKX1mdW5jdGlvbiBHKCl7dmFyIGI9dGhpcy5fLnRleHR1cmUud2lkdGgsZD10aGlzLl8udGV4dHVyZS5oZWlnaHQsYz1uZXcgVWludDhBcnJheSg0KmIqZCk7dGhpcy5fLnRleHR1cmUuZHJhd1RvKGZ1bmN0aW9uKCl7YS5yZWFkUGl4ZWxzKDAsMCxiLGQsYS5SR0JBLGEuVU5TSUdORURfQllURSxjKX0pO3JldHVybiBjfWZ1bmN0aW9uIGsoYil7cmV0dXJuIGZ1bmN0aW9uKCl7YT10aGlzLl8uZ2w7cmV0dXJuIGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiB4KGEsZCxjLGUsZyxuLGwscCl7dmFyIG09Yy1nLGg9ZS1uLGY9bC1nLGs9cC1uO2c9YS1jK2ctbDtuPVxuZC1lK24tcDt2YXIgcT1tKmstZipoLGY9KGcqay1mKm4pL3EsbT0obSpuLWcqaCkvcTtyZXR1cm5bYy1hK2YqYyxlLWQrZiplLGYsbC1hK20qbCxwLWQrbSpwLG0sYSxkLDFdfWZ1bmN0aW9uIHkoYSl7dmFyIGQ9YVswXSxjPWFbMV0sZT1hWzJdLGc9YVszXSxuPWFbNF0sbD1hWzVdLHA9YVs2XSxtPWFbN107YT1hWzhdO3ZhciBmPWQqbiphLWQqbCptLWMqZyphK2MqbCpwK2UqZyptLWUqbipwO3JldHVyblsobiphLWwqbSkvZiwoZSptLWMqYSkvZiwoYypsLWUqbikvZiwobCpwLWcqYSkvZiwoZCphLWUqcCkvZiwoZSpnLWQqbCkvZiwoZyptLW4qcCkvZiwoYypwLWQqbSkvZiwoZCpuLWMqZykvZl19ZnVuY3Rpb24geihhKXt2YXIgZD1hLmxlbmd0aDt0aGlzLnhhPVtdO3RoaXMueWE9W107dGhpcy51PVtdO3RoaXMueTI9W107YS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbMF0tYlswXX0pO2Zvcih2YXIgYz0wO2M8ZDtjKyspdGhpcy54YS5wdXNoKGFbY11bMF0pLHRoaXMueWEucHVzaChhW2NdWzFdKTtcbnRoaXMudVswXT0wO3RoaXMueTJbMF09MDtmb3IoYz0xO2M8ZC0xOysrYyl7YT10aGlzLnhhW2MrMV0tdGhpcy54YVtjLTFdO3ZhciBlPSh0aGlzLnhhW2NdLXRoaXMueGFbYy0xXSkvYSxnPWUqdGhpcy55MltjLTFdKzI7dGhpcy55MltjXT0oZS0xKS9nO3RoaXMudVtjXT0oNiooKHRoaXMueWFbYysxXS10aGlzLnlhW2NdKS8odGhpcy54YVtjKzFdLXRoaXMueGFbY10pLSh0aGlzLnlhW2NdLXRoaXMueWFbYy0xXSkvKHRoaXMueGFbY10tdGhpcy54YVtjLTFdKSkvYS1lKnRoaXMudVtjLTFdKS9nfXRoaXMueTJbZC0xXT0wO2ZvcihjPWQtMjswPD1jOy0tYyl0aGlzLnkyW2NdPXRoaXMueTJbY10qdGhpcy55MltjKzFdK3RoaXMudVtjXX1mdW5jdGlvbiB1KGEsZCl7cmV0dXJuIG5ldyBoKG51bGwsYStcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIHRleFNpemU7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9dGV4Q29vcmQqdGV4U2l6ZTtcIitcbmQrXCJnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHRleHR1cmUsY29vcmQvdGV4U2l6ZSk7dmVjMiBjbGFtcGVkQ29vcmQ9Y2xhbXAoY29vcmQsdmVjMigwLjApLHRleFNpemUpO2lmKGNvb3JkIT1jbGFtcGVkQ29vcmQpe2dsX0ZyYWdDb2xvci5hKj1tYXgoMC4wLDEuMC1sZW5ndGgoY29vcmQtY2xhbXBlZENvb3JkKSk7fX1cIil9ZnVuY3Rpb24gSChiKXthLm5vaXNlPWEubm9pc2V8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gZmxvYXQgYW1vdW50O3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtmbG9hdCByYW5kKHZlYzIgY28pe3JldHVybiBmcmFjdChzaW4oZG90KGNvLnh5LHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkqNDM3NTguNTQ1Myk7fXZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IGRpZmY9KHJhbmQodGV4Q29vcmQpLTAuNSkqYW1vdW50O2NvbG9yLnIrPWRpZmY7Y29sb3IuZys9ZGlmZjtjb2xvci5iKz1kaWZmO2dsX0ZyYWdDb2xvcj1jb2xvcjt9XCIpO1xuZi5jYWxsKHRoaXMsYS5ub2lzZSx7YW1vdW50OnEoMCxiLDEpfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gSShiKXthLnZpYnJhbmNlPWEudmlicmFuY2V8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gZmxvYXQgYW1vdW50O3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTtmbG9hdCBhdmVyYWdlPShjb2xvci5yK2NvbG9yLmcrY29sb3IuYikvMy4wO2Zsb2F0IG14PW1heChjb2xvci5yLG1heChjb2xvci5nLGNvbG9yLmIpKTtmbG9hdCBhbXQ9KG14LWF2ZXJhZ2UpKigtYW1vdW50KjMuMCk7Y29sb3IucmdiPW1peChjb2xvci5yZ2IsdmVjMyhteCksYW10KTtnbF9GcmFnQ29sb3I9Y29sb3I7fVwiKTtcbmYuY2FsbCh0aGlzLGEudmlicmFuY2Use2Ftb3VudDpxKC0xLGIsMSl9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBKKGIsZCl7YS52aWduZXR0ZT1hLnZpZ25ldHRlfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IHNpemU7dW5pZm9ybSBmbG9hdCBhbW91bnQ7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IGRpc3Q9ZGlzdGFuY2UodGV4Q29vcmQsdmVjMigwLjUsMC41KSk7Y29sb3IucmdiKj1zbW9vdGhzdGVwKDAuOCxzaXplKjAuNzk5LGRpc3QqKGFtb3VudCtzaXplKSk7Z2xfRnJhZ0NvbG9yPWNvbG9yO31cIik7XG5mLmNhbGwodGhpcyxhLnZpZ25ldHRlLHtzaXplOnEoMCxiLDEpLGFtb3VudDpxKDAsZCwxKX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIEsoYil7YS5kZW5vaXNlPWEuZGVub2lzZXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBleHBvbmVudDt1bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGNlbnRlcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7dmVjNCBjb2xvcj12ZWM0KDAuMCk7ZmxvYXQgdG90YWw9MC4wO2ZvcihmbG9hdCB4PS00LjA7eDw9NC4wO3grPTEuMCl7Zm9yKGZsb2F0IHk9LTQuMDt5PD00LjA7eSs9MS4wKXt2ZWM0IHNhbXBsZT10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCt2ZWMyKHgseSkvdGV4U2l6ZSk7ZmxvYXQgd2VpZ2h0PTEuMC1hYnMoZG90KHNhbXBsZS5yZ2ItY2VudGVyLnJnYix2ZWMzKDAuMjUpKSk7d2VpZ2h0PXBvdyh3ZWlnaHQsZXhwb25lbnQpO2NvbG9yKz1zYW1wbGUqd2VpZ2h0O3RvdGFsKz13ZWlnaHQ7fX1nbF9GcmFnQ29sb3I9Y29sb3IvdG90YWw7fVwiKTtcbmZvcih2YXIgZD0wOzI+ZDtkKyspZi5jYWxsKHRoaXMsYS5kZW5vaXNlLHtleHBvbmVudDpNYXRoLm1heCgwLGIpLHRleFNpemU6W3RoaXMud2lkdGgsdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gTChiLGQpe2EuYnJpZ2h0bmVzc0NvbnRyYXN0PWEuYnJpZ2h0bmVzc0NvbnRyYXN0fHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGJyaWdodG5lc3M7dW5pZm9ybSBmbG9hdCBjb250cmFzdDt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7Y29sb3IucmdiKz1icmlnaHRuZXNzO2lmKGNvbnRyYXN0PjAuMCl7Y29sb3IucmdiPShjb2xvci5yZ2ItMC41KS8oMS4wLWNvbnRyYXN0KSswLjU7fWVsc2V7Y29sb3IucmdiPShjb2xvci5yZ2ItMC41KSooMS4wK2NvbnRyYXN0KSswLjU7fWdsX0ZyYWdDb2xvcj1jb2xvcjt9XCIpO1xuZi5jYWxsKHRoaXMsYS5icmlnaHRuZXNzQ29udHJhc3Qse2JyaWdodG5lc3M6cSgtMSxiLDEpLGNvbnRyYXN0OnEoLTEsZCwxKX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIHQoYSl7YT1uZXcgeihhKTtmb3IodmFyIGQ9W10sYz0wOzI1Nj5jO2MrKylkLnB1c2gocSgwLE1hdGguZmxvb3IoMjU2KmEuaW50ZXJwb2xhdGUoYy8yNTUpKSwyNTUpKTtyZXR1cm4gZH1mdW5jdGlvbiBNKGIsZCxjKXtiPXQoYik7MT09YXJndW1lbnRzLmxlbmd0aD9kPWM9YjooZD10KGQpLGM9dChjKSk7Zm9yKHZhciBlPVtdLGc9MDsyNTY+ZztnKyspZS5zcGxpY2UoZS5sZW5ndGgsMCxiW2ddLGRbZ10sY1tnXSwyNTUpO3RoaXMuXy5leHRyYVRleHR1cmUuaW5pdEZyb21CeXRlcygyNTYsMSxlKTt0aGlzLl8uZXh0cmFUZXh0dXJlLnVzZSgxKTthLmN1cnZlcz1hLmN1cnZlc3x8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBzYW1wbGVyMkQgbWFwO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTtjb2xvci5yPXRleHR1cmUyRChtYXAsdmVjMihjb2xvci5yKSkucjtjb2xvci5nPXRleHR1cmUyRChtYXAsdmVjMihjb2xvci5nKSkuZztjb2xvci5iPXRleHR1cmUyRChtYXAsdmVjMihjb2xvci5iKSkuYjtnbF9GcmFnQ29sb3I9Y29sb3I7fVwiKTtcbmEuY3VydmVzLnRleHR1cmVzKHttYXA6MX0pO2YuY2FsbCh0aGlzLGEuY3VydmVzLHt9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBOKGIsZCl7YS51bnNoYXJwTWFzaz1hLnVuc2hhcnBNYXNrfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgYmx1cnJlZFRleHR1cmU7dW5pZm9ybSBzYW1wbGVyMkQgb3JpZ2luYWxUZXh0dXJlO3VuaWZvcm0gZmxvYXQgc3RyZW5ndGg7dW5pZm9ybSBmbG9hdCB0aHJlc2hvbGQ7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzQgYmx1cnJlZD10ZXh0dXJlMkQoYmx1cnJlZFRleHR1cmUsdGV4Q29vcmQpO3ZlYzQgb3JpZ2luYWw9dGV4dHVyZTJEKG9yaWdpbmFsVGV4dHVyZSx0ZXhDb29yZCk7Z2xfRnJhZ0NvbG9yPW1peChibHVycmVkLG9yaWdpbmFsLDEuMCtzdHJlbmd0aCk7fVwiKTtcbnRoaXMuXy5leHRyYVRleHR1cmUuZW5zdXJlRm9ybWF0KHRoaXMuXy50ZXh0dXJlKTt0aGlzLl8udGV4dHVyZS51c2UoKTt0aGlzLl8uZXh0cmFUZXh0dXJlLmRyYXdUbyhmdW5jdGlvbigpe2guZ2V0RGVmYXVsdFNoYWRlcigpLmRyYXdSZWN0KCl9KTt0aGlzLl8uZXh0cmFUZXh0dXJlLnVzZSgxKTt0aGlzLnRyaWFuZ2xlQmx1cihiKTthLnVuc2hhcnBNYXNrLnRleHR1cmVzKHtvcmlnaW5hbFRleHR1cmU6MX0pO2YuY2FsbCh0aGlzLGEudW5zaGFycE1hc2sse3N0cmVuZ3RoOmR9KTt0aGlzLl8uZXh0cmFUZXh0dXJlLnVudXNlKDEpO3JldHVybiB0aGlzfWZ1bmN0aW9uIE8oYil7YS5zZXBpYT1hLnNlcGlhfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGFtb3VudDt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7ZmxvYXQgcj1jb2xvci5yO2Zsb2F0IGc9Y29sb3IuZztmbG9hdCBiPWNvbG9yLmI7Y29sb3Iucj1taW4oMS4wLChyKigxLjAtKDAuNjA3KmFtb3VudCkpKSsoZyooMC43NjkqYW1vdW50KSkrKGIqKDAuMTg5KmFtb3VudCkpKTtjb2xvci5nPW1pbigxLjAsKHIqMC4zNDkqYW1vdW50KSsoZyooMS4wLSgwLjMxNCphbW91bnQpKSkrKGIqMC4xNjgqYW1vdW50KSk7Y29sb3IuYj1taW4oMS4wLChyKjAuMjcyKmFtb3VudCkrKGcqMC41MzQqYW1vdW50KSsoYiooMS4wLSgwLjg2OSphbW91bnQpKSkpO2dsX0ZyYWdDb2xvcj1jb2xvcjt9XCIpO1xuZi5jYWxsKHRoaXMsYS5zZXBpYSx7YW1vdW50OnEoMCxiLDEpfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gUChiLGQpe2EuaHVlU2F0dXJhdGlvbj1hLmh1ZVNhdHVyYXRpb258fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gZmxvYXQgaHVlO3VuaWZvcm0gZmxvYXQgc2F0dXJhdGlvbjt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7ZmxvYXQgYW5nbGU9aHVlKjMuMTQxNTkyNjU7ZmxvYXQgcz1zaW4oYW5nbGUpLGM9Y29zKGFuZ2xlKTt2ZWMzIHdlaWdodHM9KHZlYzMoMi4wKmMsLXNxcnQoMy4wKSpzLWMsc3FydCgzLjApKnMtYykrMS4wKS8zLjA7ZmxvYXQgbGVuPWxlbmd0aChjb2xvci5yZ2IpO2NvbG9yLnJnYj12ZWMzKGRvdChjb2xvci5yZ2Isd2VpZ2h0cy54eXopLGRvdChjb2xvci5yZ2Isd2VpZ2h0cy56eHkpLGRvdChjb2xvci5yZ2Isd2VpZ2h0cy55engpKTtmbG9hdCBhdmVyYWdlPShjb2xvci5yK2NvbG9yLmcrY29sb3IuYikvMy4wO2lmKHNhdHVyYXRpb24+MC4wKXtjb2xvci5yZ2IrPShhdmVyYWdlLWNvbG9yLnJnYikqKDEuMC0xLjAvKDEuMDAxLXNhdHVyYXRpb24pKTt9ZWxzZXtjb2xvci5yZ2IrPShhdmVyYWdlLWNvbG9yLnJnYikqKC1zYXR1cmF0aW9uKTt9Z2xfRnJhZ0NvbG9yPWNvbG9yO31cIik7XG5mLmNhbGwodGhpcyxhLmh1ZVNhdHVyYXRpb24se2h1ZTpxKC0xLGIsMSksc2F0dXJhdGlvbjpxKC0xLGQsMSl9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBRKGIsZCxjKXthLnpvb21CbHVyPWEuem9vbUJsdXJ8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gdmVjMiBjZW50ZXI7dW5pZm9ybSBmbG9hdCBzdHJlbmd0aDt1bmlmb3JtIHZlYzIgdGV4U2l6ZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XCIrcytcInZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dmVjNCgwLjApO2Zsb2F0IHRvdGFsPTAuMDt2ZWMyIHRvQ2VudGVyPWNlbnRlci10ZXhDb29yZCp0ZXhTaXplO2Zsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTtmb3IoZmxvYXQgdD0wLjA7dDw9NDAuMDt0Kyspe2Zsb2F0IHBlcmNlbnQ9KHQrb2Zmc2V0KS80MC4wO2Zsb2F0IHdlaWdodD00LjAqKHBlcmNlbnQtcGVyY2VudCpwZXJjZW50KTt2ZWM0IHNhbXBsZT10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCt0b0NlbnRlcipwZXJjZW50KnN0cmVuZ3RoL3RleFNpemUpO3NhbXBsZS5yZ2IqPXNhbXBsZS5hO2NvbG9yKz1zYW1wbGUqd2VpZ2h0O3RvdGFsKz13ZWlnaHQ7fWdsX0ZyYWdDb2xvcj1jb2xvci90b3RhbDtnbF9GcmFnQ29sb3IucmdiLz1nbF9GcmFnQ29sb3IuYSswLjAwMDAxO31cIik7XG5mLmNhbGwodGhpcyxhLnpvb21CbHVyLHtjZW50ZXI6W2IsZF0sc3RyZW5ndGg6Yyx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFIoYixkLGMsZSxnLG4pe2EudGlsdFNoaWZ0PWEudGlsdFNoaWZ0fHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGJsdXJSYWRpdXM7dW5pZm9ybSBmbG9hdCBncmFkaWVudFJhZGl1czt1bmlmb3JtIHZlYzIgc3RhcnQ7dW5pZm9ybSB2ZWMyIGVuZDt1bmlmb3JtIHZlYzIgZGVsdGE7dW5pZm9ybSB2ZWMyIHRleFNpemU7dmFyeWluZyB2ZWMyIHRleENvb3JkO1wiK3MrXCJ2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXZlYzQoMC4wKTtmbG9hdCB0b3RhbD0wLjA7ZmxvYXQgb2Zmc2V0PXJhbmRvbSh2ZWMzKDEyLjk4OTgsNzguMjMzLDE1MS43MTgyKSwwLjApO3ZlYzIgbm9ybWFsPW5vcm1hbGl6ZSh2ZWMyKHN0YXJ0LnktZW5kLnksZW5kLngtc3RhcnQueCkpO2Zsb2F0IHJhZGl1cz1zbW9vdGhzdGVwKDAuMCwxLjAsYWJzKGRvdCh0ZXhDb29yZCp0ZXhTaXplLXN0YXJ0LG5vcm1hbCkpL2dyYWRpZW50UmFkaXVzKSpibHVyUmFkaXVzO2ZvcihmbG9hdCB0PS0zMC4wO3Q8PTMwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldC0wLjUpLzMwLjA7ZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7dmVjNCBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrZGVsdGEvdGV4U2l6ZSpwZXJjZW50KnJhZGl1cyk7c2FtcGxlLnJnYio9c2FtcGxlLmE7Y29sb3IrPXNhbXBsZSp3ZWlnaHQ7dG90YWwrPXdlaWdodDt9Z2xfRnJhZ0NvbG9yPWNvbG9yL3RvdGFsO2dsX0ZyYWdDb2xvci5yZ2IvPWdsX0ZyYWdDb2xvci5hKzAuMDAwMDE7fVwiKTtcbnZhciBsPWMtYixwPWUtZCxtPU1hdGguc3FydChsKmwrcCpwKTtmLmNhbGwodGhpcyxhLnRpbHRTaGlmdCx7Ymx1clJhZGl1czpnLGdyYWRpZW50UmFkaXVzOm4sc3RhcnQ6W2IsZF0sZW5kOltjLGVdLGRlbHRhOltsL20scC9tXSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO2YuY2FsbCh0aGlzLGEudGlsdFNoaWZ0LHtibHVyUmFkaXVzOmcsZ3JhZGllbnRSYWRpdXM6bixzdGFydDpbYixkXSxlbmQ6W2MsZV0sZGVsdGE6Wy1wL20sbC9tXSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFMoYixkLGMpe2EubGVuc0JsdXJQcmVQYXNzPWEubGVuc0JsdXJQcmVQYXNzfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IHBvd2VyO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTtjb2xvcj1wb3coY29sb3IsdmVjNChwb3dlcikpO2dsX0ZyYWdDb2xvcj12ZWM0KGNvbG9yKTt9XCIpO1xudmFyIGU9XCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMDt1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMTt1bmlmb3JtIHZlYzIgZGVsdGEwO3VuaWZvcm0gdmVjMiBkZWx0YTE7dW5pZm9ybSBmbG9hdCBwb3dlcjt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XCIrcytcInZlYzQgc2FtcGxlKHZlYzIgZGVsdGEpe2Zsb2F0IG9mZnNldD1yYW5kb20odmVjMyhkZWx0YSwxNTEuNzE4MiksMC4wKTt2ZWM0IGNvbG9yPXZlYzQoMC4wKTtmbG9hdCB0b3RhbD0wLjA7Zm9yKGZsb2F0IHQ9MC4wO3Q8PTMwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldCkvMzAuMDtjb2xvcis9dGV4dHVyZTJEKHRleHR1cmUwLHRleENvb3JkK2RlbHRhKnBlcmNlbnQpO3RvdGFsKz0xLjA7fXJldHVybiBjb2xvci90b3RhbDt9XCI7XG5hLmxlbnNCbHVyMD1hLmxlbnNCbHVyMHx8bmV3IGgobnVsbCxlK1widm9pZCBtYWluKCl7Z2xfRnJhZ0NvbG9yPXNhbXBsZShkZWx0YTApO31cIik7YS5sZW5zQmx1cjE9YS5sZW5zQmx1cjF8fG5ldyBoKG51bGwsZStcInZvaWQgbWFpbigpe2dsX0ZyYWdDb2xvcj0oc2FtcGxlKGRlbHRhMCkrc2FtcGxlKGRlbHRhMSkpKjAuNTt9XCIpO2EubGVuc0JsdXIyPWEubGVuc0JsdXIyfHwobmV3IGgobnVsbCxlK1widm9pZCBtYWluKCl7dmVjNCBjb2xvcj0oc2FtcGxlKGRlbHRhMCkrMi4wKnRleHR1cmUyRCh0ZXh0dXJlMSx0ZXhDb29yZCkpLzMuMDtnbF9GcmFnQ29sb3I9cG93KGNvbG9yLHZlYzQocG93ZXIpKTt9XCIpKS50ZXh0dXJlcyh7dGV4dHVyZTE6MX0pO2Zvcih2YXIgZT1cbltdLGc9MDszPmc7ZysrKXt2YXIgbj1jKzIqZypNYXRoLlBJLzM7ZS5wdXNoKFtiKk1hdGguc2luKG4pL3RoaXMud2lkdGgsYipNYXRoLmNvcyhuKS90aGlzLmhlaWdodF0pfWI9TWF0aC5wb3coMTAscSgtMSxkLDEpKTtmLmNhbGwodGhpcyxhLmxlbnNCbHVyUHJlUGFzcyx7cG93ZXI6Yn0pO3RoaXMuXy5leHRyYVRleHR1cmUuZW5zdXJlRm9ybWF0KHRoaXMuXy50ZXh0dXJlKTtmLmNhbGwodGhpcyxhLmxlbnNCbHVyMCx7ZGVsdGEwOmVbMF19LHRoaXMuXy50ZXh0dXJlLHRoaXMuXy5leHRyYVRleHR1cmUpO2YuY2FsbCh0aGlzLGEubGVuc0JsdXIxLHtkZWx0YTA6ZVsxXSxkZWx0YTE6ZVsyXX0sdGhpcy5fLmV4dHJhVGV4dHVyZSx0aGlzLl8uZXh0cmFUZXh0dXJlKTtmLmNhbGwodGhpcyxhLmxlbnNCbHVyMCx7ZGVsdGEwOmVbMV19KTt0aGlzLl8uZXh0cmFUZXh0dXJlLnVzZSgxKTtmLmNhbGwodGhpcyxhLmxlbnNCbHVyMix7cG93ZXI6MS9iLGRlbHRhMDplWzJdfSk7cmV0dXJuIHRoaXN9XG5mdW5jdGlvbiBUKGIpe2EudHJpYW5nbGVCbHVyPWEudHJpYW5nbGVCbHVyfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgZGVsdGE7dmFyeWluZyB2ZWMyIHRleENvb3JkO1wiK3MrXCJ2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXZlYzQoMC4wKTtmbG9hdCB0b3RhbD0wLjA7ZmxvYXQgb2Zmc2V0PXJhbmRvbSh2ZWMzKDEyLjk4OTgsNzguMjMzLDE1MS43MTgyKSwwLjApO2ZvcihmbG9hdCB0PS0zMC4wO3Q8PTMwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldC0wLjUpLzMwLjA7ZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7dmVjNCBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrZGVsdGEqcGVyY2VudCk7c2FtcGxlLnJnYio9c2FtcGxlLmE7Y29sb3IrPXNhbXBsZSp3ZWlnaHQ7dG90YWwrPXdlaWdodDt9Z2xfRnJhZ0NvbG9yPWNvbG9yL3RvdGFsO2dsX0ZyYWdDb2xvci5yZ2IvPWdsX0ZyYWdDb2xvci5hKzAuMDAwMDE7fVwiKTtcbmYuY2FsbCh0aGlzLGEudHJpYW5nbGVCbHVyLHtkZWx0YTpbYi90aGlzLndpZHRoLDBdfSk7Zi5jYWxsKHRoaXMsYS50cmlhbmdsZUJsdXIse2RlbHRhOlswLGIvdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gVShiKXthLmVkZ2VXb3JrMT1hLmVkZ2VXb3JrMXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIGRlbHRhO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcIitzK1widm9pZCBtYWluKCl7dmVjMiBjb2xvcj12ZWMyKDAuMCk7dmVjMiB0b3RhbD12ZWMyKDAuMCk7ZmxvYXQgb2Zmc2V0PXJhbmRvbSh2ZWMzKDEyLjk4OTgsNzguMjMzLDE1MS43MTgyKSwwLjApO2ZvcihmbG9hdCB0PS0zMC4wO3Q8PTMwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldC0wLjUpLzMwLjA7ZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7dmVjMyBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrZGVsdGEqcGVyY2VudCkucmdiO2Zsb2F0IGF2ZXJhZ2U9KHNhbXBsZS5yK3NhbXBsZS5nK3NhbXBsZS5iKS8zLjA7Y29sb3IueCs9YXZlcmFnZSp3ZWlnaHQ7dG90YWwueCs9d2VpZ2h0O2lmKGFicyh0KTwxNS4wKXt3ZWlnaHQ9d2VpZ2h0KjIuMC0xLjA7Y29sb3IueSs9YXZlcmFnZSp3ZWlnaHQ7dG90YWwueSs9d2VpZ2h0O319Z2xfRnJhZ0NvbG9yPXZlYzQoY29sb3IvdG90YWwsMC4wLDEuMCk7fVwiKTtcbmEuZWRnZVdvcmsyPWEuZWRnZVdvcmsyfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgZGVsdGE7dmFyeWluZyB2ZWMyIHRleENvb3JkO1wiK3MrXCJ2b2lkIG1haW4oKXt2ZWMyIGNvbG9yPXZlYzIoMC4wKTt2ZWMyIHRvdGFsPXZlYzIoMC4wKTtmbG9hdCBvZmZzZXQ9cmFuZG9tKHZlYzMoMTIuOTg5OCw3OC4yMzMsMTUxLjcxODIpLDAuMCk7Zm9yKGZsb2F0IHQ9LTMwLjA7dDw9MzAuMDt0Kyspe2Zsb2F0IHBlcmNlbnQ9KHQrb2Zmc2V0LTAuNSkvMzAuMDtmbG9hdCB3ZWlnaHQ9MS4wLWFicyhwZXJjZW50KTt2ZWMyIHNhbXBsZT10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCtkZWx0YSpwZXJjZW50KS54eTtjb2xvci54Kz1zYW1wbGUueCp3ZWlnaHQ7dG90YWwueCs9d2VpZ2h0O2lmKGFicyh0KTwxNS4wKXt3ZWlnaHQ9d2VpZ2h0KjIuMC0xLjA7Y29sb3IueSs9c2FtcGxlLnkqd2VpZ2h0O3RvdGFsLnkrPXdlaWdodDt9fWZsb2F0IGM9Y2xhbXAoMTAwMDAuMCooY29sb3IueS90b3RhbC55LWNvbG9yLngvdG90YWwueCkrMC41LDAuMCwxLjApO2dsX0ZyYWdDb2xvcj12ZWM0KGMsYyxjLDEuMCk7fVwiKTtcbmYuY2FsbCh0aGlzLGEuZWRnZVdvcmsxLHtkZWx0YTpbYi90aGlzLndpZHRoLDBdfSk7Zi5jYWxsKHRoaXMsYS5lZGdlV29yazIse2RlbHRhOlswLGIvdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gVihiLGQsYyl7YS5oZXhhZ29uYWxQaXhlbGF0ZT1hLmhleGFnb25hbFBpeGVsYXRlfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgY2VudGVyO3VuaWZvcm0gZmxvYXQgc2NhbGU7dW5pZm9ybSB2ZWMyIHRleFNpemU7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzIgdGV4PSh0ZXhDb29yZCp0ZXhTaXplLWNlbnRlcikvc2NhbGU7dGV4LnkvPTAuODY2MDI1NDA0O3RleC54LT10ZXgueSowLjU7dmVjMiBhO2lmKHRleC54K3RleC55LWZsb29yKHRleC54KS1mbG9vcih0ZXgueSk8MS4wKWE9dmVjMihmbG9vcih0ZXgueCksZmxvb3IodGV4LnkpKTtlbHNlIGE9dmVjMihjZWlsKHRleC54KSxjZWlsKHRleC55KSk7dmVjMiBiPXZlYzIoY2VpbCh0ZXgueCksZmxvb3IodGV4LnkpKTt2ZWMyIGM9dmVjMihmbG9vcih0ZXgueCksY2VpbCh0ZXgueSkpO3ZlYzMgVEVYPXZlYzModGV4LngsdGV4LnksMS4wLXRleC54LXRleC55KTt2ZWMzIEE9dmVjMyhhLngsYS55LDEuMC1hLngtYS55KTt2ZWMzIEI9dmVjMyhiLngsYi55LDEuMC1iLngtYi55KTt2ZWMzIEM9dmVjMyhjLngsYy55LDEuMC1jLngtYy55KTtmbG9hdCBhbGVuPWxlbmd0aChURVgtQSk7ZmxvYXQgYmxlbj1sZW5ndGgoVEVYLUIpO2Zsb2F0IGNsZW49bGVuZ3RoKFRFWC1DKTt2ZWMyIGNob2ljZTtpZihhbGVuPGJsZW4pe2lmKGFsZW48Y2xlbiljaG9pY2U9YTtlbHNlIGNob2ljZT1jO31lbHNle2lmKGJsZW48Y2xlbiljaG9pY2U9YjtlbHNlIGNob2ljZT1jO31jaG9pY2UueCs9Y2hvaWNlLnkqMC41O2Nob2ljZS55Kj0wLjg2NjAyNTQwNDtjaG9pY2UqPXNjYWxlL3RleFNpemU7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLGNob2ljZStjZW50ZXIvdGV4U2l6ZSk7fVwiKTtcbmYuY2FsbCh0aGlzLGEuaGV4YWdvbmFsUGl4ZWxhdGUse2NlbnRlcjpbYixkXSxzY2FsZTpjLHRleFNpemU6W3RoaXMud2lkdGgsdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gVyhiLGQsYyxlKXthLmNvbG9ySGFsZnRvbmU9YS5jb2xvckhhbGZ0b25lfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgY2VudGVyO3VuaWZvcm0gZmxvYXQgYW5nbGU7dW5pZm9ybSBmbG9hdCBzY2FsZTt1bmlmb3JtIHZlYzIgdGV4U2l6ZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7ZmxvYXQgcGF0dGVybihmbG9hdCBhbmdsZSl7ZmxvYXQgcz1zaW4oYW5nbGUpLGM9Y29zKGFuZ2xlKTt2ZWMyIHRleD10ZXhDb29yZCp0ZXhTaXplLWNlbnRlcjt2ZWMyIHBvaW50PXZlYzIoYyp0ZXgueC1zKnRleC55LHMqdGV4LngrYyp0ZXgueSkqc2NhbGU7cmV0dXJuKHNpbihwb2ludC54KSpzaW4ocG9pbnQueSkpKjQuMDt9dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7dmVjMyBjbXk9MS4wLWNvbG9yLnJnYjtmbG9hdCBrPW1pbihjbXkueCxtaW4oY215LnksY215LnopKTtjbXk9KGNteS1rKS8oMS4wLWspO2NteT1jbGFtcChjbXkqMTAuMC0zLjArdmVjMyhwYXR0ZXJuKGFuZ2xlKzAuMjYxNzkpLHBhdHRlcm4oYW5nbGUrMS4zMDg5OSkscGF0dGVybihhbmdsZSkpLDAuMCwxLjApO2s9Y2xhbXAoayoxMC4wLTUuMCtwYXR0ZXJuKGFuZ2xlKzAuNzg1MzkpLDAuMCwxLjApO2dsX0ZyYWdDb2xvcj12ZWM0KDEuMC1jbXktayxjb2xvci5hKTt9XCIpO1xuZi5jYWxsKHRoaXMsYS5jb2xvckhhbGZ0b25lLHtjZW50ZXI6W2IsZF0sYW5nbGU6YyxzY2FsZTpNYXRoLlBJL2UsdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBYKGIpe2EuaW5rPWEuaW5rfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWMyIGR4PXZlYzIoMS4wL3RleFNpemUueCwwLjApO3ZlYzIgZHk9dmVjMigwLjAsMS4wL3RleFNpemUueSk7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7ZmxvYXQgYmlnVG90YWw9MC4wO2Zsb2F0IHNtYWxsVG90YWw9MC4wO3ZlYzMgYmlnQXZlcmFnZT12ZWMzKDAuMCk7dmVjMyBzbWFsbEF2ZXJhZ2U9dmVjMygwLjApO2ZvcihmbG9hdCB4PS0yLjA7eDw9Mi4wO3grPTEuMCl7Zm9yKGZsb2F0IHk9LTIuMDt5PD0yLjA7eSs9MS4wKXt2ZWMzIHNhbXBsZT10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCtkeCp4K2R5KnkpLnJnYjtiaWdBdmVyYWdlKz1zYW1wbGU7YmlnVG90YWwrPTEuMDtpZihhYnMoeCkrYWJzKHkpPDIuMCl7c21hbGxBdmVyYWdlKz1zYW1wbGU7c21hbGxUb3RhbCs9MS4wO319fXZlYzMgZWRnZT1tYXgodmVjMygwLjApLGJpZ0F2ZXJhZ2UvYmlnVG90YWwtc21hbGxBdmVyYWdlL3NtYWxsVG90YWwpO2dsX0ZyYWdDb2xvcj12ZWM0KGNvbG9yLnJnYi1kb3QoZWRnZSxlZGdlKSpzdHJlbmd0aCoxMDAwMDAuMCxjb2xvci5hKTt9XCIpO1xuZi5jYWxsKHRoaXMsYS5pbmsse3N0cmVuZ3RoOmIqYipiKmIqYix0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFkoYixkLGMsZSl7YS5kb3RTY3JlZW49YS5kb3RTY3JlZW58fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gdmVjMiBjZW50ZXI7dW5pZm9ybSBmbG9hdCBhbmdsZTt1bmlmb3JtIGZsb2F0IHNjYWxlO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtmbG9hdCBwYXR0ZXJuKCl7ZmxvYXQgcz1zaW4oYW5nbGUpLGM9Y29zKGFuZ2xlKTt2ZWMyIHRleD10ZXhDb29yZCp0ZXhTaXplLWNlbnRlcjt2ZWMyIHBvaW50PXZlYzIoYyp0ZXgueC1zKnRleC55LHMqdGV4LngrYyp0ZXgueSkqc2NhbGU7cmV0dXJuKHNpbihwb2ludC54KSpzaW4ocG9pbnQueSkpKjQuMDt9dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7ZmxvYXQgYXZlcmFnZT0oY29sb3Iucitjb2xvci5nK2NvbG9yLmIpLzMuMDtnbF9GcmFnQ29sb3I9dmVjNCh2ZWMzKGF2ZXJhZ2UqMTAuMC01LjArcGF0dGVybigpKSxjb2xvci5hKTt9XCIpO1xuZi5jYWxsKHRoaXMsYS5kb3RTY3JlZW4se2NlbnRlcjpbYixkXSxhbmdsZTpjLHNjYWxlOk1hdGguUEkvZSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFooYixkLGMpe2EubWF0cml4V2FycD1hLm1hdHJpeFdhcnB8fHUoXCJ1bmlmb3JtIG1hdDMgbWF0cml4O3VuaWZvcm0gYm9vbCB1c2VUZXh0dXJlU3BhY2U7XCIsXCJpZih1c2VUZXh0dXJlU3BhY2UpY29vcmQ9Y29vcmQvdGV4U2l6ZSoyLjAtMS4wO3ZlYzMgd2FycD1tYXRyaXgqdmVjMyhjb29yZCwxLjApO2Nvb3JkPXdhcnAueHkvd2FycC56O2lmKHVzZVRleHR1cmVTcGFjZSljb29yZD0oY29vcmQqMC41KzAuNSkqdGV4U2l6ZTtcIik7Yj1BcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGIpO2lmKDQ9PWIubGVuZ3RoKWI9XG5bYlswXSxiWzFdLDAsYlsyXSxiWzNdLDAsMCwwLDFdO2Vsc2UgaWYoOSE9Yi5sZW5ndGgpdGhyb3dcImNhbiBvbmx5IHdhcnAgd2l0aCAyeDIgb3IgM3gzIG1hdHJpeFwiO2YuY2FsbCh0aGlzLGEubWF0cml4V2FycCx7bWF0cml4OmQ/eShiKTpiLHRleFNpemU6W3RoaXMud2lkdGgsdGhpcy5oZWlnaHRdLHVzZVRleHR1cmVTcGFjZTpjfDB9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiAkKGIsZCxjLGUpe2Euc3dpcmw9YS5zd2lybHx8dShcInVuaWZvcm0gZmxvYXQgcmFkaXVzO3VuaWZvcm0gZmxvYXQgYW5nbGU7dW5pZm9ybSB2ZWMyIGNlbnRlcjtcIixcImNvb3JkLT1jZW50ZXI7ZmxvYXQgZGlzdGFuY2U9bGVuZ3RoKGNvb3JkKTtpZihkaXN0YW5jZTxyYWRpdXMpe2Zsb2F0IHBlcmNlbnQ9KHJhZGl1cy1kaXN0YW5jZSkvcmFkaXVzO2Zsb2F0IHRoZXRhPXBlcmNlbnQqcGVyY2VudCphbmdsZTtmbG9hdCBzPXNpbih0aGV0YSk7ZmxvYXQgYz1jb3ModGhldGEpO2Nvb3JkPXZlYzIoY29vcmQueCpjLWNvb3JkLnkqcyxjb29yZC54KnMrY29vcmQueSpjKTt9Y29vcmQrPWNlbnRlcjtcIik7XG5mLmNhbGwodGhpcyxhLnN3aXJsLHtyYWRpdXM6YyxjZW50ZXI6W2IsZF0sYW5nbGU6ZSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIGFhKGIsZCxjLGUpe2EuYnVsZ2VQaW5jaD1hLmJ1bGdlUGluY2h8fHUoXCJ1bmlmb3JtIGZsb2F0IHJhZGl1czt1bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO3VuaWZvcm0gdmVjMiBjZW50ZXI7XCIsXCJjb29yZC09Y2VudGVyO2Zsb2F0IGRpc3RhbmNlPWxlbmd0aChjb29yZCk7aWYoZGlzdGFuY2U8cmFkaXVzKXtmbG9hdCBwZXJjZW50PWRpc3RhbmNlL3JhZGl1cztpZihzdHJlbmd0aD4wLjApe2Nvb3JkKj1taXgoMS4wLHNtb290aHN0ZXAoMC4wLHJhZGl1cy9kaXN0YW5jZSxwZXJjZW50KSxzdHJlbmd0aCowLjc1KTt9ZWxzZXtjb29yZCo9bWl4KDEuMCxwb3cocGVyY2VudCwxLjArc3RyZW5ndGgqMC43NSkqcmFkaXVzL2Rpc3RhbmNlLDEuMC1wZXJjZW50KTt9fWNvb3JkKz1jZW50ZXI7XCIpO1xuZi5jYWxsKHRoaXMsYS5idWxnZVBpbmNoLHtyYWRpdXM6YyxzdHJlbmd0aDpxKC0xLGUsMSksY2VudGVyOltiLGRdLHRleFNpemU6W3RoaXMud2lkdGgsdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gYmEoYSxkKXt2YXIgYz14LmFwcGx5KG51bGwsZCksZT14LmFwcGx5KG51bGwsYSksYz15KGMpO3JldHVybiB0aGlzLm1hdHJpeFdhcnAoW2NbMF0qZVswXStjWzFdKmVbM10rY1syXSplWzZdLGNbMF0qZVsxXStjWzFdKmVbNF0rY1syXSplWzddLGNbMF0qZVsyXStjWzFdKmVbNV0rY1syXSplWzhdLGNbM10qZVswXStjWzRdKmVbM10rY1s1XSplWzZdLGNbM10qZVsxXStjWzRdKmVbNF0rY1s1XSplWzddLGNbM10qZVsyXStjWzRdKmVbNV0rY1s1XSplWzhdLGNbNl0qZVswXStjWzddKmVbM10rY1s4XSplWzZdLGNbNl0qZVsxXStjWzddKmVbNF0rY1s4XSplWzddLGNbNl0qZVsyXStjWzddKmVbNV0rY1s4XSplWzhdXSl9dmFyIHY9e307KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShiKXtpZighYi5nZXRFeHRlbnNpb24oXCJPRVNfdGV4dHVyZV9mbG9hdFwiKSlyZXR1cm4hMTtcbnZhciBjPWIuY3JlYXRlRnJhbWVidWZmZXIoKSxlPWIuY3JlYXRlVGV4dHVyZSgpO2IuYmluZFRleHR1cmUoYi5URVhUVVJFXzJELGUpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX01BR19GSUxURVIsYi5ORUFSRVNUKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9NSU5fRklMVEVSLGIuTkVBUkVTVCk7Yi50ZXhQYXJhbWV0ZXJpKGIuVEVYVFVSRV8yRCxiLlRFWFRVUkVfV1JBUF9TLGIuQ0xBTVBfVE9fRURHRSk7Yi50ZXhQYXJhbWV0ZXJpKGIuVEVYVFVSRV8yRCxiLlRFWFRVUkVfV1JBUF9ULGIuQ0xBTVBfVE9fRURHRSk7Yi50ZXhJbWFnZTJEKGIuVEVYVFVSRV8yRCwwLGIuUkdCQSwxLDEsMCxiLlJHQkEsYi5VTlNJR05FRF9CWVRFLG51bGwpO2IuYmluZEZyYW1lYnVmZmVyKGIuRlJBTUVCVUZGRVIsYyk7Yi5mcmFtZWJ1ZmZlclRleHR1cmUyRChiLkZSQU1FQlVGRkVSLGIuQ09MT1JfQVRUQUNITUVOVDAsYi5URVhUVVJFXzJELFxuZSwwKTtjPWIuY3JlYXRlVGV4dHVyZSgpO2IuYmluZFRleHR1cmUoYi5URVhUVVJFXzJELGMpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX01BR19GSUxURVIsYi5MSU5FQVIpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX01JTl9GSUxURVIsYi5MSU5FQVIpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX1dSQVBfUyxiLkNMQU1QX1RPX0VER0UpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX1dSQVBfVCxiLkNMQU1QX1RPX0VER0UpO2IudGV4SW1hZ2UyRChiLlRFWFRVUkVfMkQsMCxiLlJHQkEsMiwyLDAsYi5SR0JBLGIuRkxPQVQsbmV3IEZsb2F0MzJBcnJheShbMiwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0pKTt2YXIgZT1iLmNyZWF0ZVByb2dyYW0oKSxkPWIuY3JlYXRlU2hhZGVyKGIuVkVSVEVYX1NIQURFUiksZz1iLmNyZWF0ZVNoYWRlcihiLkZSQUdNRU5UX1NIQURFUik7XG5iLnNoYWRlclNvdXJjZShkLFwiYXR0cmlidXRlIHZlYzIgdmVydGV4O3ZvaWQgbWFpbigpe2dsX1Bvc2l0aW9uPXZlYzQodmVydGV4LDAuMCwxLjApO31cIik7Yi5zaGFkZXJTb3VyY2UoZyxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dm9pZCBtYWluKCl7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHZlYzIoMC41KSk7fVwiKTtiLmNvbXBpbGVTaGFkZXIoZCk7Yi5jb21waWxlU2hhZGVyKGcpO2IuYXR0YWNoU2hhZGVyKGUsZCk7Yi5hdHRhY2hTaGFkZXIoZSxnKTtiLmxpbmtQcm9ncmFtKGUpO2Q9Yi5jcmVhdGVCdWZmZXIoKTtiLmJpbmRCdWZmZXIoYi5BUlJBWV9CVUZGRVIsZCk7Yi5idWZmZXJEYXRhKGIuQVJSQVlfQlVGRkVSLG5ldyBGbG9hdDMyQXJyYXkoWzAsMF0pLGIuU1RSRUFNX0RSQVcpO2IuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG5iLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwyLGIuRkxPQVQsITEsMCwwKTtkPW5ldyBVaW50OEFycmF5KDQpO2IudXNlUHJvZ3JhbShlKTtiLnZpZXdwb3J0KDAsMCwxLDEpO2IuYmluZFRleHR1cmUoYi5URVhUVVJFXzJELGMpO2IuZHJhd0FycmF5cyhiLlBPSU5UUywwLDEpO2IucmVhZFBpeGVscygwLDAsMSwxLGIuUkdCQSxiLlVOU0lHTkVEX0JZVEUsZCk7cmV0dXJuIDEyNz09PWRbMF18fDEyOD09PWRbMF19ZnVuY3Rpb24gZCgpe31mdW5jdGlvbiBjKGEpe1wiT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXCI9PT1hPyh2b2lkIDA9PT10aGlzLiRPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXIkJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIiRPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXIkXCIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHdyaXRhYmxlOiExLHZhbHVlOm5ldyBkfSksYT10aGlzLiRPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXIkKTphPWwuY2FsbCh0aGlzLGEpO3JldHVybiBhfVxuZnVuY3Rpb24gZSgpe3ZhciBhPWYuY2FsbCh0aGlzKTstMT09PWEuaW5kZXhPZihcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiKSYmYS5wdXNoKFwiT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXCIpO3JldHVybiBhfXRyeXt2YXIgZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIil9Y2F0Y2gobil7fWlmKGcmJi0xPT09Zy5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKCkuaW5kZXhPZihcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiKSYmYShnKSl7dmFyIGw9V2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZS5nZXRFeHRlbnNpb24sZj1XZWJHTFJlbmRlcmluZ0NvbnRleHQucHJvdG90eXBlLmdldFN1cHBvcnRlZEV4dGVuc2lvbnM7V2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZS5nZXRFeHRlbnNpb249YztXZWJHTFJlbmRlcmluZ0NvbnRleHQucHJvdG90eXBlLmdldFN1cHBvcnRlZEV4dGVuc2lvbnM9ZX19KSgpO1xudmFyIGE7di5jYW52YXM9ZnVuY3Rpb24oKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3RyeXthPWIuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiLHtwcmVtdWx0aXBsaWVkQWxwaGE6ITF9KX1jYXRjaChkKXthPW51bGx9aWYoIWEpdGhyb3dcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYkdMXCI7Yi5fPXtnbDphLGlzSW5pdGlhbGl6ZWQ6ITEsdGV4dHVyZTpudWxsLHNwYXJlVGV4dHVyZTpudWxsLGZsaXBwZWRTaGFkZXI6bnVsbH07Yi50ZXh0dXJlPWsoQSk7Yi5kcmF3PWsoQyk7Yi51cGRhdGU9ayhEKTtiLnJlcGxhY2U9ayhFKTtiLmNvbnRlbnRzPWsoRik7Yi5nZXRQaXhlbEFycmF5PWsoRyk7Yi5icmlnaHRuZXNzQ29udHJhc3Q9ayhMKTtiLmhleGFnb25hbFBpeGVsYXRlPWsoVik7Yi5odWVTYXR1cmF0aW9uPWsoUCk7Yi5jb2xvckhhbGZ0b25lPWsoVyk7Yi50cmlhbmdsZUJsdXI9ayhUKTtiLnVuc2hhcnBNYXNrPWsoTik7Yi5wZXJzcGVjdGl2ZT1cbmsoYmEpO2IubWF0cml4V2FycD1rKFopO2IuYnVsZ2VQaW5jaD1rKGFhKTtiLnRpbHRTaGlmdD1rKFIpO2IuZG90U2NyZWVuPWsoWSk7Yi5lZGdlV29yaz1rKFUpO2IubGVuc0JsdXI9ayhTKTtiLnpvb21CbHVyPWsoUSk7Yi5ub2lzZT1rKEgpO2IuZGVub2lzZT1rKEspO2IuY3VydmVzPWsoTSk7Yi5zd2lybD1rKCQpO2IuaW5rPWsoWCk7Yi52aWduZXR0ZT1rKEopO2IudmlicmFuY2U9ayhJKTtiLnNlcGlhPWsoTyk7cmV0dXJuIGJ9O3Yuc3BsaW5lSW50ZXJwb2xhdGU9dDt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQsbCl7dGhpcy5nbD1hO3RoaXMuaWQ9YS5jcmVhdGVUZXh0dXJlKCk7dGhpcy53aWR0aD1iO3RoaXMuaGVpZ2h0PWM7dGhpcy5mb3JtYXQ9ZDt0aGlzLnR5cGU9bDthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCx0aGlzLmlkKTthLnRleFBhcmFtZXRlcmkoYS5URVhUVVJFXzJELGEuVEVYVFVSRV9NQUdfRklMVEVSLGEuTElORUFSKTthLnRleFBhcmFtZXRlcmkoYS5URVhUVVJFXzJELFxuYS5URVhUVVJFX01JTl9GSUxURVIsYS5MSU5FQVIpO2EudGV4UGFyYW1ldGVyaShhLlRFWFRVUkVfMkQsYS5URVhUVVJFX1dSQVBfUyxhLkNMQU1QX1RPX0VER0UpO2EudGV4UGFyYW1ldGVyaShhLlRFWFRVUkVfMkQsYS5URVhUVVJFX1dSQVBfVCxhLkNMQU1QX1RPX0VER0UpO2ImJmMmJmEudGV4SW1hZ2UyRChhLlRFWFRVUkVfMkQsMCx0aGlzLmZvcm1hdCxiLGMsMCx0aGlzLmZvcm1hdCx0aGlzLnR5cGUsbnVsbCl9ZnVuY3Rpb24gZChhKXtudWxsPT1jJiYoYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpKTtjLndpZHRoPWEud2lkdGg7Yy5oZWlnaHQ9YS5oZWlnaHQ7YT1jLmdldENvbnRleHQoXCIyZFwiKTthLmNsZWFyUmVjdCgwLDAsYy53aWR0aCxjLmhlaWdodCk7cmV0dXJuIGF9Yi5mcm9tRWxlbWVudD1mdW5jdGlvbihjKXt2YXIgZD1uZXcgYigwLDAsYS5SR0JBLGEuVU5TSUdORURfQllURSk7ZC5sb2FkQ29udGVudHNPZihjKTtyZXR1cm4gZH07Yi5wcm90b3R5cGUubG9hZENvbnRlbnRzT2Y9XG5mdW5jdGlvbihiKXt0aGlzLndpZHRoPWIud2lkdGh8fGIudmlkZW9XaWR0aDt0aGlzLmhlaWdodD1iLmhlaWdodHx8Yi52aWRlb0hlaWdodDthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCx0aGlzLmlkKTthLnRleEltYWdlMkQoYS5URVhUVVJFXzJELDAsdGhpcy5mb3JtYXQsdGhpcy5mb3JtYXQsdGhpcy50eXBlLGIpfTtiLnByb3RvdHlwZS5pbml0RnJvbUJ5dGVzPWZ1bmN0aW9uKGIsYyxkKXt0aGlzLndpZHRoPWI7dGhpcy5oZWlnaHQ9Yzt0aGlzLmZvcm1hdD1hLlJHQkE7dGhpcy50eXBlPWEuVU5TSUdORURfQllURTthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCx0aGlzLmlkKTthLnRleEltYWdlMkQoYS5URVhUVVJFXzJELDAsYS5SR0JBLGIsYywwLGEuUkdCQSx0aGlzLnR5cGUsbmV3IFVpbnQ4QXJyYXkoZCkpfTtiLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7YS5kZWxldGVUZXh0dXJlKHRoaXMuaWQpO3RoaXMuaWQ9bnVsbH07Yi5wcm90b3R5cGUudXNlPWZ1bmN0aW9uKGIpe2EuYWN0aXZlVGV4dHVyZShhLlRFWFRVUkUwK1xuKGJ8fDApKTthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCx0aGlzLmlkKX07Yi5wcm90b3R5cGUudW51c2U9ZnVuY3Rpb24oYil7YS5hY3RpdmVUZXh0dXJlKGEuVEVYVFVSRTArKGJ8fDApKTthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCxudWxsKX07Yi5wcm90b3R5cGUuZW5zdXJlRm9ybWF0PWZ1bmN0aW9uKGIsYyxkLGwpe2lmKDE9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBmPWFyZ3VtZW50c1swXTtiPWYud2lkdGg7Yz1mLmhlaWdodDtkPWYuZm9ybWF0O2w9Zi50eXBlfWlmKGIhPXRoaXMud2lkdGh8fGMhPXRoaXMuaGVpZ2h0fHxkIT10aGlzLmZvcm1hdHx8bCE9dGhpcy50eXBlKXRoaXMud2lkdGg9Yix0aGlzLmhlaWdodD1jLHRoaXMuZm9ybWF0PWQsdGhpcy50eXBlPWwsYS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsdGhpcy5pZCksYS50ZXhJbWFnZTJEKGEuVEVYVFVSRV8yRCwwLHRoaXMuZm9ybWF0LGIsYywwLHRoaXMuZm9ybWF0LHRoaXMudHlwZSxudWxsKX07Yi5wcm90b3R5cGUuZHJhd1RvPVxuZnVuY3Rpb24oYil7YS5mcmFtZWJ1ZmZlcj1hLmZyYW1lYnVmZmVyfHxhLmNyZWF0ZUZyYW1lYnVmZmVyKCk7YS5iaW5kRnJhbWVidWZmZXIoYS5GUkFNRUJVRkZFUixhLmZyYW1lYnVmZmVyKTthLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGEuRlJBTUVCVUZGRVIsYS5DT0xPUl9BVFRBQ0hNRU5UMCxhLlRFWFRVUkVfMkQsdGhpcy5pZCwwKTtpZihhLmNoZWNrRnJhbWVidWZmZXJTdGF0dXMoYS5GUkFNRUJVRkZFUikhPT1hLkZSQU1FQlVGRkVSX0NPTVBMRVRFKXRocm93IEVycm9yKFwiaW5jb21wbGV0ZSBmcmFtZWJ1ZmZlclwiKTthLnZpZXdwb3J0KDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KTtiKCk7YS5iaW5kRnJhbWVidWZmZXIoYS5GUkFNRUJVRkZFUixudWxsKX07dmFyIGM9bnVsbDtiLnByb3RvdHlwZS5maWxsVXNpbmdDYW52YXM9ZnVuY3Rpb24oYil7YihkKHRoaXMpKTt0aGlzLmZvcm1hdD1hLlJHQkE7dGhpcy50eXBlPWEuVU5TSUdORURfQllURTthLmJpbmRUZXh0dXJlKGEuVEVYVFVSRV8yRCxcbnRoaXMuaWQpO2EudGV4SW1hZ2UyRChhLlRFWFRVUkVfMkQsMCxhLlJHQkEsYS5SR0JBLGEuVU5TSUdORURfQllURSxjKTtyZXR1cm4gdGhpc307Yi5wcm90b3R5cGUudG9JbWFnZT1mdW5jdGlvbihiKXt0aGlzLnVzZSgpO2guZ2V0RGVmYXVsdFNoYWRlcigpLmRyYXdSZWN0KCk7dmFyIGc9NCp0aGlzLndpZHRoKnRoaXMuaGVpZ2h0LGY9bmV3IFVpbnQ4QXJyYXkoZyksbD1kKHRoaXMpLHA9bC5jcmVhdGVJbWFnZURhdGEodGhpcy53aWR0aCx0aGlzLmhlaWdodCk7YS5yZWFkUGl4ZWxzKDAsMCx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0LGEuUkdCQSxhLlVOU0lHTkVEX0JZVEUsZik7Zm9yKHZhciBtPTA7bTxnO20rKylwLmRhdGFbbV09ZlttXTtsLnB1dEltYWdlRGF0YShwLDAsMCk7Yi5zcmM9Yy50b0RhdGFVUkwoKX07Yi5wcm90b3R5cGUuc3dhcFdpdGg9ZnVuY3Rpb24oYSl7dmFyIGI7Yj1hLmlkO2EuaWQ9dGhpcy5pZDt0aGlzLmlkPWI7Yj1hLndpZHRoO2Eud2lkdGg9dGhpcy53aWR0aDtcbnRoaXMud2lkdGg9YjtiPWEuaGVpZ2h0O2EuaGVpZ2h0PXRoaXMuaGVpZ2h0O3RoaXMuaGVpZ2h0PWI7Yj1hLmZvcm1hdDthLmZvcm1hdD10aGlzLmZvcm1hdDt0aGlzLmZvcm1hdD1ifTtyZXR1cm4gYn0oKTt6LnByb3RvdHlwZS5pbnRlcnBvbGF0ZT1mdW5jdGlvbihhKXtmb3IodmFyIGQ9MCxjPXRoaXMueWEubGVuZ3RoLTE7MTxjLWQ7KXt2YXIgZT1jK2Q+PjE7dGhpcy54YVtlXT5hP2M9ZTpkPWV9dmFyIGU9dGhpcy54YVtjXS10aGlzLnhhW2RdLGc9KHRoaXMueGFbY10tYSkvZTthPShhLXRoaXMueGFbZF0pL2U7cmV0dXJuIGcqdGhpcy55YVtkXSthKnRoaXMueWFbY10rKChnKmcqZy1nKSp0aGlzLnkyW2RdKyhhKmEqYS1hKSp0aGlzLnkyW2NdKSplKmUvNn07dmFyIGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyl7dmFyIGQ9YS5jcmVhdGVTaGFkZXIoYik7YS5zaGFkZXJTb3VyY2UoZCxjKTthLmNvbXBpbGVTaGFkZXIoZCk7aWYoIWEuZ2V0U2hhZGVyUGFyYW1ldGVyKGQsYS5DT01QSUxFX1NUQVRVUykpdGhyb3dcImNvbXBpbGUgZXJyb3I6IFwiK1xuYS5nZXRTaGFkZXJJbmZvTG9nKGQpO3JldHVybiBkfWZ1bmN0aW9uIGQoZCxmKXt0aGlzLnRleENvb3JkQXR0cmlidXRlPXRoaXMudmVydGV4QXR0cmlidXRlPW51bGw7dGhpcy5wcm9ncmFtPWEuY3JlYXRlUHJvZ3JhbSgpO2Q9ZHx8YztmPWZ8fGU7Zj1cInByZWNpc2lvbiBoaWdocCBmbG9hdDtcIitmO2EuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSxiKGEuVkVSVEVYX1NIQURFUixkKSk7YS5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLGIoYS5GUkFHTUVOVF9TSEFERVIsZikpO2EubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtpZighYS5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSxhLkxJTktfU1RBVFVTKSl0aHJvd1wibGluayBlcnJvcjogXCIrYS5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pO312YXIgYz1cImF0dHJpYnV0ZSB2ZWMyIHZlcnRleDthdHRyaWJ1dGUgdmVjMiBfdGV4Q29vcmQ7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3RleENvb3JkPV90ZXhDb29yZDtnbF9Qb3NpdGlvbj12ZWM0KHZlcnRleCoyLjAtMS4wLDAuMCwxLjApO31cIixcbmU9XCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXtnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO31cIjtkLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7YS5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7dGhpcy5wcm9ncmFtPW51bGx9O2QucHJvdG90eXBlLnVuaWZvcm1zPWZ1bmN0aW9uKGIpe2EudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPWEuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSxjKTtpZihudWxsIT09ZCl7dmFyIGU9YltjXTtpZihcIltvYmplY3QgQXJyYXldXCI9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlzd2l0Y2goZS5sZW5ndGgpe2Nhc2UgMTphLnVuaWZvcm0xZnYoZCxuZXcgRmxvYXQzMkFycmF5KGUpKTticmVhaztcbmNhc2UgMjphLnVuaWZvcm0yZnYoZCxuZXcgRmxvYXQzMkFycmF5KGUpKTticmVhaztjYXNlIDM6YS51bmlmb3JtM2Z2KGQsbmV3IEZsb2F0MzJBcnJheShlKSk7YnJlYWs7Y2FzZSA0OmEudW5pZm9ybTRmdihkLG5ldyBGbG9hdDMyQXJyYXkoZSkpO2JyZWFrO2Nhc2UgOTphLnVuaWZvcm1NYXRyaXgzZnYoZCwhMSxuZXcgRmxvYXQzMkFycmF5KGUpKTticmVhaztjYXNlIDE2OmEudW5pZm9ybU1hdHJpeDRmdihkLCExLG5ldyBGbG9hdDMyQXJyYXkoZSkpO2JyZWFrO2RlZmF1bHQ6dGhyb3dcImRvbnQndCBrbm93IGhvdyB0byBsb2FkIHVuaWZvcm0gXFxcIlwiK2MrJ1wiIG9mIGxlbmd0aCAnK2UubGVuZ3RoO31lbHNlIGlmKFwiW29iamVjdCBOdW1iZXJdXCI9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlhLnVuaWZvcm0xZihkLGUpO2Vsc2UgdGhyb3cnYXR0ZW1wdGVkIHRvIHNldCB1bmlmb3JtIFwiJytjKydcIiB0byBpbnZhbGlkIHZhbHVlICcrKGV8fFwidW5kZWZpbmVkXCIpLnRvU3RyaW5nKCk7XG59fXJldHVybiB0aGlzfTtkLnByb3RvdHlwZS50ZXh0dXJlcz1mdW5jdGlvbihiKXthLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtmb3IodmFyIGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZhLnVuaWZvcm0xaShhLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sYyksYltjXSk7cmV0dXJuIHRoaXN9O2QucHJvdG90eXBlLmRyYXdSZWN0PWZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmPWEuZ2V0UGFyYW1ldGVyKGEuVklFV1BPUlQpO2M9dm9pZCAwIT09Yz8oYy1mWzFdKS9mWzNdOjA7Yj12b2lkIDAhPT1iPyhiLWZbMF0pL2ZbMl06MDtkPXZvaWQgMCE9PWQ/KGQtZlswXSkvZlsyXToxO2U9dm9pZCAwIT09ZT8oZS1mWzFdKS9mWzNdOjE7bnVsbD09YS52ZXJ0ZXhCdWZmZXImJihhLnZlcnRleEJ1ZmZlcj1hLmNyZWF0ZUJ1ZmZlcigpKTthLmJpbmRCdWZmZXIoYS5BUlJBWV9CVUZGRVIsYS52ZXJ0ZXhCdWZmZXIpO2EuYnVmZmVyRGF0YShhLkFSUkFZX0JVRkZFUixuZXcgRmxvYXQzMkFycmF5KFtiLFxuYyxiLGUsZCxjLGQsZV0pLGEuU1RBVElDX0RSQVcpO251bGw9PWEudGV4Q29vcmRCdWZmZXImJihhLnRleENvb3JkQnVmZmVyPWEuY3JlYXRlQnVmZmVyKCksYS5iaW5kQnVmZmVyKGEuQVJSQVlfQlVGRkVSLGEudGV4Q29vcmRCdWZmZXIpLGEuYnVmZmVyRGF0YShhLkFSUkFZX0JVRkZFUixuZXcgRmxvYXQzMkFycmF5KFswLDAsMCwxLDEsMCwxLDFdKSxhLlNUQVRJQ19EUkFXKSk7bnVsbD09dGhpcy52ZXJ0ZXhBdHRyaWJ1dGUmJih0aGlzLnZlcnRleEF0dHJpYnV0ZT1hLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSxcInZlcnRleFwiKSxhLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMudmVydGV4QXR0cmlidXRlKSk7bnVsbD09dGhpcy50ZXhDb29yZEF0dHJpYnV0ZSYmKHRoaXMudGV4Q29vcmRBdHRyaWJ1dGU9YS5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sXCJfdGV4Q29vcmRcIiksYS5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRleENvb3JkQXR0cmlidXRlKSk7XG5hLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTthLmJpbmRCdWZmZXIoYS5BUlJBWV9CVUZGRVIsYS52ZXJ0ZXhCdWZmZXIpO2EudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnZlcnRleEF0dHJpYnV0ZSwyLGEuRkxPQVQsITEsMCwwKTthLmJpbmRCdWZmZXIoYS5BUlJBWV9CVUZGRVIsYS50ZXhDb29yZEJ1ZmZlcik7YS52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudGV4Q29vcmRBdHRyaWJ1dGUsMixhLkZMT0FULCExLDAsMCk7YS5kcmF3QXJyYXlzKGEuVFJJQU5HTEVfU1RSSVAsMCw0KX07ZC5nZXREZWZhdWx0U2hhZGVyPWZ1bmN0aW9uKCl7YS5kZWZhdWx0U2hhZGVyPWEuZGVmYXVsdFNoYWRlcnx8bmV3IGQ7cmV0dXJuIGEuZGVmYXVsdFNoYWRlcn07cmV0dXJuIGR9KCkscz1cImZsb2F0IHJhbmRvbSh2ZWMzIHNjYWxlLGZsb2F0IHNlZWQpe3JldHVybiBmcmFjdChzaW4oZG90KGdsX0ZyYWdDb29yZC54eXorc2VlZCxzY2FsZSkpKjQzNzU4LjU0NTMrc2VlZCk7fVwiO1xucmV0dXJuIHZ9KCk7XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9Zng6d2luZG93LmZ4PWZ4O1xuIiwidmFyIHJBRl9Qb2x5ZmlsbHMgPSByZXF1aXJlKCcuL3JBRlBvbHlmaWxsJyk7XG52YXIgckFGID0gckFGX1BvbHlmaWxscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG52YXIgY0FGID0gckFGX1BvbHlmaWxscy5jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuLyoqXG4gKiBUaGUgYW5pbWF0aW9uIGxvb3AgcHJvdmlkZXMgYSB3cmFwcGVyIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYW5kIGFcbiAqIHJlaW1wbGVtZW50YXRpb24gb2YgYnJvd3NlciB0aW1lcnMuIEl0IGNhbiBzY2hlZHVsZSBtdWx0aXBsZSBjYWxsYmFja3NcbiAqIGFuZCBoZWxwIG1heGltaXplIHBlcmZvcm1hbmNlIGZvciBpbiBicm93c2VyIGFuaW1hdGlvbnMuXG4gKiBcbiAqIEBjbGFzcyBBbmltYXRpb25Mb29wXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQW5pbWF0aW9uTG9vcCgpe1xuICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgdGhpcy5fYW5pbWF0aW9ucyA9IFtdO1xuICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gIHRoaXMuX3RpbWUgPSAwO1xufVxuXG4vKipcbiAqIEludGVybmFsIG1haW4gY2FsbGJhY2sgbWV0aG9kIHRoYXQgaXMgcGFzc2VkIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZSBcbiAqIGFuZCBoYW5kbGVzIGNhbGxpbmcgYWxsIHNjaGVkdWxlZCBhbmltYXRpb25zLiBDb3BpZXMgYW5pbWF0aW9ucyBhcnJheSBcbiAqIGJlZm9yZSBjYWxsaW5nIGFuaW1hdGlvbiBjYWxsYmFja3Mgc28gaXRlbXMgY2FuIGJlIHNhZmVseSByZW1vdmVkIG1pZHdheSBcbiAqIHRocm91Z2ggYSBsb29wIGN5Y2xlLiBcbiAqIFxuICogQG1ldGhvZFxuICogQHByaXZhdGVcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdGltZSAtIHRpbWUgaGlnaCByZXNvbHV0aW9uIHRpbXN0YW1wIFxuICpcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9IHVuZGVmaW5lZFxuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLl91cGRhdGVMb29wID0gZnVuY3Rpb24gX3VwZGF0ZUxvb3AodGltZSl7IFxuICB0aGlzLl90aW1lID0gdGltZTtcbiAgLy8gbWFrZSBhIGNvcHkgc28gYW5pbWF0aW9ucyBjYW4gYmUgcmVtb3ZlZCBkdXJpbmcgbG9vcFxuICB0aGlzLl9hbmltYXRpb25zID0gdGhpcy5hbmltYXRpb25zLnNsaWNlKCk7XG4gIHdoaWxlKHRoaXMuX2FuaW1hdGlvbnMubGVuZ3RoKXtcbiAgICAvLyBwb3AgYW5pbWF0aW9ucyBvZmYgYW5kIGNhbGwgZWFjaCBhbmltYXRpb24gcGFzc2luIGluIHRpbWVcbiAgICB0aGlzLl9hbmltYXRpb25zLnBvcCgpKHRpbWUpO1xuICB9XG4gIC8vc3RvcmUgcmVmZXJlbmNlIHNvIHdlIGNhbiBjYW5jZWwgaXQgbGF0ZXJcbiAgdGhpcy5fckFGID0gckFGKHRoaXMudXBkYXRlTG9vcCk7XG59XG5cbi8qKlxuICogU3RhcnRzIHRoZSBtYWluIGFuaW1hdGlvbiBsb29wIGFuZCBwcmV2ZW50cyBtdWx0aXBsZSB1cGRhdGVzIHRvIFxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEByZXR1cm5zIHtBbmltYXRpb25Mb29wfSB0aGlzXG4qL1xuQW5pbWF0aW9uTG9vcC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpe1xuICBpZighdGhpcy5pc1J1bm5pbmcpe1xuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUxvb3AgPSB0aGlzLl91cGRhdGVMb29wLmJpbmQodGhpcyk7XG4gICAgckFGKHRoaXMudXBkYXRlTG9vcCk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0b3BzIHRoZSBtYWluIGFuaW1hdGlvbiBsb29wIGJ5IGNhbGxpbmcgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIFxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEByZXR1cm5zIHtBbmltYXRpb25Mb29wfSB0aGlzXG4qL1xuQW5pbWF0aW9uTG9vcC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKXtcbiAgaWYodGhpcy5pc1J1bm5pbmcpe1xuICAgIGNBRih0aGlzLl9yQUYpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGEgY2FsbGJhY2sgdG8gdGhlIHVwZGF0ZSBsb29wIGFuZCBwcmV2ZW50cyB0aGUgc2FtZSBjYWxsYmFjayBmcm9tIGJlaW5nIFxuICogYWRkZWQgdHdpY2UuIFxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFuaW1hdGlvbiAtIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgbWFpbiB1cGRhdGUgbG9vcC4gIFxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYW5pbWF0aW9uIGNhbGxiYWNrIHBhc3NlZCBpblxuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLmFkZEFuaW1hdGlvbiA9IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihhbmltYXRpb24pe1xuICBpZiAodHlwZW9mIGFuaW1hdGlvbiA9PT0gXCJmdW5jdGlvblwiICYmIHRoaXMuYW5pbWF0aW9ucy5pbmRleE9mKGFuaW1hdGlvbikgPT09IC0xKSB7XG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGEgY2FsbGJhY2sgZnJvbSB0aGUgY3VycmVudCB1cGRhdGUgbG9vcCBhbmQgbmV4dCBzY2hlZHVsZWQgbG9vcC4gXG4gKiBcbiAqIEBtZXRob2QgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYW5pbWF0aW9uIC0gY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIHVwZGF0ZSBsb29wLiAgXG4gKlxuICogQHJldHVybnMge3VuZGVmaW5lZH0gdW5kZWZpbmVkXG4qL1xuQW5pbWF0aW9uTG9vcC5wcm90b3R5cGUucmVtb3ZlQW5pbWF0aW9uID0gZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbikge1xuICB2YXIgaW5kZXggPSB0aGlzLmFuaW1hdGlvbnMuaW5kZXhPZihhbmltYXRpb24pO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5hbmltYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgaW5kZXggPSB0aGlzLl9hbmltYXRpb25zLmluZGV4T2YoYW5pbWF0aW9uKTtcbiAgLy8gcmVtb3ZlIGFuaW1hdGlvbiBpZiBtaWR3YXkgdGhyb3VnaCBsb29wXG4gIGlmKGluZGV4ICE9PSAtMSl7XG4gICAgdGhpcy5fYW5pbWF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKipcbiAqIE1pbWljcyBicm93c2VyJ3Mgc2V0VGltZW91dCBiYXNpYyBmdW5jdGlvbmFsaXR5LiBQcmV2ZW50cyBicm93c2VyIHRpbWVyIGZyb20gXG4gKiBkZWdyYWRpbmcgcGVyZm9ybWFuY2Ugb2YgdGhlIG1haW4gdXBkYXRlIGxvb3AuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIG92ZXJcbiAqIHNldFRpbWVvdXQgYWZ0ZXIgYC5zdGFydCgpYCBoYXMgYmVlbiBjYWxsZWQuIFxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFuaW1hdGlvbiAtIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHRpbWVyIGV4cGlyZXMuIFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gVGhlIHRpbWUsIGluIG1pbGxpc2Vjb25kcyAodGhvdXNhbmR0aHMgb2YgYSBzZWNvbmQpLCB0aGUgdGltZXIgXG4gKiBzaG91bGQgd2FpdCBiZWZvcmUgdGhlIHNwZWNpZmllZCBmdW5jdGlvbiBpcyBleGVjdXRlZC4gXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aW1lb3V0IGNhbGxiYWNrIHJldHVybmVkIHNvIGl0IGNhbiBiZSBjYW5jZWxlZCB2aWEgYHJlbW92ZUFuaW1hdGlvbigpYFxuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLnNldEFuaW1hdGlvblRpbWVvdXQgPSBmdW5jdGlvbiBzZXRBbmltYXRpb25UaW1lb3V0KGFuaW1hdGlvbiwgZGVsYXkpe1xuICB2YXIgc3RhcnRUaW1lID0gdGhpcy5fdGltZTtcbiAgdmFyIGFuaW1Mb29wID0gdGhpcztcbiAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKGZ1bmN0aW9uIHRpbWVvdXRBbmltYXRpb24odGltZSl7XG4gICAgaWYodGltZSAtIHN0YXJ0VGltZSA+PSBkZWxheSl7XG4gICAgICBhbmltYXRpb24oKTtcbiAgICAgIGFuaW1Mb29wLnJlbW92ZUFuaW1hdGlvbih0aW1lb3V0QW5pbWF0aW9uKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIE1pbWljcyBicm93c2VyJ3Mgc2V0SW50ZXJ2YWwgYmFzaWMgZnVuY3Rpb25hbGl0eS4gUHJldmVudHMgYnJvd3NlciB0aW1lciBmcm9tIFxuICogZGVncmFkaW5nIHBlcmZvcm1hbmNlIG9mIHRoZSBtYWluIHVwZGF0ZSBsb29wLiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBvdmVyXG4gKiBzZXRJbnRlcm5hbCBhZnRlciBgLnN0YXJ0KClgIGhhcyBiZWVuIGNhbGxlZC4gXG4gKiBcbiAqIEBtZXRob2QgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gYW5pbWF0aW9uIC0gQSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCBldmVyeSBgZGVsYXlgIG1pbGxpc2Vjb25kcy4gXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgLSBUaGUgdGltZSwgaW4gbWlsbGlzZWNvbmRzICh0aG91c2FuZHRocyBvZiBhIHNlY29uZCksIHRoZSB0aW1lciBcbiAqIHNob3VsZCBkZWxheSBpbiBiZXR3ZWVuIGV4ZWN1dGlvbnMgb2YgdGhlIHNwZWNpZmllZCBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGludGVydmFsIGNhbGxiYWNrIHJldHVybmVkIHNvIGl0IGNhbiBiZSBjYW5jZWxlZCB2aWEgYHJlbW92ZUFuaW1hdGlvbigpYFxuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLnNldEFuaW1hdGlvbkludGVydmFsID0gZnVuY3Rpb24gc2V0QW5pbWF0aW9uSW50ZXJ2YWwoYW5pbWF0aW9uLCBpbnRlcnZhbCl7XG4gIHZhciBzdGFydFRpbWUgPSB0aGlzLl90aW1lO1xuICB2YXIgYW5pbUxvb3AgPSB0aGlzO1xuICByZXR1cm4gdGhpcy5hZGRBbmltYXRpb24oZnVuY3Rpb24gaW50ZXJ2YWxBbmltYXRpb24odGltZSl7XG4gICAgaWYodGltZSAtIHN0YXJ0VGltZSA+PSBpbnRlcnZhbCl7XG4gICAgICBhbmltYXRpb24oKTtcbiAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgfVxuICB9KTtcbn1cblxuLypcbiogR2V0IHRoZSBjdXJyZW50IFtoaWdoIHJlc29sdXRpb24gdGltZXN0YW1wXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSGlnaFJlc1RpbWVTdGFtcCkuXG4qXG4qIEBtZXRob2RcbipcbiogQHJldHVybnMge051bWJlcn0gaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcFxuKi9cblxuQW5pbWF0aW9uTG9vcC5wcm90b3R5cGUuZ2V0VGltZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLl90aW1lXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQW5pbWF0aW9uTG9vcDtcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBNSVQgbGljZW5zZVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBsYXN0VGltZSA9IDA7XG52YXIgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG5cbnZhciByQUYsIGNBRjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgckFGID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICBjQUYgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LmNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICFyQUY7ICsreCkge1xuICAgICAgICByQUYgPSB3aW5kb3dbdmVuZG9yc1t4XSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgY0FGID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gfHxcbiAgICAgICAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcbiAgICB9XG5cbiAgICBpZiAockFGICYmICFjQUYpIHtcbiAgICAgICAgLy8gY0FGIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBzZXRJbnRlcnZhbCBmb3Igbm93ICh2ZXJ5IHJhcmUpLlxuICAgICAgICByQUYgPSBudWxsO1xuICAgIH1cbn1cblxuaWYgKCFyQUYpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3cgPyBEYXRlLm5vdyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH07XG5cbiAgICByQUYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBub3coKTtcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICAgIHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIGNBRiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59XG5cbnZhciBhbmltYXRpb25GcmFtZSA9IHtcbiAgICAvKipcbiAgICAgKiBDcm9zcyBicm93c2VyIHZlcnNpb24gb2YgW3JlcXVlc3RBbmltYXRpb25GcmFtZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWV9LlxuICAgICAqXG4gICAgICogVXNlZCBieSBFbmdpbmUgaW4gb3JkZXIgdG8gZXN0YWJsaXNoIGEgcmVuZGVyIGxvb3AuXG4gICAgICpcbiAgICAgKiBJZiBubyAodmVuZG9yIHByZWZpeGVkIHZlcnNpb24gb2YpIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGlzIGF2YWlsYWJsZSxcbiAgICAgKiBgc2V0VGltZW91dGAgd2lsbCBiZSB1c2VkIGluIG9yZGVyIHRvIGVtdWxhdGUgYSByZW5kZXIgbG9vcCBydW5uaW5nIGF0XG4gICAgICogYXBwcm94aW1hdGVseSA2MCBmcmFtZXMgcGVyIHNlY29uZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge0Z1bmN0aW9ufSAgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbiB0aGUgbmV4dCBmcmFtZS5cbiAgICAgKiBAcmV0dXJuICB7TnVtYmVyfSAgICByZXF1ZXN0SWQgdG8gYmUgdXNlZCB0byBjYW5jZWwgdGhlIHJlcXVlc3QgdXNpbmdcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICB7QGxpbmsgY2FuY2VsQW5pbWF0aW9uRnJhbWV9LlxuICAgICAqL1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogckFGLFxuXG4gICAgLyoqXG4gICAgICogQ3Jvc3MgYnJvd3NlciB2ZXJzaW9uIG9mIFtjYW5jZWxBbmltYXRpb25GcmFtZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy9jYW5jZWxBbmltYXRpb25GcmFtZX0uXG4gICAgICpcbiAgICAgKiBDYW5jZWxzIGEgcHJldmlvdXNseSB1c2luZyBbcmVxdWVzdEFuaW1hdGlvbkZyYW1lXXtAbGluayBhbmltYXRpb25GcmFtZSNyZXF1ZXN0QW5pbWF0aW9uRnJhbWV9XG4gICAgICogc2NoZWR1bGVkIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBVc2VkIGZvciBpbW1lZGlhdGVseSBzdG9wcGluZyB0aGUgcmVuZGVyIGxvb3Agd2l0aGluIHRoZSBFbmdpbmUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kICBjYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtICAge051bWJlcn0gICAgcmVxdWVzdElkIG9mIHRoZSBzY2hlZHVsZWQgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZCBieSBbcmVxdWVzdEFuaW1hdGlvbkZyYW1lXXtAbGluayBhbmltYXRpb25GcmFtZSNyZXF1ZXN0QW5pbWF0aW9uRnJhbWV9LlxuICAgICAqL1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiBjQUZcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0aW9uRnJhbWU7Il19
