(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @property inQuad
 * @static
 */
var inQuad = exports.inQuad = function inQuad(t) {
    return t * t;
};

/**
 * @property outQuad
 * @static
 */
var outQuad = exports.outQuad = function outQuad(t) {
    return -(t -= 1) * t + 1;
};

/**
 * @property inOutQuad
 * @static
 */
var inOutQuad = exports.inOutQuad = function inOutQuad(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t;
    return -0.5 * (--t * (t - 2) - 1);
};

/**
 * @property inCubic
 * @static
 */
var inCubic = exports.inCubic = function inCubic(t) {
    return t * t * t;
};

/**
 * @property outCubic
 * @static
 */
var outCubic = exports.outCubic = function outCubic(t) {
    return --t * t * t + 1;
};

/**
 * @property inOutCubic
 * @static
 */
var inOutCubic = exports.inOutCubic = function inOutCubic(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t;
    return 0.5 * ((t -= 2) * t * t + 2);
};

/**
 * @property inQuart
 * @static
 */
var inQuart = exports.inQuart = function inQuart(t) {
    return t * t * t * t;
};

/**
 * @property outQuart
 * @static
 */
var outQuart = exports.outQuart = function outQuart(t) {
    return -(--t * t * t * t - 1);
};

/**
 * @property inOutQuart
 * @static
 */
var inOutQuart = exports.inOutQuart = function inOutQuart(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t * t;
    return -0.5 * ((t -= 2) * t * t * t - 2);
};

/**
 * @property inQuint
 * @static
 */
var inQuint = exports.inQuint = function inQuint(t) {
    return t * t * t * t * t;
};

/**
 * @property outQuint
 * @static
 */
var outQuint = exports.outQuint = function outQuint(t) {
    return --t * t * t * t * t + 1;
};

/**
 * @property inOutQuint
 * @static
 */
var inOutQuint = exports.inOutQuint = function inOutQuint(t) {
    if ((t /= 0.5) < 1) return 0.5 * t * t * t * t * t;
    return 0.5 * ((t -= 2) * t * t * t * t + 2);
};

/**
 * @property inSine
 * @static
 */
var inSine = exports.inSine = function inSine(t) {
    return -1.0 * Math.cos(t * (Math.PI / 2)) + 1.0;
};

/**
 * @property outSine
 * @static
 */
var outSine = exports.outSine = function outSine(t) {
    return Math.sin(t * (Math.PI / 2));
};

/**
 * @property inOutSine
 * @static
 */
var inOutSine = exports.inOutSine = function inOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
};

/**
 * @property inExpo
 * @static
 */
var inExpo = exports.inExpo = function inExpo(t) {
    return t === 0 ? 0.0 : Math.pow(2, 10 * (t - 1));
};

/**
 * @property outExpo
 * @static
 */
var outExpo = exports.outExpo = function outExpo(t) {
    return t === 1.0 ? 1.0 : -Math.pow(2, -10 * t) + 1;
};

/**
 * @property inOutExpo
 * @static
 */
var inOutExpo = exports.inOutExpo = function inOutExpo(t) {
    if (t === 0) return 0.0;
    if (t === 1.0) return 1.0;
    if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    return 0.5 * (-Math.pow(2, -10 * --t) + 2);
};

/**
 * @property inCirc
 * @static
 */
var inCirc = exports.inCirc = function inCirc(t) {
    return -(Math.sqrt(1 - t * t) - 1);
};

/**
 * @property outCirc
 * @static
 */
var outCirc = exports.outCirc = function outCirc(t) {
    return Math.sqrt(1 - --t * t);
};

/**
 * @property inOutCirc
 * @static
 */
var inOutCirc = exports.inOutCirc = function inOutCirc(t) {
    if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
};

/**
 * @property inElastic
 * @static
 */
var inElastic = exports.inElastic = function inElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1.0;
    if (t === 0) return 0.0;
    if (t === 1) return 1.0;
    if (!p) p = 0.3;
    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
};

/**
 * @property outElastic
 * @static
 */
var outElastic = exports.outElastic = function outElastic(t) {
    var s = 1.70158;
    var p = 0;
    var a = 1.0;
    if (t === 0) return 0.0;
    if (t === 1) return 1.0;
    if (!p) p = 0.3;
    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1.0;
};

/**
 * @property inOutElastic
 * @static
 */
var inOutElastic = exports.inOutElastic = function inOutElastic(t) {
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

/**
 * @property inBack
 * @static
 */
var inBack = exports.inBack = function inBack(t, s) {
    if (s === undefined) s = 1.70158;
    return t * t * ((s + 1) * t - s);
};

/**
 * @property outBack
 * @static
 */
var outBack = exports.outBack = function outBack(t, s) {
    if (s === undefined) s = 1.70158;
    return --t * t * ((s + 1) * t + s) + 1;
};

/**
 * @property inOutBack
 * @static
 */
var inOutBack = exports.inOutBack = function inOutBack(t, s) {
    if (s === undefined) s = 1.70158;
    if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
};

/**
 * @property inBounce
 * @static
 */
var inBounce = exports.inBounce = function inBounce(t) {
    return 1.0 - Easing.outBounce(1.0 - t);
};

/**
 * @property outBounce
 * @static
 */
var outBounce = exports.outBounce = function outBounce(t) {
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

/**
 * @property inOutBounce
 * @static
 */
var inOutBounce = exports.inOutBounce = function inOutBounce(t) {
    if (t < 0.5) return Easing.inBounce(t * 2) * 0.5;
    return Easing.outBounce(t * 2 - 1.0) * 0.5 + 0.5;
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polaroid = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _STATE$TRANSITION, _stateMachine;

var _glfx = require("glfx");

var _glfx2 = _interopRequireDefault(_glfx);

var _elementBuilder = require("./elementBuilder");

var _Easings = require("./Easings");

var _transitionBuilder = require("./transitionBuilder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Polaroid = exports.Polaroid = function () {
  function Polaroid(_ref) {
    var srcs = _ref.srcs,
        loop = _ref.loop;

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
        this.canvas = _glfx2.default.canvas();
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
}();

},{"./Easings":1,"./elementBuilder":5,"./transitionBuilder":6,"glfx":8}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecordPlayer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _glfx = require("glfx");

var _glfx2 = _interopRequireDefault(_glfx);

var _elementBuilder = require("./elementBuilder");

var _Easings = require("./Easings");

var _transitionBuilder = require("./transitionBuilder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecordPlayer = exports.RecordPlayer = function () {
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
}();

},{"./Easings":1,"./elementBuilder":5,"./transitionBuilder":6,"glfx":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = undefined;

var _simple_animation_loop = require("simple_animation_loop");

var _simple_animation_loop2 = _interopRequireDefault(_simple_animation_loop);

var _Polaroid = require("./Polaroid");

var _RecordPlayer = require("./RecordPlayer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSrc = function getSrc(indexes) {
  var randIndex = Math.round(Math.random() * indexes.length - 1);
  var value = indexes.splice(randIndex, 1);
  return "/assets/images/download-" + value[0] + ".jpg";
};

var createPolaroidPics = function createPolaroidPics(_ref) {
  var entry = _ref.entry,
      loop = _ref.loop;

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
  var entry = _ref2.entry,
      loop = _ref2.loop;

  entry.appendChild(new _RecordPlayer.RecordPlayer({ loop: loop }).el);
};

var createApp = exports.createApp = function createApp() {
  var entry = document.getElementById("entry");
  var loop = new _simple_animation_loop2.default();
  var options = { entry: entry, loop: loop };
  createPolaroidPics(options);
  // createRecordPlayer(options)
};

},{"./Polaroid":2,"./RecordPlayer":3,"simple_animation_loop":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elementBuilder = exports.elementBuilder = function elementBuilder() {
  var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var options = arguments[1];

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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ident = function ident(x) {
  return x;
};
var transitionBuilder = exports.transitionBuilder = function transitionBuilder(count, step, loop) {
  return function (_ref) {
    var animation = _ref.animation,
        duration = _ref.duration,
        _ref$easing = _ref.easing,
        easing = _ref$easing === undefined ? ident : _ref$easing,
        _ref$delay = _ref.delay,
        delay = _ref$delay === undefined ? 0 : _ref$delay,
        done = _ref.done;

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

},{}],7:[function(require,module,exports){
'use strict';

var _app = require('./assets/js/app');

setTimeout(function () {
  (0, _app.createApp)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL2pzL0Vhc2luZ3MuanMiLCJhc3NldHMvanMvUG9sYXJvaWQuanMiLCJhc3NldHMvanMvUmVjb3JkUGxheWVyLmpzIiwiYXNzZXRzL2pzL2FwcC5qcyIsImFzc2V0cy9qcy9lbGVtZW50QnVpbGRlci5qcyIsImFzc2V0cy9qcy90cmFuc2l0aW9uQnVpbGRlci5qcyIsImluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsZngvZ2xmeC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGVfYW5pbWF0aW9uX2xvb3AvYW5pbWF0aW9uTG9vcC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGVfYW5pbWF0aW9uX2xvb3AvckFGUG9seWZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBOzs7O0FBSU8sSUFBTSwwQkFBUyxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUI7QUFDckMsV0FBTyxJQUFJLENBQVg7QUFDSCxDQUZNOztBQUlQOzs7O0FBSU8sSUFBTSw0QkFBVSxTQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0I7QUFDdkMsV0FBTyxFQUFFLEtBQUssQ0FBUCxJQUFZLENBQVosR0FBZ0IsQ0FBdkI7QUFDSCxDQUZNOztBQUlQOzs7O0FBSU8sSUFBTSxnQ0FBWSxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I7QUFDM0MsUUFBSSxDQUFDLEtBQUssR0FBTixJQUFhLENBQWpCLEVBQW9CLE9BQU8sTUFBTSxDQUFOLEdBQVUsQ0FBakI7QUFDcEIsV0FBTyxDQUFDLEdBQUQsSUFBUSxFQUFFLENBQUYsSUFBTyxJQUFJLENBQVgsSUFBZ0IsQ0FBeEIsQ0FBUDtBQUNILENBSE07O0FBS1A7Ozs7QUFJTyxJQUFNLDRCQUFVLFNBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQjtBQUN2QyxXQUFPLElBQUksQ0FBSixHQUFRLENBQWY7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QUZIOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIEBwcm9wZXJ0eSBpblF1YWRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluUXVhZCA9IGZ1bmN0aW9uIGluUXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0O1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0UXVhZFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0UXVhZCA9IGZ1bmN0aW9uIG91dFF1YWQodCkge1xuICAgIHJldHVybiAtKHQgLT0gMSkgKiB0ICsgMTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0UXVhZFxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRRdWFkID0gZnVuY3Rpb24gaW5PdXRRdWFkKHQpIHtcbiAgICBpZiAoKHQgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiB0ICogdDtcbiAgICByZXR1cm4gLTAuNSAqICgtLXQgKiAodCAtIDIpIC0gMSk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbkN1YmljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbkN1YmljID0gZnVuY3Rpb24gaW5DdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IG91dEN1YmljXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRDdWJpYyA9IGZ1bmN0aW9uIG91dEN1YmljKHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqIHQgKyAxO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRDdWJpY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRDdWJpYyA9IGZ1bmN0aW9uIGluT3V0Q3ViaWModCkge1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqIHQgKiB0ICogdDtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKyAyKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluUXVhcnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluUXVhcnQgPSBmdW5jdGlvbiBpblF1YXJ0KHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdDtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IG91dFF1YXJ0XG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRRdWFydCA9IGZ1bmN0aW9uIG91dFF1YXJ0KHQpIHtcbiAgICByZXR1cm4gLSgtLXQgKiB0ICogdCAqIHQgLSAxKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0UXVhcnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0UXVhcnQgPSBmdW5jdGlvbiBpbk91dFF1YXJ0KHQpIHtcbiAgICBpZiAoKHQgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0O1xuICAgIHJldHVybiAtMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMik7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpblF1aW50XG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpblF1aW50ID0gZnVuY3Rpb24gaW5RdWludCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0UXVpbnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IG91dFF1aW50ID0gZnVuY3Rpb24gb3V0UXVpbnQodCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0UXVpbnRcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0UXVpbnQgPSBmdW5jdGlvbiBpbk91dFF1aW50KHQpIHtcbiAgICBpZiAoKHQgLz0gMC41KSA8IDEpIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdDtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5TaW5lXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpblNpbmUgPSBmdW5jdGlvbiBpblNpbmUodCkge1xuICAgIHJldHVybiAtMS4wICogTWF0aC5jb3ModCAqIChNYXRoLlBJIC8gMikpICsgMS4wO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0U2luZVxuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0U2luZSA9IGZ1bmN0aW9uIG91dFNpbmUodCkge1xuICAgIHJldHVybiBNYXRoLnNpbih0ICogKE1hdGguUEkgLyAyKSk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbk91dFNpbmVcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0U2luZSA9IGZ1bmN0aW9uIGluT3V0U2luZSh0KSB7XG4gICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbkV4cG9cbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluRXhwbyA9IGZ1bmN0aW9uIGluRXhwbyh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAgPyAwLjAgOiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0RXhwb1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0RXhwbyA9IGZ1bmN0aW9uIG91dEV4cG8odCkge1xuICAgIHJldHVybiB0ID09PSAxLjAgPyAxLjAgOiAtTWF0aC5wb3coMiwgLTEwICogdCkgKyAxO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRFeHBvXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dEV4cG8gPSBmdW5jdGlvbiBpbk91dEV4cG8odCkge1xuICAgIGlmICh0ID09PSAwKSByZXR1cm4gMC4wO1xuICAgIGlmICh0ID09PSAxLjApIHJldHVybiAxLjA7XG4gICAgaWYgKCh0IC89IDAuNSkgPCAxKSByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKTtcbiAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXQpICsgMik7XG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpbkNpcmNcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluQ2lyYyA9IGZ1bmN0aW9uIGluQ2lyYyh0KSB7XG4gICAgcmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IG91dENpcmNcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IG91dENpcmMgPSBmdW5jdGlvbiBvdXRDaXJjKHQpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0Q2lyY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRDaXJjID0gZnVuY3Rpb24gaW5PdXRDaXJjKHQpIHtcbiAgICBpZiAoKHQgLz0gMC41KSA8IDEpIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluRWxhc3RpY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5FbGFzdGljID0gZnVuY3Rpb24gaW5FbGFzdGljKHQpIHtcbiAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBhID0gMS4wO1xuICAgIGlmICh0ID09PSAwKSByZXR1cm4gMC4wO1xuICAgIGlmICh0ID09PSAxKSByZXR1cm4gMS4wO1xuICAgIGlmICghcCkgcCA9IDAuMztcbiAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMS4wIC8gYSk7XG4gICAgcmV0dXJuIC0oXG4gICAgICAgIGEgKlxuICAgICAgICBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqXG4gICAgICAgIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcClcbiAgICApO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0RWxhc3RpY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0RWxhc3RpYyA9IGZ1bmN0aW9uIG91dEVsYXN0aWModCkge1xuICAgIHZhciBzID0gMS43MDE1ODtcbiAgICB2YXIgcCA9IDA7XG4gICAgdmFyIGEgPSAxLjA7XG4gICAgaWYgKHQgPT09IDApIHJldHVybiAwLjA7XG4gICAgaWYgKHQgPT09IDEpIHJldHVybiAxLjA7XG4gICAgaWYgKCFwKSBwID0gMC4zO1xuICAgIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxLjAgLyBhKTtcbiAgICByZXR1cm4gKFxuICAgICAgICBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigodCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgMS4wXG4gICAgKTtcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGluT3V0RWxhc3RpY1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3QgaW5PdXRFbGFzdGljID0gZnVuY3Rpb24gaW5PdXRFbGFzdGljKHQpIHtcbiAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBhID0gMS4wO1xuICAgIGlmICh0ID09PSAwKSByZXR1cm4gMC4wO1xuICAgIGlmICgodCAvPSAwLjUpID09PSAyKSByZXR1cm4gMS4wO1xuICAgIGlmICghcCkgcCA9IDAuMyAqIDEuNTtcbiAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMS4wIC8gYSk7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgLTAuNSAqXG4gICAgICAgICAgICAoYSAqXG4gICAgICAgICAgICAgICAgTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKlxuICAgICAgICAgICAgICAgIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpXG4gICAgICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgYSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLCAtMTAgKiAodCAtPSAxKSkgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqXG4gICAgICAgICAgICAwLjUgK1xuICAgICAgICAxLjBcbiAgICApO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5CYWNrXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbkJhY2sgPSBmdW5jdGlvbiBpbkJhY2sodCwgcykge1xuICAgIGlmIChzID09PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0QmFja1xuICogQHN0YXRpY1xuICovXG5leHBvcnQgY29uc3Qgb3V0QmFjayA9IGZ1bmN0aW9uIG91dEJhY2sodCwgcykge1xuICAgIGlmIChzID09PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRCYWNrXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbk91dEJhY2sgPSBmdW5jdGlvbiBpbk91dEJhY2sodCwgcykge1xuICAgIGlmIChzID09PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgIGlmICgodCAvPSAwLjUpIDwgMSkgcmV0dXJuIDAuNSAqICh0ICogdCAqICgoKHMgKj0gMS41MjUpICsgMSkgKiB0IC0gcykpO1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgKyBzKSArIDIpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5Cb3VuY2VcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluQm91bmNlID0gZnVuY3Rpb24gaW5Cb3VuY2UodCkge1xuICAgIHJldHVybiAxLjAgLSBFYXNpbmcub3V0Qm91bmNlKDEuMCAtIHQpO1xufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgb3V0Qm91bmNlXG4gKiBAc3RhdGljXG4gKi9cbmV4cG9ydCBjb25zdCBvdXRCb3VuY2UgPSBmdW5jdGlvbiBvdXRCb3VuY2UodCkge1xuICAgIGlmICh0IDwgMSAvIDIuNzUpIHtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHQgKiB0O1xuICAgIH0gZWxzZSBpZiAodCA8IDIgLyAyLjc1KSB7XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiAodCAtPSAxLjUgLyAyLjc1KSAqIHQgKyAwLjc1O1xuICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh0IC09IDIuMjUgLyAyLjc1KSAqIHQgKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaW5PdXRCb3VuY2VcbiAqIEBzdGF0aWNcbiAqL1xuZXhwb3J0IGNvbnN0IGluT3V0Qm91bmNlID0gZnVuY3Rpb24gaW5PdXRCb3VuY2UodCkge1xuICAgIGlmICh0IDwgMC41KSByZXR1cm4gRWFzaW5nLmluQm91bmNlKHQgKiAyKSAqIDAuNTtcbiAgICByZXR1cm4gRWFzaW5nLm91dEJvdW5jZSh0ICogMiAtIDEuMCkgKiAwLjUgKyAwLjU7XG59O1xuIiwiaW1wb3J0IGdsZnggZnJvbSBcImdsZnhcIjtcbmltcG9ydCB7IGVsZW1lbnRCdWlsZGVyIH0gZnJvbSBcIi4vZWxlbWVudEJ1aWxkZXJcIjtcbmltcG9ydCB7IG91dEN1YmljLCBpbkN1YmljLCBpbkV4cG8sIG91dFF1aW50IH0gZnJvbSBcIi4vRWFzaW5nc1wiO1xuaW1wb3J0IHsgdHJhbnNpdGlvbkJ1aWxkZXIgfSBmcm9tIFwiLi90cmFuc2l0aW9uQnVpbGRlclwiO1xuXG5jb25zdCBjaGVja1Zpc2libGVZID0gKGVsKSA9PiB7XG4gIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3SGVpZ2h0ID0gTWF0aC5tYXgoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgKTtcbiAgcmV0dXJuICEocmVjdC5ib3R0b20gPCAwIHx8IHJlY3QudG9wIC0gdmlld0hlaWdodCA+PSAwKTtcbn07XG5cbmNvbnN0IGNoZWNrVmlzaWJsZVggPSAoZWwsIHdpZHRoKT0+IHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHZpZXdXaWR0aCA9IE1hdGgubWF4KFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICB3aW5kb3cuaW5uZXJXaWR0aFxuICApO1xuICByZXR1cm4gIShyZWN0LnJpZ2h0IDwgMCB8fCByZWN0LmxlZnQgLSB2aWV3V2lkdGggPj0gMCk7XG59O1xuXG5jb25zdCBTVEFURSA9IHtcbiAgT046IFwiT05cIixcbiAgT0ZGOiBcIk9GRlwiLFxuICBUUkFOU0lUSU9OOiBcIlRSQU5TSVRJT05cIlxufTtcblxuY29uc3QgU0hPV19JTUFHRSA9IFwiU0hPV19JTUFHRVwiO1xuY29uc3QgSElERV9JTUFHRSA9IFwiSElERV9JTUFHRVwiO1xuY29uc3QgRE9ORV9TSE9XID0gXCJET05FX1NIT1dcIjtcbmNvbnN0IERPTkVfSElERSA9IFwiRE9ORV9ISURFXCI7XG5cbmNvbnN0IHN0YXRlTWFjaGluZSA9IHtcbiAgW1NUQVRFLk9OXToge1xuICAgIFtISURFX0lNQUdFXTogU1RBVEUuVFJBTlNJVElPTlxuICB9LFxuICBbU1RBVEUuVFJBTlNJVElPTl06IHtcbiAgICBbRE9ORV9ISURFXTogU1RBVEUuT0ZGLFxuICAgIFtET05FX1NIT1ddOiBTVEFURS5PTlxuICB9LFxuICBbU1RBVEUuT0ZGXToge1xuICAgIFtTSE9XX0lNQUdFXTogU1RBVEUuVFJBTlNJVElPTlxuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgUG9sYXJvaWQge1xuICBjb25zdHJ1Y3Rvcih7IHNyY3MsIGxvb3AgfSkge1xuICAgIHRoaXMubG9vcCA9IGxvb3A7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBTVEFURS5PRkY7XG4gICAgdGhpcy5zdGF0ZU1hY2hpbmUgPSBzdGF0ZU1hY2hpbmU7XG4gICAgdGhpcy5fYWRkTGlzdGVuZXJzID0gdGhpcy5fYWRkTGlzdGVuZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbml0SW1hZ2VDYW52YXMgPSB0aGlzLmluaXRJbWFnZUNhbnZhcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5ID0gdGhpcy5jaGVja1Zpc2liaWxpdHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVJbWFnZSA9IHRoaXMuaGlkZUltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93SW1hZ2UgPSB0aGlzLnNob3dJbWFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnR3ZWVuID0gdGhpcy50d2Vlbi5iaW5kKHRoaXMpO1xuICAgIFxuICAgIHRoaXMuaW1hZ2VzID0gc3Jjcy5tYXAoc3JjPT4gZWxlbWVudEJ1aWxkZXIoXCJpbWdcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcImltYWdlLWl0ZW1cIixcbiAgICAgIHNyY1xuICAgIH0pKVxuXG4gICAgdGhpcy5iZ0ltZyA9IGVsZW1lbnRCdWlsZGVyKFwiaW1nXCIsIHtcbiAgICAgIHNyYzogXCIvYXNzZXRzL2ltYWdlcy9wb2xhcm9pZC5wbmdcIixcbiAgICAgIGNsYXNzTmFtZTogXCJwb2xhcm9pZC1mcmFtZVwiXG4gICAgfSk7XG5cbiAgICB0aGlzLmZhZGVJbiA9IGVsZW1lbnRCdWlsZGVyKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJmYWRlLWluXCJcbiAgICB9KTtcblxuICAgIHRoaXMuZWwgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaW1hZ2Utd3JhcFwiLFxuICAgICAgY2hpbGROb2RlczogW3RoaXMuYmdJbWcsIC4uLnRoaXMuaW1hZ2VzLCB0aGlzLmZhZGVJbl1cbiAgICB9KTtcblxuICAgIHRoaXMuX2FkZExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIF9hZGRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5pbWFnZXNbMF0uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5pbml0SW1hZ2VDYW52YXMpO1xuICB9XG4gIGluaXRJbWFnZUNhbnZhcygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jYW52YXMgPSBnbGZ4LmNhbnZhcygpO1xuICAgICAgdGhpcy5jYW52YXMuY2xhc3NOYW1lID0gXCJpbWFnZS1pdGVtXCI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5mYWRlSW4uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5pbWFnZXNbMF07XG4gICAgfVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5pbWFnZXNbMF07XG4gICAgdGhpcy5pbWFnZXMuZm9yRWFjaChpbWFnZT0+e1xuICAgICAgaW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfSlcblxuICAgIC8vIGltYWdlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2FudmFzLCBpbWFnZSk7XG4gICAgLy8gdGhpcy5sb2FkSW1hZ2UoKTtcbiAgICAvL2NvbnN0IGltYWdlID0gdGhpcy5pbWFnZXNbaW5kZXhdO1xuICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuY2FudmFzLnRleHR1cmUoaW1hZ2UpO1xuICAgIGltYWdlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY2FudmFzLCBpbWFnZSk7XG4gICAgLy9pbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGltYWdlKTtcbiAgICAvL3RoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIGxvYWRJbWFnZSgpe1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuaW1hZ2VzLmxlbmd0aClcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2VzW2luZGV4XTtcbiAgICB0aGlzLnRleHR1cmUubG9hZENvbnRlbnRzT2YoaW1hZ2UpO1xuICAgIFxuICAgIC8vIGltYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2UpO1xuICAgIC8vIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG4gIHNob3dJbWFnZShwYXJhbXMpIHtcbiAgICB0aGlzLmxvb3Auc3RhcnQoKTtcbiAgICAvLyB0cmFuc2Zvcm0gdmFsdWUgZnJvbSAxIHRvIDBcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBpbnRlciA9PiAoaW50ZXIgPD0gMSA/IDEgLSBpbnRlciA6IDApO1xuICAgIHRoaXMudHdlZW4odHJhbnNmb3JtLCAyMDAwLCB0aGlzLmRpc3BhdGNoQWN0aW9uLmJpbmQodGhpcywgRE9ORV9TSE9XKSk7XG4gIH1cbiAgaGlkZUltYWdlKCkge1xuICAgIC8vIHRyYW5zZm9ybSB2YWx1ZSBmcm9tIDAgdG8gMVxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGludGVyID0+IChpbnRlciA+PSAxID8gMSA6IGludGVyKTtcbiAgICB0aGlzLnR3ZWVuKHRyYW5zZm9ybSwgMjAwMCwgKCk9PntcbiAgICAgIHRoaXMubG9hZEltYWdlKCk7XG4gICAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKERPTkVfSElERSlcbiAgICB9KTtcbiAgfVxuICB0cmFuc2l0aW9uYWwoLi4uYXJncykge1xuICAgIHJldHVybiB0cmFuc2l0aW9uQnVpbGRlcigwLCA2MCwgdGhpcy5sb29wKSguLi5hcmdzKTtcbiAgfVxuICBkaXNwYXRjaEFjdGlvbihhY3Rpb24sIGNiKXtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLnN0YXRlTWFjaGluZVt0aGlzLmN1cnJlbnRTdGF0ZV1bYWN0aW9uXTtcbiAgICBpZihuZXh0U3RhdGUpe1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH1cbiAgfVxuICBjaGVja1Zpc2liaWxpdHkoKSB7XG4gICAgaWYgKGNoZWNrVmlzaWJsZVkodGhpcy5iZ0ltZykgJiYgY2hlY2tWaXNpYmxlWCh0aGlzLmJnSW1nKSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEFjdGlvbihTSE9XX0lNQUdFLCB0aGlzLnNob3dJbWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24oSElERV9JTUFHRSwgdGhpcy5oaWRlSW1hZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHR3ZWVuKGFjdGlvbiwgZHVyYXRpb24sIGRvbmUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gMTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmFsKHtcbiAgICAgICAgYW5pbWF0aW9uOiBpbnRlciA9PiB7XG4gICAgICAgICAgY29uc3QgdHdlZW4gPSBhY3Rpb24oaW50ZXIpO1xuICAgICAgICAgIHRoaXMuY2FudmFzXG4gICAgICAgICAgICAuZHJhdyh0aGlzLnRleHR1cmUpXG4gICAgICAgICAgICAubGVuc0JsdXIoMjAgKiB0d2VlbiwgdmFsdWUgKiB0d2VlbiwgMClcbiAgICAgICAgICAgIC51cGRhdGUoKTtcbiAgICAgICAgICB0aGlzLmZhZGVJbi5zdHlsZS5vcGFjaXR5ID0gdHdlZW47XG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmc6IGluQ3ViaWMsXG4gICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgIGRvbmVcbiAgICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgZ2xmeCBmcm9tIFwiZ2xmeFwiO1xuaW1wb3J0IHsgZWxlbWVudEJ1aWxkZXIgfSBmcm9tIFwiLi9lbGVtZW50QnVpbGRlclwiO1xuaW1wb3J0IHsgb3V0Q3ViaWMsIGluQ3ViaWMsIGluRXhwbywgb3V0UXVpbnQgfSBmcm9tIFwiLi9FYXNpbmdzXCI7XG5pbXBvcnQgeyB0cmFuc2l0aW9uQnVpbGRlciB9IGZyb20gXCIuL3RyYW5zaXRpb25CdWlsZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWNvcmRQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih7IGxvb3AgfSkge1xuICAgIHRoaXMubG9vcCA9IGxvb3A7XG5cbiAgICAvL3RoaXMuX2FkZExpc3RlbmVycyA9IHRoaXMuX2FkZExpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgXG5cbiAgICB0aGlzLnJlY29yZCA9IGVsZW1lbnRCdWlsZGVyKFwiaW1nXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJyZWNvcmQgc3BpblwiLFxuICAgICAgc3JjOiBcIi9hc3NldHMvaW1hZ2VzL3JlY29yZC5wbmdcIlxuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBlbGVtZW50QnVpbGRlcihcImltZ1wiLCB7XG4gICAgICBzcmM6IFwiL2Fzc2V0cy9pbWFnZXMvbHAuanBnXCIsXG4gICAgICBjbGFzc05hbWU6IFwicmVjb3JkLXBsYXllclwiXG4gICAgfSk7XG5cbiAgICBcblxuICAgIHRoaXMuZWwgPSBlbGVtZW50QnVpbGRlcihcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiaW1hZ2UtYmctcmVjb3JkXCIsXG4gICAgICBjaGlsZE5vZGVzOiBbdGhpcy5wbGF5ZXIsIHRoaXMucmVjb3JkXVxuICAgIH0pO1xuXG4gICAgLy90aGlzLl9hZGRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBfYWRkTGlzdGVuZXJzKCkge1xuICAgIC8vdGhpcy5pbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9pbml0SW1hZ2VDYW52YXMpO1xuICB9XG4gXG59XG4iLCJcbmltcG9ydCBzQUwgZnJvbSBcInNpbXBsZV9hbmltYXRpb25fbG9vcFwiO1xuaW1wb3J0IHsgUG9sYXJvaWQgfSBmcm9tIFwiLi9Qb2xhcm9pZFwiO1xuaW1wb3J0IHsgUmVjb3JkUGxheWVyIH0gZnJvbSAnLi9SZWNvcmRQbGF5ZXInO1xuXG5jb25zdCBnZXRTcmMgPSAoaW5kZXhlcykgPT4ge1xuICBjb25zdCByYW5kSW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBpbmRleGVzLmxlbmd0aCAtIDEpO1xuICB2YXIgdmFsdWUgPSBpbmRleGVzLnNwbGljZShyYW5kSW5kZXgsIDEpXG4gIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQtJHt2YWx1ZVswXX0uanBnYFxufVxuXG5jb25zdCBjcmVhdGVQb2xhcm9pZFBpY3MgPSAoe2VudHJ5LCBsb29wfSkgPT57XG4gIHZhciBpbmRleGVzID0gbmV3IEFycmF5KDM2KS5maWxsKCkubWFwKChfLGkpID0+IGkgKyAxKTtcblxuICAgdmFyIGltYWdlcyA9IG5ldyBBcnJheSgxMikuZmlsbCgpLm1hcCgoXywgaSkgPT4ge1xuXG4gICBcbiAgICBjb25zdCBwb2xhcm9pZCA9IG5ldyBQb2xhcm9pZCh7XG4gICAgICBzcmNzOiBbZ2V0U3JjKGluZGV4ZXMpLCBnZXRTcmMoaW5kZXhlcyksIGdldFNyYyhpbmRleGVzKV0sXG4gICAgICBsb29wXG4gICAgfSk7XG5cbiAgICBjb25zdCBwYWRkaW5nID0gMTAwO1xuICAgIHBvbGFyb2lkLmVsLnN0eWxlLmxlZnQgPSBgJHtpICogMzUwICsgcGFkZGluZyAqIChpICsgMSl9cHhgO1xuICAgIGVudHJ5LmFwcGVuZENoaWxkKHBvbGFyb2lkLmVsKTtcbiAgICByZXR1cm4gcG9sYXJvaWQ7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNvcmQtd3JhcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpPT57XG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpKT0+e1xuICAgICAgIGltYWdlLmNoZWNrVmlzaWJpbGl0eSgpXG4gICAgfSlcbiAgfSlcbn1cblxuY29uc3QgY3JlYXRlUmVjb3JkUGxheWVyID0gKHtlbnRyeSwgbG9vcH0pID0+IHtcbiAgZW50cnkuYXBwZW5kQ2hpbGQobmV3IFJlY29yZFBsYXllcih7IGxvb3AgfSkuZWwpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGVudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyeVwiKTtcbiAgY29uc3QgbG9vcCA9IG5ldyBzQUwoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHtlbnRyeSwgbG9vcH1cbiAgY3JlYXRlUG9sYXJvaWRQaWNzKG9wdGlvbnMpO1xuICAvLyBjcmVhdGVSZWNvcmRQbGF5ZXIob3B0aW9ucylcbn07XG5cblxuIiwiZXhwb3J0IGNvbnN0IGVsZW1lbnRCdWlsZGVyID0gKHRhZ05hbWUgPSBcImRpdlwiLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSBcImNoaWxkTm9kZXNcIikge1xuICAgICAgdGFyZ2V0W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgfVxuICB9KTtcbiAgb3B0aW9ucy5jaGlsZE5vZGVzICYmXG4gICAgb3B0aW9ucy5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwiY29uc3QgaWRlbnQgPSB4ID0+IHg7XG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbkJ1aWxkZXIgPSAoY291bnQsIHN0ZXAsIGxvb3ApID0+IHtcbiAgcmV0dXJuICh7YW5pbWF0aW9uLCBkdXJhdGlvbiwgZWFzaW5nID0gaWRlbnQsIGRlbGF5ID0gMCwgZG9uZX0pID0+IHtcbiAgICBsb29wLnNldEFuaW1hdGlvblRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlciA9IGxvb3Auc2V0QW5pbWF0aW9uSW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnQgPj0gZHVyYXRpb24pIHtcbiAgICAgICAgICBsb29wLnJlbW92ZUFuaW1hdGlvbih1cGRhdGVyKTtcbiAgICAgICAgICAhbG9vcC5hbmltYXRpb25zLmxlbmd0aCAmJiBsb29wLnN0b3AoKTtcbiAgICAgICAgICBkb25lICYmIGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBhbmltYXRpb24oZWFzaW5nKGNvdW50IC8gZHVyYXRpb24pKTtcbiAgICAgICAgY291bnQgKz0gc3RlcDtcbiAgICAgIH0sIHN0ZXApO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICcuL2Fzc2V0cy9qcy9hcHAnO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIGNyZWF0ZUFwcCgpO1xufSwgMTAwMCkiLCIvKlxuICogZ2xmeC5qc1xuICogaHR0cDovL2V2YW53LmdpdGh1Yi5jb20vZ2xmeC5qcy9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBFdmFuIFdhbGxhY2VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG52YXIgZng9ZnVuY3Rpb24oKXtmdW5jdGlvbiBxKGEsZCxjKXtyZXR1cm4gTWF0aC5tYXgoYSxNYXRoLm1pbihkLGMpKX1mdW5jdGlvbiB3KGIpe3JldHVybntfOmIsbG9hZENvbnRlbnRzT2Y6ZnVuY3Rpb24oYil7YT10aGlzLl8uZ2w7dGhpcy5fLmxvYWRDb250ZW50c09mKGIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7YT10aGlzLl8uZ2w7dGhpcy5fLmRlc3Ryb3koKX19fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIHcoci5mcm9tRWxlbWVudChhKSl9ZnVuY3Rpb24gQihiLGQpe3ZhciBjPWEuVU5TSUdORURfQllURTtpZihhLmdldEV4dGVuc2lvbihcIk9FU190ZXh0dXJlX2Zsb2F0XCIpJiZhLmdldEV4dGVuc2lvbihcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiKSl7dmFyIGU9bmV3IHIoMTAwLDEwMCxhLlJHQkEsYS5GTE9BVCk7dHJ5e2UuZHJhd1RvKGZ1bmN0aW9uKCl7Yz1hLkZMT0FUfSl9Y2F0Y2goZyl7fWUuZGVzdHJveSgpfXRoaXMuXy50ZXh0dXJlJiZ0aGlzLl8udGV4dHVyZS5kZXN0cm95KCk7XG50aGlzLl8uc3BhcmVUZXh0dXJlJiZ0aGlzLl8uc3BhcmVUZXh0dXJlLmRlc3Ryb3koKTt0aGlzLndpZHRoPWI7dGhpcy5oZWlnaHQ9ZDt0aGlzLl8udGV4dHVyZT1uZXcgcihiLGQsYS5SR0JBLGMpO3RoaXMuXy5zcGFyZVRleHR1cmU9bmV3IHIoYixkLGEuUkdCQSxjKTt0aGlzLl8uZXh0cmFUZXh0dXJlPXRoaXMuXy5leHRyYVRleHR1cmV8fG5ldyByKDAsMCxhLlJHQkEsYyk7dGhpcy5fLmZsaXBwZWRTaGFkZXI9dGhpcy5fLmZsaXBwZWRTaGFkZXJ8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXtnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdmVjMih0ZXhDb29yZC54LDEuMC10ZXhDb29yZC55KSk7fVwiKTt0aGlzLl8uaXNJbml0aWFsaXplZD0hMH1mdW5jdGlvbiBDKGEsZCxjKXtpZighdGhpcy5fLmlzSW5pdGlhbGl6ZWR8fFxuYS5fLndpZHRoIT10aGlzLndpZHRofHxhLl8uaGVpZ2h0IT10aGlzLmhlaWdodClCLmNhbGwodGhpcyxkP2Q6YS5fLndpZHRoLGM/YzphLl8uaGVpZ2h0KTthLl8udXNlKCk7dGhpcy5fLnRleHR1cmUuZHJhd1RvKGZ1bmN0aW9uKCl7aC5nZXREZWZhdWx0U2hhZGVyKCkuZHJhd1JlY3QoKX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIEQoKXt0aGlzLl8udGV4dHVyZS51c2UoKTt0aGlzLl8uZmxpcHBlZFNoYWRlci5kcmF3UmVjdCgpO3JldHVybiB0aGlzfWZ1bmN0aW9uIGYoYSxkLGMsZSl7KGN8fHRoaXMuXy50ZXh0dXJlKS51c2UoKTt0aGlzLl8uc3BhcmVUZXh0dXJlLmRyYXdUbyhmdW5jdGlvbigpe2EudW5pZm9ybXMoZCkuZHJhd1JlY3QoKX0pO3RoaXMuXy5zcGFyZVRleHR1cmUuc3dhcFdpdGgoZXx8dGhpcy5fLnRleHR1cmUpfWZ1bmN0aW9uIEUoYSl7YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLGEpO2EucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKTtyZXR1cm4gdGhpc31cbmZ1bmN0aW9uIEYoKXt2YXIgYj1uZXcgcih0aGlzLl8udGV4dHVyZS53aWR0aCx0aGlzLl8udGV4dHVyZS5oZWlnaHQsYS5SR0JBLGEuVU5TSUdORURfQllURSk7dGhpcy5fLnRleHR1cmUudXNlKCk7Yi5kcmF3VG8oZnVuY3Rpb24oKXtoLmdldERlZmF1bHRTaGFkZXIoKS5kcmF3UmVjdCgpfSk7cmV0dXJuIHcoYil9ZnVuY3Rpb24gRygpe3ZhciBiPXRoaXMuXy50ZXh0dXJlLndpZHRoLGQ9dGhpcy5fLnRleHR1cmUuaGVpZ2h0LGM9bmV3IFVpbnQ4QXJyYXkoNCpiKmQpO3RoaXMuXy50ZXh0dXJlLmRyYXdUbyhmdW5jdGlvbigpe2EucmVhZFBpeGVscygwLDAsYixkLGEuUkdCQSxhLlVOU0lHTkVEX0JZVEUsYyl9KTtyZXR1cm4gY31mdW5jdGlvbiBrKGIpe3JldHVybiBmdW5jdGlvbigpe2E9dGhpcy5fLmdsO3JldHVybiBiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24geChhLGQsYyxlLGcsbixsLHApe3ZhciBtPWMtZyxoPWUtbixmPWwtZyxrPXAtbjtnPWEtYytnLWw7bj1cbmQtZStuLXA7dmFyIHE9bSprLWYqaCxmPShnKmstZipuKS9xLG09KG0qbi1nKmgpL3E7cmV0dXJuW2MtYStmKmMsZS1kK2YqZSxmLGwtYSttKmwscC1kK20qcCxtLGEsZCwxXX1mdW5jdGlvbiB5KGEpe3ZhciBkPWFbMF0sYz1hWzFdLGU9YVsyXSxnPWFbM10sbj1hWzRdLGw9YVs1XSxwPWFbNl0sbT1hWzddO2E9YVs4XTt2YXIgZj1kKm4qYS1kKmwqbS1jKmcqYStjKmwqcCtlKmcqbS1lKm4qcDtyZXR1cm5bKG4qYS1sKm0pL2YsKGUqbS1jKmEpL2YsKGMqbC1lKm4pL2YsKGwqcC1nKmEpL2YsKGQqYS1lKnApL2YsKGUqZy1kKmwpL2YsKGcqbS1uKnApL2YsKGMqcC1kKm0pL2YsKGQqbi1jKmcpL2ZdfWZ1bmN0aW9uIHooYSl7dmFyIGQ9YS5sZW5ndGg7dGhpcy54YT1bXTt0aGlzLnlhPVtdO3RoaXMudT1bXTt0aGlzLnkyPVtdO2Euc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhWzBdLWJbMF19KTtmb3IodmFyIGM9MDtjPGQ7YysrKXRoaXMueGEucHVzaChhW2NdWzBdKSx0aGlzLnlhLnB1c2goYVtjXVsxXSk7XG50aGlzLnVbMF09MDt0aGlzLnkyWzBdPTA7Zm9yKGM9MTtjPGQtMTsrK2Mpe2E9dGhpcy54YVtjKzFdLXRoaXMueGFbYy0xXTt2YXIgZT0odGhpcy54YVtjXS10aGlzLnhhW2MtMV0pL2EsZz1lKnRoaXMueTJbYy0xXSsyO3RoaXMueTJbY109KGUtMSkvZzt0aGlzLnVbY109KDYqKCh0aGlzLnlhW2MrMV0tdGhpcy55YVtjXSkvKHRoaXMueGFbYysxXS10aGlzLnhhW2NdKS0odGhpcy55YVtjXS10aGlzLnlhW2MtMV0pLyh0aGlzLnhhW2NdLXRoaXMueGFbYy0xXSkpL2EtZSp0aGlzLnVbYy0xXSkvZ310aGlzLnkyW2QtMV09MDtmb3IoYz1kLTI7MDw9YzstLWMpdGhpcy55MltjXT10aGlzLnkyW2NdKnRoaXMueTJbYysxXSt0aGlzLnVbY119ZnVuY3Rpb24gdShhLGQpe3JldHVybiBuZXcgaChudWxsLGErXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWMyIGNvb3JkPXRleENvb3JkKnRleFNpemU7XCIrXG5kK1wiZ2xfRnJhZ0NvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLGNvb3JkL3RleFNpemUpO3ZlYzIgY2xhbXBlZENvb3JkPWNsYW1wKGNvb3JkLHZlYzIoMC4wKSx0ZXhTaXplKTtpZihjb29yZCE9Y2xhbXBlZENvb3JkKXtnbF9GcmFnQ29sb3IuYSo9bWF4KDAuMCwxLjAtbGVuZ3RoKGNvb3JkLWNsYW1wZWRDb29yZCkpO319XCIpfWZ1bmN0aW9uIEgoYil7YS5ub2lzZT1hLm5vaXNlfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGFtb3VudDt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7ZmxvYXQgcmFuZCh2ZWMyIGNvKXtyZXR1cm4gZnJhY3Qoc2luKGRvdChjby54eSx2ZWMyKDEyLjk4OTgsNzguMjMzKSkpKjQzNzU4LjU0NTMpO312b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTtmbG9hdCBkaWZmPShyYW5kKHRleENvb3JkKS0wLjUpKmFtb3VudDtjb2xvci5yKz1kaWZmO2NvbG9yLmcrPWRpZmY7Y29sb3IuYis9ZGlmZjtnbF9GcmFnQ29sb3I9Y29sb3I7fVwiKTtcbmYuY2FsbCh0aGlzLGEubm9pc2Use2Ftb3VudDpxKDAsYiwxKX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIEkoYil7YS52aWJyYW5jZT1hLnZpYnJhbmNlfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGFtb3VudDt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7ZmxvYXQgYXZlcmFnZT0oY29sb3Iucitjb2xvci5nK2NvbG9yLmIpLzMuMDtmbG9hdCBteD1tYXgoY29sb3IucixtYXgoY29sb3IuZyxjb2xvci5iKSk7ZmxvYXQgYW10PShteC1hdmVyYWdlKSooLWFtb3VudCozLjApO2NvbG9yLnJnYj1taXgoY29sb3IucmdiLHZlYzMobXgpLGFtdCk7Z2xfRnJhZ0NvbG9yPWNvbG9yO31cIik7XG5mLmNhbGwodGhpcyxhLnZpYnJhbmNlLHthbW91bnQ6cSgtMSxiLDEpfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gSihiLGQpe2EudmlnbmV0dGU9YS52aWduZXR0ZXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBzaXplO3VuaWZvcm0gZmxvYXQgYW1vdW50O3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTtmbG9hdCBkaXN0PWRpc3RhbmNlKHRleENvb3JkLHZlYzIoMC41LDAuNSkpO2NvbG9yLnJnYio9c21vb3Roc3RlcCgwLjgsc2l6ZSowLjc5OSxkaXN0KihhbW91bnQrc2l6ZSkpO2dsX0ZyYWdDb2xvcj1jb2xvcjt9XCIpO1xuZi5jYWxsKHRoaXMsYS52aWduZXR0ZSx7c2l6ZTpxKDAsYiwxKSxhbW91bnQ6cSgwLGQsMSl9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBLKGIpe2EuZGVub2lzZT1hLmRlbm9pc2V8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gZmxvYXQgZXhwb25lbnQ7dW5pZm9ybSBmbG9hdCBzdHJlbmd0aDt1bmlmb3JtIHZlYzIgdGV4U2l6ZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjZW50ZXI9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO3ZlYzQgY29sb3I9dmVjNCgwLjApO2Zsb2F0IHRvdGFsPTAuMDtmb3IoZmxvYXQgeD0tNC4wO3g8PTQuMDt4Kz0xLjApe2ZvcihmbG9hdCB5PS00LjA7eTw9NC4wO3krPTEuMCl7dmVjNCBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrdmVjMih4LHkpL3RleFNpemUpO2Zsb2F0IHdlaWdodD0xLjAtYWJzKGRvdChzYW1wbGUucmdiLWNlbnRlci5yZ2IsdmVjMygwLjI1KSkpO3dlaWdodD1wb3cod2VpZ2h0LGV4cG9uZW50KTtjb2xvcis9c2FtcGxlKndlaWdodDt0b3RhbCs9d2VpZ2h0O319Z2xfRnJhZ0NvbG9yPWNvbG9yL3RvdGFsO31cIik7XG5mb3IodmFyIGQ9MDsyPmQ7ZCsrKWYuY2FsbCh0aGlzLGEuZGVub2lzZSx7ZXhwb25lbnQ6TWF0aC5tYXgoMCxiKSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIEwoYixkKXthLmJyaWdodG5lc3NDb250cmFzdD1hLmJyaWdodG5lc3NDb250cmFzdHx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBicmlnaHRuZXNzO3VuaWZvcm0gZmxvYXQgY29udHJhc3Q7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2NvbG9yLnJnYis9YnJpZ2h0bmVzcztpZihjb250cmFzdD4wLjApe2NvbG9yLnJnYj0oY29sb3IucmdiLTAuNSkvKDEuMC1jb250cmFzdCkrMC41O31lbHNle2NvbG9yLnJnYj0oY29sb3IucmdiLTAuNSkqKDEuMCtjb250cmFzdCkrMC41O31nbF9GcmFnQ29sb3I9Y29sb3I7fVwiKTtcbmYuY2FsbCh0aGlzLGEuYnJpZ2h0bmVzc0NvbnRyYXN0LHticmlnaHRuZXNzOnEoLTEsYiwxKSxjb250cmFzdDpxKC0xLGQsMSl9KTtyZXR1cm4gdGhpc31mdW5jdGlvbiB0KGEpe2E9bmV3IHooYSk7Zm9yKHZhciBkPVtdLGM9MDsyNTY+YztjKyspZC5wdXNoKHEoMCxNYXRoLmZsb29yKDI1NiphLmludGVycG9sYXRlKGMvMjU1KSksMjU1KSk7cmV0dXJuIGR9ZnVuY3Rpb24gTShiLGQsYyl7Yj10KGIpOzE9PWFyZ3VtZW50cy5sZW5ndGg/ZD1jPWI6KGQ9dChkKSxjPXQoYykpO2Zvcih2YXIgZT1bXSxnPTA7MjU2Pmc7ZysrKWUuc3BsaWNlKGUubGVuZ3RoLDAsYltnXSxkW2ddLGNbZ10sMjU1KTt0aGlzLl8uZXh0cmFUZXh0dXJlLmluaXRGcm9tQnl0ZXMoMjU2LDEsZSk7dGhpcy5fLmV4dHJhVGV4dHVyZS51c2UoMSk7YS5jdXJ2ZXM9YS5jdXJ2ZXN8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gc2FtcGxlcjJEIG1hcDt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7Y29sb3Iucj10ZXh0dXJlMkQobWFwLHZlYzIoY29sb3IucikpLnI7Y29sb3IuZz10ZXh0dXJlMkQobWFwLHZlYzIoY29sb3IuZykpLmc7Y29sb3IuYj10ZXh0dXJlMkQobWFwLHZlYzIoY29sb3IuYikpLmI7Z2xfRnJhZ0NvbG9yPWNvbG9yO31cIik7XG5hLmN1cnZlcy50ZXh0dXJlcyh7bWFwOjF9KTtmLmNhbGwodGhpcyxhLmN1cnZlcyx7fSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gTihiLGQpe2EudW5zaGFycE1hc2s9YS51bnNoYXJwTWFza3x8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIGJsdXJyZWRUZXh0dXJlO3VuaWZvcm0gc2FtcGxlcjJEIG9yaWdpbmFsVGV4dHVyZTt1bmlmb3JtIGZsb2F0IHN0cmVuZ3RoO3VuaWZvcm0gZmxvYXQgdGhyZXNob2xkO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWM0IGJsdXJyZWQ9dGV4dHVyZTJEKGJsdXJyZWRUZXh0dXJlLHRleENvb3JkKTt2ZWM0IG9yaWdpbmFsPXRleHR1cmUyRChvcmlnaW5hbFRleHR1cmUsdGV4Q29vcmQpO2dsX0ZyYWdDb2xvcj1taXgoYmx1cnJlZCxvcmlnaW5hbCwxLjArc3RyZW5ndGgpO31cIik7XG50aGlzLl8uZXh0cmFUZXh0dXJlLmVuc3VyZUZvcm1hdCh0aGlzLl8udGV4dHVyZSk7dGhpcy5fLnRleHR1cmUudXNlKCk7dGhpcy5fLmV4dHJhVGV4dHVyZS5kcmF3VG8oZnVuY3Rpb24oKXtoLmdldERlZmF1bHRTaGFkZXIoKS5kcmF3UmVjdCgpfSk7dGhpcy5fLmV4dHJhVGV4dHVyZS51c2UoMSk7dGhpcy50cmlhbmdsZUJsdXIoYik7YS51bnNoYXJwTWFzay50ZXh0dXJlcyh7b3JpZ2luYWxUZXh0dXJlOjF9KTtmLmNhbGwodGhpcyxhLnVuc2hhcnBNYXNrLHtzdHJlbmd0aDpkfSk7dGhpcy5fLmV4dHJhVGV4dHVyZS51bnVzZSgxKTtyZXR1cm4gdGhpc31mdW5jdGlvbiBPKGIpe2Euc2VwaWE9YS5zZXBpYXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBhbW91bnQ7dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IHI9Y29sb3IucjtmbG9hdCBnPWNvbG9yLmc7ZmxvYXQgYj1jb2xvci5iO2NvbG9yLnI9bWluKDEuMCwociooMS4wLSgwLjYwNyphbW91bnQpKSkrKGcqKDAuNzY5KmFtb3VudCkpKyhiKigwLjE4OSphbW91bnQpKSk7Y29sb3IuZz1taW4oMS4wLChyKjAuMzQ5KmFtb3VudCkrKGcqKDEuMC0oMC4zMTQqYW1vdW50KSkpKyhiKjAuMTY4KmFtb3VudCkpO2NvbG9yLmI9bWluKDEuMCwociowLjI3MiphbW91bnQpKyhnKjAuNTM0KmFtb3VudCkrKGIqKDEuMC0oMC44NjkqYW1vdW50KSkpKTtnbF9GcmFnQ29sb3I9Y29sb3I7fVwiKTtcbmYuY2FsbCh0aGlzLGEuc2VwaWEse2Ftb3VudDpxKDAsYiwxKX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFAoYixkKXthLmh1ZVNhdHVyYXRpb249YS5odWVTYXR1cmF0aW9ufHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIGZsb2F0IGh1ZTt1bmlmb3JtIGZsb2F0IHNhdHVyYXRpb247dmFyeWluZyB2ZWMyIHRleENvb3JkO3ZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IGFuZ2xlPWh1ZSozLjE0MTU5MjY1O2Zsb2F0IHM9c2luKGFuZ2xlKSxjPWNvcyhhbmdsZSk7dmVjMyB3ZWlnaHRzPSh2ZWMzKDIuMCpjLC1zcXJ0KDMuMCkqcy1jLHNxcnQoMy4wKSpzLWMpKzEuMCkvMy4wO2Zsb2F0IGxlbj1sZW5ndGgoY29sb3IucmdiKTtjb2xvci5yZ2I9dmVjMyhkb3QoY29sb3IucmdiLHdlaWdodHMueHl6KSxkb3QoY29sb3IucmdiLHdlaWdodHMuenh5KSxkb3QoY29sb3IucmdiLHdlaWdodHMueXp4KSk7ZmxvYXQgYXZlcmFnZT0oY29sb3Iucitjb2xvci5nK2NvbG9yLmIpLzMuMDtpZihzYXR1cmF0aW9uPjAuMCl7Y29sb3IucmdiKz0oYXZlcmFnZS1jb2xvci5yZ2IpKigxLjAtMS4wLygxLjAwMS1zYXR1cmF0aW9uKSk7fWVsc2V7Y29sb3IucmdiKz0oYXZlcmFnZS1jb2xvci5yZ2IpKigtc2F0dXJhdGlvbik7fWdsX0ZyYWdDb2xvcj1jb2xvcjt9XCIpO1xuZi5jYWxsKHRoaXMsYS5odWVTYXR1cmF0aW9uLHtodWU6cSgtMSxiLDEpLHNhdHVyYXRpb246cSgtMSxkLDEpfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gUShiLGQsYyl7YS56b29tQmx1cj1hLnpvb21CbHVyfHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgY2VudGVyO3VuaWZvcm0gZmxvYXQgc3RyZW5ndGg7dW5pZm9ybSB2ZWMyIHRleFNpemU7dmFyeWluZyB2ZWMyIHRleENvb3JkO1wiK3MrXCJ2b2lkIG1haW4oKXt2ZWM0IGNvbG9yPXZlYzQoMC4wKTtmbG9hdCB0b3RhbD0wLjA7dmVjMiB0b0NlbnRlcj1jZW50ZXItdGV4Q29vcmQqdGV4U2l6ZTtmbG9hdCBvZmZzZXQ9cmFuZG9tKHZlYzMoMTIuOTg5OCw3OC4yMzMsMTUxLjcxODIpLDAuMCk7Zm9yKGZsb2F0IHQ9MC4wO3Q8PTQwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldCkvNDAuMDtmbG9hdCB3ZWlnaHQ9NC4wKihwZXJjZW50LXBlcmNlbnQqcGVyY2VudCk7dmVjNCBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrdG9DZW50ZXIqcGVyY2VudCpzdHJlbmd0aC90ZXhTaXplKTtzYW1wbGUucmdiKj1zYW1wbGUuYTtjb2xvcis9c2FtcGxlKndlaWdodDt0b3RhbCs9d2VpZ2h0O31nbF9GcmFnQ29sb3I9Y29sb3IvdG90YWw7Z2xfRnJhZ0NvbG9yLnJnYi89Z2xfRnJhZ0NvbG9yLmErMC4wMDAwMTt9XCIpO1xuZi5jYWxsKHRoaXMsYS56b29tQmx1cix7Y2VudGVyOltiLGRdLHN0cmVuZ3RoOmMsdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBSKGIsZCxjLGUsZyxuKXthLnRpbHRTaGlmdD1hLnRpbHRTaGlmdHx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBibHVyUmFkaXVzO3VuaWZvcm0gZmxvYXQgZ3JhZGllbnRSYWRpdXM7dW5pZm9ybSB2ZWMyIHN0YXJ0O3VuaWZvcm0gdmVjMiBlbmQ7dW5pZm9ybSB2ZWMyIGRlbHRhO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcIitzK1widm9pZCBtYWluKCl7dmVjNCBjb2xvcj12ZWM0KDAuMCk7ZmxvYXQgdG90YWw9MC4wO2Zsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTt2ZWMyIG5vcm1hbD1ub3JtYWxpemUodmVjMihzdGFydC55LWVuZC55LGVuZC54LXN0YXJ0LngpKTtmbG9hdCByYWRpdXM9c21vb3Roc3RlcCgwLjAsMS4wLGFicyhkb3QodGV4Q29vcmQqdGV4U2l6ZS1zdGFydCxub3JtYWwpKS9ncmFkaWVudFJhZGl1cykqYmx1clJhZGl1cztmb3IoZmxvYXQgdD0tMzAuMDt0PD0zMC4wO3QrKyl7ZmxvYXQgcGVyY2VudD0odCtvZmZzZXQtMC41KS8zMC4wO2Zsb2F0IHdlaWdodD0xLjAtYWJzKHBlcmNlbnQpO3ZlYzQgc2FtcGxlPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkK2RlbHRhL3RleFNpemUqcGVyY2VudCpyYWRpdXMpO3NhbXBsZS5yZ2IqPXNhbXBsZS5hO2NvbG9yKz1zYW1wbGUqd2VpZ2h0O3RvdGFsKz13ZWlnaHQ7fWdsX0ZyYWdDb2xvcj1jb2xvci90b3RhbDtnbF9GcmFnQ29sb3IucmdiLz1nbF9GcmFnQ29sb3IuYSswLjAwMDAxO31cIik7XG52YXIgbD1jLWIscD1lLWQsbT1NYXRoLnNxcnQobCpsK3AqcCk7Zi5jYWxsKHRoaXMsYS50aWx0U2hpZnQse2JsdXJSYWRpdXM6ZyxncmFkaWVudFJhZGl1czpuLHN0YXJ0OltiLGRdLGVuZDpbYyxlXSxkZWx0YTpbbC9tLHAvbV0sdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtmLmNhbGwodGhpcyxhLnRpbHRTaGlmdCx7Ymx1clJhZGl1czpnLGdyYWRpZW50UmFkaXVzOm4sc3RhcnQ6W2IsZF0sZW5kOltjLGVdLGRlbHRhOlstcC9tLGwvbV0sdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBTKGIsZCxjKXthLmxlbnNCbHVyUHJlUGFzcz1hLmxlbnNCbHVyUHJlUGFzc3x8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBwb3dlcjt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjNCBjb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx0ZXhDb29yZCk7Y29sb3I9cG93KGNvbG9yLHZlYzQocG93ZXIpKTtnbF9GcmFnQ29sb3I9dmVjNChjb2xvcik7fVwiKTtcbnZhciBlPVwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7dW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7dW5pZm9ybSB2ZWMyIGRlbHRhMDt1bmlmb3JtIHZlYzIgZGVsdGExO3VuaWZvcm0gZmxvYXQgcG93ZXI7dmFyeWluZyB2ZWMyIHRleENvb3JkO1wiK3MrXCJ2ZWM0IHNhbXBsZSh2ZWMyIGRlbHRhKXtmbG9hdCBvZmZzZXQ9cmFuZG9tKHZlYzMoZGVsdGEsMTUxLjcxODIpLDAuMCk7dmVjNCBjb2xvcj12ZWM0KDAuMCk7ZmxvYXQgdG90YWw9MC4wO2ZvcihmbG9hdCB0PTAuMDt0PD0zMC4wO3QrKyl7ZmxvYXQgcGVyY2VudD0odCtvZmZzZXQpLzMwLjA7Y29sb3IrPXRleHR1cmUyRCh0ZXh0dXJlMCx0ZXhDb29yZCtkZWx0YSpwZXJjZW50KTt0b3RhbCs9MS4wO31yZXR1cm4gY29sb3IvdG90YWw7fVwiO1xuYS5sZW5zQmx1cjA9YS5sZW5zQmx1cjB8fG5ldyBoKG51bGwsZStcInZvaWQgbWFpbigpe2dsX0ZyYWdDb2xvcj1zYW1wbGUoZGVsdGEwKTt9XCIpO2EubGVuc0JsdXIxPWEubGVuc0JsdXIxfHxuZXcgaChudWxsLGUrXCJ2b2lkIG1haW4oKXtnbF9GcmFnQ29sb3I9KHNhbXBsZShkZWx0YTApK3NhbXBsZShkZWx0YTEpKSowLjU7fVwiKTthLmxlbnNCbHVyMj1hLmxlbnNCbHVyMnx8KG5ldyBoKG51bGwsZStcInZvaWQgbWFpbigpe3ZlYzQgY29sb3I9KHNhbXBsZShkZWx0YTApKzIuMCp0ZXh0dXJlMkQodGV4dHVyZTEsdGV4Q29vcmQpKS8zLjA7Z2xfRnJhZ0NvbG9yPXBvdyhjb2xvcix2ZWM0KHBvd2VyKSk7fVwiKSkudGV4dHVyZXMoe3RleHR1cmUxOjF9KTtmb3IodmFyIGU9XG5bXSxnPTA7Mz5nO2crKyl7dmFyIG49YysyKmcqTWF0aC5QSS8zO2UucHVzaChbYipNYXRoLnNpbihuKS90aGlzLndpZHRoLGIqTWF0aC5jb3MobikvdGhpcy5oZWlnaHRdKX1iPU1hdGgucG93KDEwLHEoLTEsZCwxKSk7Zi5jYWxsKHRoaXMsYS5sZW5zQmx1clByZVBhc3Mse3Bvd2VyOmJ9KTt0aGlzLl8uZXh0cmFUZXh0dXJlLmVuc3VyZUZvcm1hdCh0aGlzLl8udGV4dHVyZSk7Zi5jYWxsKHRoaXMsYS5sZW5zQmx1cjAse2RlbHRhMDplWzBdfSx0aGlzLl8udGV4dHVyZSx0aGlzLl8uZXh0cmFUZXh0dXJlKTtmLmNhbGwodGhpcyxhLmxlbnNCbHVyMSx7ZGVsdGEwOmVbMV0sZGVsdGExOmVbMl19LHRoaXMuXy5leHRyYVRleHR1cmUsdGhpcy5fLmV4dHJhVGV4dHVyZSk7Zi5jYWxsKHRoaXMsYS5sZW5zQmx1cjAse2RlbHRhMDplWzFdfSk7dGhpcy5fLmV4dHJhVGV4dHVyZS51c2UoMSk7Zi5jYWxsKHRoaXMsYS5sZW5zQmx1cjIse3Bvd2VyOjEvYixkZWx0YTA6ZVsyXX0pO3JldHVybiB0aGlzfVxuZnVuY3Rpb24gVChiKXthLnRyaWFuZ2xlQmx1cj1hLnRyaWFuZ2xlQmx1cnx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIGRlbHRhO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcIitzK1widm9pZCBtYWluKCl7dmVjNCBjb2xvcj12ZWM0KDAuMCk7ZmxvYXQgdG90YWw9MC4wO2Zsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTtmb3IoZmxvYXQgdD0tMzAuMDt0PD0zMC4wO3QrKyl7ZmxvYXQgcGVyY2VudD0odCtvZmZzZXQtMC41KS8zMC4wO2Zsb2F0IHdlaWdodD0xLjAtYWJzKHBlcmNlbnQpO3ZlYzQgc2FtcGxlPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkK2RlbHRhKnBlcmNlbnQpO3NhbXBsZS5yZ2IqPXNhbXBsZS5hO2NvbG9yKz1zYW1wbGUqd2VpZ2h0O3RvdGFsKz13ZWlnaHQ7fWdsX0ZyYWdDb2xvcj1jb2xvci90b3RhbDtnbF9GcmFnQ29sb3IucmdiLz1nbF9GcmFnQ29sb3IuYSswLjAwMDAxO31cIik7XG5mLmNhbGwodGhpcyxhLnRyaWFuZ2xlQmx1cix7ZGVsdGE6W2IvdGhpcy53aWR0aCwwXX0pO2YuY2FsbCh0aGlzLGEudHJpYW5nbGVCbHVyLHtkZWx0YTpbMCxiL3RoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFUoYil7YS5lZGdlV29yazE9YS5lZGdlV29yazF8fG5ldyBoKG51bGwsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3VuaWZvcm0gdmVjMiBkZWx0YTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7XCIrcytcInZvaWQgbWFpbigpe3ZlYzIgY29sb3I9dmVjMigwLjApO3ZlYzIgdG90YWw9dmVjMigwLjApO2Zsb2F0IG9mZnNldD1yYW5kb20odmVjMygxMi45ODk4LDc4LjIzMywxNTEuNzE4MiksMC4wKTtmb3IoZmxvYXQgdD0tMzAuMDt0PD0zMC4wO3QrKyl7ZmxvYXQgcGVyY2VudD0odCtvZmZzZXQtMC41KS8zMC4wO2Zsb2F0IHdlaWdodD0xLjAtYWJzKHBlcmNlbnQpO3ZlYzMgc2FtcGxlPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkK2RlbHRhKnBlcmNlbnQpLnJnYjtmbG9hdCBhdmVyYWdlPShzYW1wbGUucitzYW1wbGUuZytzYW1wbGUuYikvMy4wO2NvbG9yLngrPWF2ZXJhZ2Uqd2VpZ2h0O3RvdGFsLngrPXdlaWdodDtpZihhYnModCk8MTUuMCl7d2VpZ2h0PXdlaWdodCoyLjAtMS4wO2NvbG9yLnkrPWF2ZXJhZ2Uqd2VpZ2h0O3RvdGFsLnkrPXdlaWdodDt9fWdsX0ZyYWdDb2xvcj12ZWM0KGNvbG9yL3RvdGFsLDAuMCwxLjApO31cIik7XG5hLmVkZ2VXb3JrMj1hLmVkZ2VXb3JrMnx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIGRlbHRhO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDtcIitzK1widm9pZCBtYWluKCl7dmVjMiBjb2xvcj12ZWMyKDAuMCk7dmVjMiB0b3RhbD12ZWMyKDAuMCk7ZmxvYXQgb2Zmc2V0PXJhbmRvbSh2ZWMzKDEyLjk4OTgsNzguMjMzLDE1MS43MTgyKSwwLjApO2ZvcihmbG9hdCB0PS0zMC4wO3Q8PTMwLjA7dCsrKXtmbG9hdCBwZXJjZW50PSh0K29mZnNldC0wLjUpLzMwLjA7ZmxvYXQgd2VpZ2h0PTEuMC1hYnMocGVyY2VudCk7dmVjMiBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrZGVsdGEqcGVyY2VudCkueHk7Y29sb3IueCs9c2FtcGxlLngqd2VpZ2h0O3RvdGFsLngrPXdlaWdodDtpZihhYnModCk8MTUuMCl7d2VpZ2h0PXdlaWdodCoyLjAtMS4wO2NvbG9yLnkrPXNhbXBsZS55KndlaWdodDt0b3RhbC55Kz13ZWlnaHQ7fX1mbG9hdCBjPWNsYW1wKDEwMDAwLjAqKGNvbG9yLnkvdG90YWwueS1jb2xvci54L3RvdGFsLngpKzAuNSwwLjAsMS4wKTtnbF9GcmFnQ29sb3I9dmVjNChjLGMsYywxLjApO31cIik7XG5mLmNhbGwodGhpcyxhLmVkZ2VXb3JrMSx7ZGVsdGE6W2IvdGhpcy53aWR0aCwwXX0pO2YuY2FsbCh0aGlzLGEuZWRnZVdvcmsyLHtkZWx0YTpbMCxiL3RoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFYoYixkLGMpe2EuaGV4YWdvbmFsUGl4ZWxhdGU9YS5oZXhhZ29uYWxQaXhlbGF0ZXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIGNlbnRlcjt1bmlmb3JtIGZsb2F0IHNjYWxlO3VuaWZvcm0gdmVjMiB0ZXhTaXplO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt2ZWMyIHRleD0odGV4Q29vcmQqdGV4U2l6ZS1jZW50ZXIpL3NjYWxlO3RleC55Lz0wLjg2NjAyNTQwNDt0ZXgueC09dGV4LnkqMC41O3ZlYzIgYTtpZih0ZXgueCt0ZXgueS1mbG9vcih0ZXgueCktZmxvb3IodGV4LnkpPDEuMClhPXZlYzIoZmxvb3IodGV4LngpLGZsb29yKHRleC55KSk7ZWxzZSBhPXZlYzIoY2VpbCh0ZXgueCksY2VpbCh0ZXgueSkpO3ZlYzIgYj12ZWMyKGNlaWwodGV4LngpLGZsb29yKHRleC55KSk7dmVjMiBjPXZlYzIoZmxvb3IodGV4LngpLGNlaWwodGV4LnkpKTt2ZWMzIFRFWD12ZWMzKHRleC54LHRleC55LDEuMC10ZXgueC10ZXgueSk7dmVjMyBBPXZlYzMoYS54LGEueSwxLjAtYS54LWEueSk7dmVjMyBCPXZlYzMoYi54LGIueSwxLjAtYi54LWIueSk7dmVjMyBDPXZlYzMoYy54LGMueSwxLjAtYy54LWMueSk7ZmxvYXQgYWxlbj1sZW5ndGgoVEVYLUEpO2Zsb2F0IGJsZW49bGVuZ3RoKFRFWC1CKTtmbG9hdCBjbGVuPWxlbmd0aChURVgtQyk7dmVjMiBjaG9pY2U7aWYoYWxlbjxibGVuKXtpZihhbGVuPGNsZW4pY2hvaWNlPWE7ZWxzZSBjaG9pY2U9Yzt9ZWxzZXtpZihibGVuPGNsZW4pY2hvaWNlPWI7ZWxzZSBjaG9pY2U9Yzt9Y2hvaWNlLngrPWNob2ljZS55KjAuNTtjaG9pY2UueSo9MC44NjYwMjU0MDQ7Y2hvaWNlKj1zY2FsZS90ZXhTaXplO2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQodGV4dHVyZSxjaG9pY2UrY2VudGVyL3RleFNpemUpO31cIik7XG5mLmNhbGwodGhpcyxhLmhleGFnb25hbFBpeGVsYXRlLHtjZW50ZXI6W2IsZF0sc2NhbGU6Yyx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIFcoYixkLGMsZSl7YS5jb2xvckhhbGZ0b25lPWEuY29sb3JIYWxmdG9uZXx8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSB2ZWMyIGNlbnRlcjt1bmlmb3JtIGZsb2F0IGFuZ2xlO3VuaWZvcm0gZmxvYXQgc2NhbGU7dW5pZm9ybSB2ZWMyIHRleFNpemU7dmFyeWluZyB2ZWMyIHRleENvb3JkO2Zsb2F0IHBhdHRlcm4oZmxvYXQgYW5nbGUpe2Zsb2F0IHM9c2luKGFuZ2xlKSxjPWNvcyhhbmdsZSk7dmVjMiB0ZXg9dGV4Q29vcmQqdGV4U2l6ZS1jZW50ZXI7dmVjMiBwb2ludD12ZWMyKGMqdGV4Lngtcyp0ZXgueSxzKnRleC54K2MqdGV4LnkpKnNjYWxlO3JldHVybihzaW4ocG9pbnQueCkqc2luKHBvaW50LnkpKSo0LjA7fXZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO3ZlYzMgY215PTEuMC1jb2xvci5yZ2I7ZmxvYXQgaz1taW4oY215LngsbWluKGNteS55LGNteS56KSk7Y215PShjbXktaykvKDEuMC1rKTtjbXk9Y2xhbXAoY215KjEwLjAtMy4wK3ZlYzMocGF0dGVybihhbmdsZSswLjI2MTc5KSxwYXR0ZXJuKGFuZ2xlKzEuMzA4OTkpLHBhdHRlcm4oYW5nbGUpKSwwLjAsMS4wKTtrPWNsYW1wKGsqMTAuMC01LjArcGF0dGVybihhbmdsZSswLjc4NTM5KSwwLjAsMS4wKTtnbF9GcmFnQ29sb3I9dmVjNCgxLjAtY215LWssY29sb3IuYSk7fVwiKTtcbmYuY2FsbCh0aGlzLGEuY29sb3JIYWxmdG9uZSx7Y2VudGVyOltiLGRdLGFuZ2xlOmMsc2NhbGU6TWF0aC5QSS9lLHRleFNpemU6W3RoaXMud2lkdGgsdGhpcy5oZWlnaHRdfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gWChiKXthLmluaz1hLmlua3x8bmV3IGgobnVsbCxcInVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7dW5pZm9ybSBmbG9hdCBzdHJlbmd0aDt1bmlmb3JtIHZlYzIgdGV4U2l6ZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7dmVjMiBkeD12ZWMyKDEuMC90ZXhTaXplLngsMC4wKTt2ZWMyIGR5PXZlYzIoMC4wLDEuMC90ZXhTaXplLnkpO3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IGJpZ1RvdGFsPTAuMDtmbG9hdCBzbWFsbFRvdGFsPTAuMDt2ZWMzIGJpZ0F2ZXJhZ2U9dmVjMygwLjApO3ZlYzMgc21hbGxBdmVyYWdlPXZlYzMoMC4wKTtmb3IoZmxvYXQgeD0tMi4wO3g8PTIuMDt4Kz0xLjApe2ZvcihmbG9hdCB5PS0yLjA7eTw9Mi4wO3krPTEuMCl7dmVjMyBzYW1wbGU9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQrZHgqeCtkeSp5KS5yZ2I7YmlnQXZlcmFnZSs9c2FtcGxlO2JpZ1RvdGFsKz0xLjA7aWYoYWJzKHgpK2Ficyh5KTwyLjApe3NtYWxsQXZlcmFnZSs9c2FtcGxlO3NtYWxsVG90YWwrPTEuMDt9fX12ZWMzIGVkZ2U9bWF4KHZlYzMoMC4wKSxiaWdBdmVyYWdlL2JpZ1RvdGFsLXNtYWxsQXZlcmFnZS9zbWFsbFRvdGFsKTtnbF9GcmFnQ29sb3I9dmVjNChjb2xvci5yZ2ItZG90KGVkZ2UsZWRnZSkqc3RyZW5ndGgqMTAwMDAwLjAsY29sb3IuYSk7fVwiKTtcbmYuY2FsbCh0aGlzLGEuaW5rLHtzdHJlbmd0aDpiKmIqYipiKmIsdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBZKGIsZCxjLGUpe2EuZG90U2NyZWVuPWEuZG90U2NyZWVufHxuZXcgaChudWxsLFwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt1bmlmb3JtIHZlYzIgY2VudGVyO3VuaWZvcm0gZmxvYXQgYW5nbGU7dW5pZm9ybSBmbG9hdCBzY2FsZTt1bmlmb3JtIHZlYzIgdGV4U2l6ZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7ZmxvYXQgcGF0dGVybigpe2Zsb2F0IHM9c2luKGFuZ2xlKSxjPWNvcyhhbmdsZSk7dmVjMiB0ZXg9dGV4Q29vcmQqdGV4U2l6ZS1jZW50ZXI7dmVjMiBwb2ludD12ZWMyKGMqdGV4Lngtcyp0ZXgueSxzKnRleC54K2MqdGV4LnkpKnNjYWxlO3JldHVybihzaW4ocG9pbnQueCkqc2luKHBvaW50LnkpKSo0LjA7fXZvaWQgbWFpbigpe3ZlYzQgY29sb3I9dGV4dHVyZTJEKHRleHR1cmUsdGV4Q29vcmQpO2Zsb2F0IGF2ZXJhZ2U9KGNvbG9yLnIrY29sb3IuZytjb2xvci5iKS8zLjA7Z2xfRnJhZ0NvbG9yPXZlYzQodmVjMyhhdmVyYWdlKjEwLjAtNS4wK3BhdHRlcm4oKSksY29sb3IuYSk7fVwiKTtcbmYuY2FsbCh0aGlzLGEuZG90U2NyZWVuLHtjZW50ZXI6W2IsZF0sYW5nbGU6YyxzY2FsZTpNYXRoLlBJL2UsdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBaKGIsZCxjKXthLm1hdHJpeFdhcnA9YS5tYXRyaXhXYXJwfHx1KFwidW5pZm9ybSBtYXQzIG1hdHJpeDt1bmlmb3JtIGJvb2wgdXNlVGV4dHVyZVNwYWNlO1wiLFwiaWYodXNlVGV4dHVyZVNwYWNlKWNvb3JkPWNvb3JkL3RleFNpemUqMi4wLTEuMDt2ZWMzIHdhcnA9bWF0cml4KnZlYzMoY29vcmQsMS4wKTtjb29yZD13YXJwLnh5L3dhcnAuejtpZih1c2VUZXh0dXJlU3BhY2UpY29vcmQ9KGNvb3JkKjAuNSswLjUpKnRleFNpemU7XCIpO2I9QXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSxiKTtpZig0PT1iLmxlbmd0aCliPVxuW2JbMF0sYlsxXSwwLGJbMl0sYlszXSwwLDAsMCwxXTtlbHNlIGlmKDkhPWIubGVuZ3RoKXRocm93XCJjYW4gb25seSB3YXJwIHdpdGggMngyIG9yIDN4MyBtYXRyaXhcIjtmLmNhbGwodGhpcyxhLm1hdHJpeFdhcnAse21hdHJpeDpkP3koYik6Yix0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XSx1c2VUZXh0dXJlU3BhY2U6Y3wwfSk7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gJChiLGQsYyxlKXthLnN3aXJsPWEuc3dpcmx8fHUoXCJ1bmlmb3JtIGZsb2F0IHJhZGl1czt1bmlmb3JtIGZsb2F0IGFuZ2xlO3VuaWZvcm0gdmVjMiBjZW50ZXI7XCIsXCJjb29yZC09Y2VudGVyO2Zsb2F0IGRpc3RhbmNlPWxlbmd0aChjb29yZCk7aWYoZGlzdGFuY2U8cmFkaXVzKXtmbG9hdCBwZXJjZW50PShyYWRpdXMtZGlzdGFuY2UpL3JhZGl1cztmbG9hdCB0aGV0YT1wZXJjZW50KnBlcmNlbnQqYW5nbGU7ZmxvYXQgcz1zaW4odGhldGEpO2Zsb2F0IGM9Y29zKHRoZXRhKTtjb29yZD12ZWMyKGNvb3JkLngqYy1jb29yZC55KnMsY29vcmQueCpzK2Nvb3JkLnkqYyk7fWNvb3JkKz1jZW50ZXI7XCIpO1xuZi5jYWxsKHRoaXMsYS5zd2lybCx7cmFkaXVzOmMsY2VudGVyOltiLGRdLGFuZ2xlOmUsdGV4U2l6ZTpbdGhpcy53aWR0aCx0aGlzLmhlaWdodF19KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBhYShiLGQsYyxlKXthLmJ1bGdlUGluY2g9YS5idWxnZVBpbmNofHx1KFwidW5pZm9ybSBmbG9hdCByYWRpdXM7dW5pZm9ybSBmbG9hdCBzdHJlbmd0aDt1bmlmb3JtIHZlYzIgY2VudGVyO1wiLFwiY29vcmQtPWNlbnRlcjtmbG9hdCBkaXN0YW5jZT1sZW5ndGgoY29vcmQpO2lmKGRpc3RhbmNlPHJhZGl1cyl7ZmxvYXQgcGVyY2VudD1kaXN0YW5jZS9yYWRpdXM7aWYoc3RyZW5ndGg+MC4wKXtjb29yZCo9bWl4KDEuMCxzbW9vdGhzdGVwKDAuMCxyYWRpdXMvZGlzdGFuY2UscGVyY2VudCksc3RyZW5ndGgqMC43NSk7fWVsc2V7Y29vcmQqPW1peCgxLjAscG93KHBlcmNlbnQsMS4wK3N0cmVuZ3RoKjAuNzUpKnJhZGl1cy9kaXN0YW5jZSwxLjAtcGVyY2VudCk7fX1jb29yZCs9Y2VudGVyO1wiKTtcbmYuY2FsbCh0aGlzLGEuYnVsZ2VQaW5jaCx7cmFkaXVzOmMsc3RyZW5ndGg6cSgtMSxlLDEpLGNlbnRlcjpbYixkXSx0ZXhTaXplOlt0aGlzLndpZHRoLHRoaXMuaGVpZ2h0XX0pO3JldHVybiB0aGlzfWZ1bmN0aW9uIGJhKGEsZCl7dmFyIGM9eC5hcHBseShudWxsLGQpLGU9eC5hcHBseShudWxsLGEpLGM9eShjKTtyZXR1cm4gdGhpcy5tYXRyaXhXYXJwKFtjWzBdKmVbMF0rY1sxXSplWzNdK2NbMl0qZVs2XSxjWzBdKmVbMV0rY1sxXSplWzRdK2NbMl0qZVs3XSxjWzBdKmVbMl0rY1sxXSplWzVdK2NbMl0qZVs4XSxjWzNdKmVbMF0rY1s0XSplWzNdK2NbNV0qZVs2XSxjWzNdKmVbMV0rY1s0XSplWzRdK2NbNV0qZVs3XSxjWzNdKmVbMl0rY1s0XSplWzVdK2NbNV0qZVs4XSxjWzZdKmVbMF0rY1s3XSplWzNdK2NbOF0qZVs2XSxjWzZdKmVbMV0rY1s3XSplWzRdK2NbOF0qZVs3XSxjWzZdKmVbMl0rY1s3XSplWzVdK2NbOF0qZVs4XV0pfXZhciB2PXt9OyhmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYil7aWYoIWIuZ2V0RXh0ZW5zaW9uKFwiT0VTX3RleHR1cmVfZmxvYXRcIikpcmV0dXJuITE7XG52YXIgYz1iLmNyZWF0ZUZyYW1lYnVmZmVyKCksZT1iLmNyZWF0ZVRleHR1cmUoKTtiLmJpbmRUZXh0dXJlKGIuVEVYVFVSRV8yRCxlKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9NQUdfRklMVEVSLGIuTkVBUkVTVCk7Yi50ZXhQYXJhbWV0ZXJpKGIuVEVYVFVSRV8yRCxiLlRFWFRVUkVfTUlOX0ZJTFRFUixiLk5FQVJFU1QpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX1dSQVBfUyxiLkNMQU1QX1RPX0VER0UpO2IudGV4UGFyYW1ldGVyaShiLlRFWFRVUkVfMkQsYi5URVhUVVJFX1dSQVBfVCxiLkNMQU1QX1RPX0VER0UpO2IudGV4SW1hZ2UyRChiLlRFWFRVUkVfMkQsMCxiLlJHQkEsMSwxLDAsYi5SR0JBLGIuVU5TSUdORURfQllURSxudWxsKTtiLmJpbmRGcmFtZWJ1ZmZlcihiLkZSQU1FQlVGRkVSLGMpO2IuZnJhbWVidWZmZXJUZXh0dXJlMkQoYi5GUkFNRUJVRkZFUixiLkNPTE9SX0FUVEFDSE1FTlQwLGIuVEVYVFVSRV8yRCxcbmUsMCk7Yz1iLmNyZWF0ZVRleHR1cmUoKTtiLmJpbmRUZXh0dXJlKGIuVEVYVFVSRV8yRCxjKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9NQUdfRklMVEVSLGIuTElORUFSKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9NSU5fRklMVEVSLGIuTElORUFSKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9XUkFQX1MsYi5DTEFNUF9UT19FREdFKTtiLnRleFBhcmFtZXRlcmkoYi5URVhUVVJFXzJELGIuVEVYVFVSRV9XUkFQX1QsYi5DTEFNUF9UT19FREdFKTtiLnRleEltYWdlMkQoYi5URVhUVVJFXzJELDAsYi5SR0JBLDIsMiwwLGIuUkdCQSxiLkZMT0FULG5ldyBGbG9hdDMyQXJyYXkoWzIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdKSk7dmFyIGU9Yi5jcmVhdGVQcm9ncmFtKCksZD1iLmNyZWF0ZVNoYWRlcihiLlZFUlRFWF9TSEFERVIpLGc9Yi5jcmVhdGVTaGFkZXIoYi5GUkFHTUVOVF9TSEFERVIpO1xuYi5zaGFkZXJTb3VyY2UoZCxcImF0dHJpYnV0ZSB2ZWMyIHZlcnRleDt2b2lkIG1haW4oKXtnbF9Qb3NpdGlvbj12ZWM0KHZlcnRleCwwLjAsMS4wKTt9XCIpO2Iuc2hhZGVyU291cmNlKGcsXCJ1bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO3ZvaWQgbWFpbigpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQodGV4dHVyZSx2ZWMyKDAuNSkpO31cIik7Yi5jb21waWxlU2hhZGVyKGQpO2IuY29tcGlsZVNoYWRlcihnKTtiLmF0dGFjaFNoYWRlcihlLGQpO2IuYXR0YWNoU2hhZGVyKGUsZyk7Yi5saW5rUHJvZ3JhbShlKTtkPWIuY3JlYXRlQnVmZmVyKCk7Yi5iaW5kQnVmZmVyKGIuQVJSQVlfQlVGRkVSLGQpO2IuYnVmZmVyRGF0YShiLkFSUkFZX0JVRkZFUixuZXcgRmxvYXQzMkFycmF5KFswLDBdKSxiLlNUUkVBTV9EUkFXKTtiLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xuYi52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsMixiLkZMT0FULCExLDAsMCk7ZD1uZXcgVWludDhBcnJheSg0KTtiLnVzZVByb2dyYW0oZSk7Yi52aWV3cG9ydCgwLDAsMSwxKTtiLmJpbmRUZXh0dXJlKGIuVEVYVFVSRV8yRCxjKTtiLmRyYXdBcnJheXMoYi5QT0lOVFMsMCwxKTtiLnJlYWRQaXhlbHMoMCwwLDEsMSxiLlJHQkEsYi5VTlNJR05FRF9CWVRFLGQpO3JldHVybiAxMjc9PT1kWzBdfHwxMjg9PT1kWzBdfWZ1bmN0aW9uIGQoKXt9ZnVuY3Rpb24gYyhhKXtcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiPT09YT8odm9pZCAwPT09dGhpcy4kT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCIkT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJFwiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx3cml0YWJsZTohMSx2YWx1ZTpuZXcgZH0pLGE9dGhpcy4kT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyJCk6YT1sLmNhbGwodGhpcyxhKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGUoKXt2YXIgYT1mLmNhbGwodGhpcyk7LTE9PT1hLmluZGV4T2YoXCJPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcIikmJmEucHVzaChcIk9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhclwiKTtyZXR1cm4gYX10cnl7dmFyIGc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpfWNhdGNoKG4pe31pZihnJiYtMT09PWcuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpLmluZGV4T2YoXCJPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcIikmJmEoZykpe3ZhciBsPVdlYkdMUmVuZGVyaW5nQ29udGV4dC5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uLGY9V2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZS5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zO1dlYkdMUmVuZGVyaW5nQ29udGV4dC5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uPWM7V2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZS5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zPWV9fSkoKTtcbnZhciBhO3YuY2FudmFzPWZ1bmN0aW9uKCl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTt0cnl7YT1iLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIix7cHJlbXVsdGlwbGllZEFscGhhOiExfSl9Y2F0Y2goZCl7YT1udWxsfWlmKCFhKXRocm93XCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWJHTFwiO2IuXz17Z2w6YSxpc0luaXRpYWxpemVkOiExLHRleHR1cmU6bnVsbCxzcGFyZVRleHR1cmU6bnVsbCxmbGlwcGVkU2hhZGVyOm51bGx9O2IudGV4dHVyZT1rKEEpO2IuZHJhdz1rKEMpO2IudXBkYXRlPWsoRCk7Yi5yZXBsYWNlPWsoRSk7Yi5jb250ZW50cz1rKEYpO2IuZ2V0UGl4ZWxBcnJheT1rKEcpO2IuYnJpZ2h0bmVzc0NvbnRyYXN0PWsoTCk7Yi5oZXhhZ29uYWxQaXhlbGF0ZT1rKFYpO2IuaHVlU2F0dXJhdGlvbj1rKFApO2IuY29sb3JIYWxmdG9uZT1rKFcpO2IudHJpYW5nbGVCbHVyPWsoVCk7Yi51bnNoYXJwTWFzaz1rKE4pO2IucGVyc3BlY3RpdmU9XG5rKGJhKTtiLm1hdHJpeFdhcnA9ayhaKTtiLmJ1bGdlUGluY2g9ayhhYSk7Yi50aWx0U2hpZnQ9ayhSKTtiLmRvdFNjcmVlbj1rKFkpO2IuZWRnZVdvcms9ayhVKTtiLmxlbnNCbHVyPWsoUyk7Yi56b29tQmx1cj1rKFEpO2Iubm9pc2U9ayhIKTtiLmRlbm9pc2U9ayhLKTtiLmN1cnZlcz1rKE0pO2Iuc3dpcmw9aygkKTtiLmluaz1rKFgpO2IudmlnbmV0dGU9ayhKKTtiLnZpYnJhbmNlPWsoSSk7Yi5zZXBpYT1rKE8pO3JldHVybiBifTt2LnNwbGluZUludGVycG9sYXRlPXQ7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGwpe3RoaXMuZ2w9YTt0aGlzLmlkPWEuY3JlYXRlVGV4dHVyZSgpO3RoaXMud2lkdGg9Yjt0aGlzLmhlaWdodD1jO3RoaXMuZm9ybWF0PWQ7dGhpcy50eXBlPWw7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsdGhpcy5pZCk7YS50ZXhQYXJhbWV0ZXJpKGEuVEVYVFVSRV8yRCxhLlRFWFRVUkVfTUFHX0ZJTFRFUixhLkxJTkVBUik7YS50ZXhQYXJhbWV0ZXJpKGEuVEVYVFVSRV8yRCxcbmEuVEVYVFVSRV9NSU5fRklMVEVSLGEuTElORUFSKTthLnRleFBhcmFtZXRlcmkoYS5URVhUVVJFXzJELGEuVEVYVFVSRV9XUkFQX1MsYS5DTEFNUF9UT19FREdFKTthLnRleFBhcmFtZXRlcmkoYS5URVhUVVJFXzJELGEuVEVYVFVSRV9XUkFQX1QsYS5DTEFNUF9UT19FREdFKTtiJiZjJiZhLnRleEltYWdlMkQoYS5URVhUVVJFXzJELDAsdGhpcy5mb3JtYXQsYixjLDAsdGhpcy5mb3JtYXQsdGhpcy50eXBlLG51bGwpfWZ1bmN0aW9uIGQoYSl7bnVsbD09YyYmKGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSk7Yy53aWR0aD1hLndpZHRoO2MuaGVpZ2h0PWEuaGVpZ2h0O2E9Yy5nZXRDb250ZXh0KFwiMmRcIik7YS5jbGVhclJlY3QoMCwwLGMud2lkdGgsYy5oZWlnaHQpO3JldHVybiBhfWIuZnJvbUVsZW1lbnQ9ZnVuY3Rpb24oYyl7dmFyIGQ9bmV3IGIoMCwwLGEuUkdCQSxhLlVOU0lHTkVEX0JZVEUpO2QubG9hZENvbnRlbnRzT2YoYyk7cmV0dXJuIGR9O2IucHJvdG90eXBlLmxvYWRDb250ZW50c09mPVxuZnVuY3Rpb24oYil7dGhpcy53aWR0aD1iLndpZHRofHxiLnZpZGVvV2lkdGg7dGhpcy5oZWlnaHQ9Yi5oZWlnaHR8fGIudmlkZW9IZWlnaHQ7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsdGhpcy5pZCk7YS50ZXhJbWFnZTJEKGEuVEVYVFVSRV8yRCwwLHRoaXMuZm9ybWF0LHRoaXMuZm9ybWF0LHRoaXMudHlwZSxiKX07Yi5wcm90b3R5cGUuaW5pdEZyb21CeXRlcz1mdW5jdGlvbihiLGMsZCl7dGhpcy53aWR0aD1iO3RoaXMuaGVpZ2h0PWM7dGhpcy5mb3JtYXQ9YS5SR0JBO3RoaXMudHlwZT1hLlVOU0lHTkVEX0JZVEU7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsdGhpcy5pZCk7YS50ZXhJbWFnZTJEKGEuVEVYVFVSRV8yRCwwLGEuUkdCQSxiLGMsMCxhLlJHQkEsdGhpcy50eXBlLG5ldyBVaW50OEFycmF5KGQpKX07Yi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe2EuZGVsZXRlVGV4dHVyZSh0aGlzLmlkKTt0aGlzLmlkPW51bGx9O2IucHJvdG90eXBlLnVzZT1mdW5jdGlvbihiKXthLmFjdGl2ZVRleHR1cmUoYS5URVhUVVJFMCtcbihifHwwKSk7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsdGhpcy5pZCl9O2IucHJvdG90eXBlLnVudXNlPWZ1bmN0aW9uKGIpe2EuYWN0aXZlVGV4dHVyZShhLlRFWFRVUkUwKyhifHwwKSk7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsbnVsbCl9O2IucHJvdG90eXBlLmVuc3VyZUZvcm1hdD1mdW5jdGlvbihiLGMsZCxsKXtpZigxPT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgZj1hcmd1bWVudHNbMF07Yj1mLndpZHRoO2M9Zi5oZWlnaHQ7ZD1mLmZvcm1hdDtsPWYudHlwZX1pZihiIT10aGlzLndpZHRofHxjIT10aGlzLmhlaWdodHx8ZCE9dGhpcy5mb3JtYXR8fGwhPXRoaXMudHlwZSl0aGlzLndpZHRoPWIsdGhpcy5oZWlnaHQ9Yyx0aGlzLmZvcm1hdD1kLHRoaXMudHlwZT1sLGEuYmluZFRleHR1cmUoYS5URVhUVVJFXzJELHRoaXMuaWQpLGEudGV4SW1hZ2UyRChhLlRFWFRVUkVfMkQsMCx0aGlzLmZvcm1hdCxiLGMsMCx0aGlzLmZvcm1hdCx0aGlzLnR5cGUsbnVsbCl9O2IucHJvdG90eXBlLmRyYXdUbz1cbmZ1bmN0aW9uKGIpe2EuZnJhbWVidWZmZXI9YS5mcmFtZWJ1ZmZlcnx8YS5jcmVhdGVGcmFtZWJ1ZmZlcigpO2EuYmluZEZyYW1lYnVmZmVyKGEuRlJBTUVCVUZGRVIsYS5mcmFtZWJ1ZmZlcik7YS5mcmFtZWJ1ZmZlclRleHR1cmUyRChhLkZSQU1FQlVGRkVSLGEuQ09MT1JfQVRUQUNITUVOVDAsYS5URVhUVVJFXzJELHRoaXMuaWQsMCk7aWYoYS5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzKGEuRlJBTUVCVUZGRVIpIT09YS5GUkFNRUJVRkZFUl9DT01QTEVURSl0aHJvdyBFcnJvcihcImluY29tcGxldGUgZnJhbWVidWZmZXJcIik7YS52aWV3cG9ydCgwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7YigpO2EuYmluZEZyYW1lYnVmZmVyKGEuRlJBTUVCVUZGRVIsbnVsbCl9O3ZhciBjPW51bGw7Yi5wcm90b3R5cGUuZmlsbFVzaW5nQ2FudmFzPWZ1bmN0aW9uKGIpe2IoZCh0aGlzKSk7dGhpcy5mb3JtYXQ9YS5SR0JBO3RoaXMudHlwZT1hLlVOU0lHTkVEX0JZVEU7YS5iaW5kVGV4dHVyZShhLlRFWFRVUkVfMkQsXG50aGlzLmlkKTthLnRleEltYWdlMkQoYS5URVhUVVJFXzJELDAsYS5SR0JBLGEuUkdCQSxhLlVOU0lHTkVEX0JZVEUsYyk7cmV0dXJuIHRoaXN9O2IucHJvdG90eXBlLnRvSW1hZ2U9ZnVuY3Rpb24oYil7dGhpcy51c2UoKTtoLmdldERlZmF1bHRTaGFkZXIoKS5kcmF3UmVjdCgpO3ZhciBnPTQqdGhpcy53aWR0aCp0aGlzLmhlaWdodCxmPW5ldyBVaW50OEFycmF5KGcpLGw9ZCh0aGlzKSxwPWwuY3JlYXRlSW1hZ2VEYXRhKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO2EucmVhZFBpeGVscygwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCxhLlJHQkEsYS5VTlNJR05FRF9CWVRFLGYpO2Zvcih2YXIgbT0wO208ZzttKyspcC5kYXRhW21dPWZbbV07bC5wdXRJbWFnZURhdGEocCwwLDApO2Iuc3JjPWMudG9EYXRhVVJMKCl9O2IucHJvdG90eXBlLnN3YXBXaXRoPWZ1bmN0aW9uKGEpe3ZhciBiO2I9YS5pZDthLmlkPXRoaXMuaWQ7dGhpcy5pZD1iO2I9YS53aWR0aDthLndpZHRoPXRoaXMud2lkdGg7XG50aGlzLndpZHRoPWI7Yj1hLmhlaWdodDthLmhlaWdodD10aGlzLmhlaWdodDt0aGlzLmhlaWdodD1iO2I9YS5mb3JtYXQ7YS5mb3JtYXQ9dGhpcy5mb3JtYXQ7dGhpcy5mb3JtYXQ9Yn07cmV0dXJuIGJ9KCk7ei5wcm90b3R5cGUuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oYSl7Zm9yKHZhciBkPTAsYz10aGlzLnlhLmxlbmd0aC0xOzE8Yy1kOyl7dmFyIGU9YytkPj4xO3RoaXMueGFbZV0+YT9jPWU6ZD1lfXZhciBlPXRoaXMueGFbY10tdGhpcy54YVtkXSxnPSh0aGlzLnhhW2NdLWEpL2U7YT0oYS10aGlzLnhhW2RdKS9lO3JldHVybiBnKnRoaXMueWFbZF0rYSp0aGlzLnlhW2NdKygoZypnKmctZykqdGhpcy55MltkXSsoYSphKmEtYSkqdGhpcy55MltjXSkqZSplLzZ9O3ZhciBoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMpe3ZhciBkPWEuY3JlYXRlU2hhZGVyKGIpO2Euc2hhZGVyU291cmNlKGQsYyk7YS5jb21waWxlU2hhZGVyKGQpO2lmKCFhLmdldFNoYWRlclBhcmFtZXRlcihkLGEuQ09NUElMRV9TVEFUVVMpKXRocm93XCJjb21waWxlIGVycm9yOiBcIitcbmEuZ2V0U2hhZGVySW5mb0xvZyhkKTtyZXR1cm4gZH1mdW5jdGlvbiBkKGQsZil7dGhpcy50ZXhDb29yZEF0dHJpYnV0ZT10aGlzLnZlcnRleEF0dHJpYnV0ZT1udWxsO3RoaXMucHJvZ3JhbT1hLmNyZWF0ZVByb2dyYW0oKTtkPWR8fGM7Zj1mfHxlO2Y9XCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIrZjthLmF0dGFjaFNoYWRlcih0aGlzLnByb2dyYW0sYihhLlZFUlRFWF9TSEFERVIsZCkpO2EuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSxiKGEuRlJBR01FTlRfU0hBREVSLGYpKTthLmxpbmtQcm9ncmFtKHRoaXMucHJvZ3JhbSk7aWYoIWEuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLnByb2dyYW0sYS5MSU5LX1NUQVRVUykpdGhyb3dcImxpbmsgZXJyb3I6IFwiK2EuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5wcm9ncmFtKTt9dmFyIGM9XCJhdHRyaWJ1dGUgdmVjMiB2ZXJ0ZXg7YXR0cmlidXRlIHZlYzIgX3RleENvb3JkO3ZhcnlpbmcgdmVjMiB0ZXhDb29yZDt2b2lkIG1haW4oKXt0ZXhDb29yZD1fdGV4Q29vcmQ7Z2xfUG9zaXRpb249dmVjNCh2ZXJ0ZXgqMi4wLTEuMCwwLjAsMS4wKTt9XCIsXG5lPVwidW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTt2YXJ5aW5nIHZlYzIgdGV4Q29vcmQ7dm9pZCBtYWluKCl7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRCh0ZXh0dXJlLHRleENvb3JkKTt9XCI7ZC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe2EuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO3RoaXMucHJvZ3JhbT1udWxsfTtkLnByb3RvdHlwZS51bmlmb3Jtcz1mdW5jdGlvbihiKXthLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD1hLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sYyk7aWYobnVsbCE9PWQpe3ZhciBlPWJbY107aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpc3dpdGNoKGUubGVuZ3RoKXtjYXNlIDE6YS51bmlmb3JtMWZ2KGQsbmV3IEZsb2F0MzJBcnJheShlKSk7YnJlYWs7XG5jYXNlIDI6YS51bmlmb3JtMmZ2KGQsbmV3IEZsb2F0MzJBcnJheShlKSk7YnJlYWs7Y2FzZSAzOmEudW5pZm9ybTNmdihkLG5ldyBGbG9hdDMyQXJyYXkoZSkpO2JyZWFrO2Nhc2UgNDphLnVuaWZvcm00ZnYoZCxuZXcgRmxvYXQzMkFycmF5KGUpKTticmVhaztjYXNlIDk6YS51bmlmb3JtTWF0cml4M2Z2KGQsITEsbmV3IEZsb2F0MzJBcnJheShlKSk7YnJlYWs7Y2FzZSAxNjphLnVuaWZvcm1NYXRyaXg0ZnYoZCwhMSxuZXcgRmxvYXQzMkFycmF5KGUpKTticmVhaztkZWZhdWx0OnRocm93XCJkb250J3Qga25vdyBob3cgdG8gbG9hZCB1bmlmb3JtIFxcXCJcIitjKydcIiBvZiBsZW5ndGggJytlLmxlbmd0aDt9ZWxzZSBpZihcIltvYmplY3QgTnVtYmVyXVwiPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpYS51bmlmb3JtMWYoZCxlKTtlbHNlIHRocm93J2F0dGVtcHRlZCB0byBzZXQgdW5pZm9ybSBcIicrYysnXCIgdG8gaW52YWxpZCB2YWx1ZSAnKyhlfHxcInVuZGVmaW5lZFwiKS50b1N0cmluZygpO1xufX1yZXR1cm4gdGhpc307ZC5wcm90b3R5cGUudGV4dHVyZXM9ZnVuY3Rpb24oYil7YS51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7Zm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmYS51bmlmb3JtMWkoYS5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5wcm9ncmFtLGMpLGJbY10pO3JldHVybiB0aGlzfTtkLnByb3RvdHlwZS5kcmF3UmVjdD1mdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1hLmdldFBhcmFtZXRlcihhLlZJRVdQT1JUKTtjPXZvaWQgMCE9PWM/KGMtZlsxXSkvZlszXTowO2I9dm9pZCAwIT09Yj8oYi1mWzBdKS9mWzJdOjA7ZD12b2lkIDAhPT1kPyhkLWZbMF0pL2ZbMl06MTtlPXZvaWQgMCE9PWU/KGUtZlsxXSkvZlszXToxO251bGw9PWEudmVydGV4QnVmZmVyJiYoYS52ZXJ0ZXhCdWZmZXI9YS5jcmVhdGVCdWZmZXIoKSk7YS5iaW5kQnVmZmVyKGEuQVJSQVlfQlVGRkVSLGEudmVydGV4QnVmZmVyKTthLmJ1ZmZlckRhdGEoYS5BUlJBWV9CVUZGRVIsbmV3IEZsb2F0MzJBcnJheShbYixcbmMsYixlLGQsYyxkLGVdKSxhLlNUQVRJQ19EUkFXKTtudWxsPT1hLnRleENvb3JkQnVmZmVyJiYoYS50ZXhDb29yZEJ1ZmZlcj1hLmNyZWF0ZUJ1ZmZlcigpLGEuYmluZEJ1ZmZlcihhLkFSUkFZX0JVRkZFUixhLnRleENvb3JkQnVmZmVyKSxhLmJ1ZmZlckRhdGEoYS5BUlJBWV9CVUZGRVIsbmV3IEZsb2F0MzJBcnJheShbMCwwLDAsMSwxLDAsMSwxXSksYS5TVEFUSUNfRFJBVykpO251bGw9PXRoaXMudmVydGV4QXR0cmlidXRlJiYodGhpcy52ZXJ0ZXhBdHRyaWJ1dGU9YS5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sXCJ2ZXJ0ZXhcIiksYS5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnZlcnRleEF0dHJpYnV0ZSkpO251bGw9PXRoaXMudGV4Q29vcmRBdHRyaWJ1dGUmJih0aGlzLnRleENvb3JkQXR0cmlidXRlPWEuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLFwiX3RleENvb3JkXCIpLGEuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy50ZXhDb29yZEF0dHJpYnV0ZSkpO1xuYS51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7YS5iaW5kQnVmZmVyKGEuQVJSQVlfQlVGRkVSLGEudmVydGV4QnVmZmVyKTthLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy52ZXJ0ZXhBdHRyaWJ1dGUsMixhLkZMT0FULCExLDAsMCk7YS5iaW5kQnVmZmVyKGEuQVJSQVlfQlVGRkVSLGEudGV4Q29vcmRCdWZmZXIpO2EudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRleENvb3JkQXR0cmlidXRlLDIsYS5GTE9BVCwhMSwwLDApO2EuZHJhd0FycmF5cyhhLlRSSUFOR0xFX1NUUklQLDAsNCl9O2QuZ2V0RGVmYXVsdFNoYWRlcj1mdW5jdGlvbigpe2EuZGVmYXVsdFNoYWRlcj1hLmRlZmF1bHRTaGFkZXJ8fG5ldyBkO3JldHVybiBhLmRlZmF1bHRTaGFkZXJ9O3JldHVybiBkfSgpLHM9XCJmbG9hdCByYW5kb20odmVjMyBzY2FsZSxmbG9hdCBzZWVkKXtyZXR1cm4gZnJhY3Qoc2luKGRvdChnbF9GcmFnQ29vcmQueHl6K3NlZWQsc2NhbGUpKSo0Mzc1OC41NDUzK3NlZWQpO31cIjtcbnJldHVybiB2fSgpO1wib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWZ4OndpbmRvdy5meD1meDtcbiIsInZhciByQUZfUG9seWZpbGxzID0gcmVxdWlyZSgnLi9yQUZQb2x5ZmlsbCcpO1xudmFyIHJBRiA9IHJBRl9Qb2x5ZmlsbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xudmFyIGNBRiA9IHJBRl9Qb2x5ZmlsbHMuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIHByb3ZpZGVzIGEgd3JhcHBlciBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBhXG4gKiByZWltcGxlbWVudGF0aW9uIG9mIGJyb3dzZXIgdGltZXJzLiBJdCBjYW4gc2NoZWR1bGUgbXVsdGlwbGUgY2FsbGJhY2tzXG4gKiBhbmQgaGVscCBtYXhpbWl6ZSBwZXJmb3JtYW5jZSBmb3IgaW4gYnJvd3NlciBhbmltYXRpb25zLlxuICogXG4gKiBAY2xhc3MgQW5pbWF0aW9uTG9vcFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFuaW1hdGlvbkxvb3AoKXtcbiAgdGhpcy5hbmltYXRpb25zID0gW107XG4gIHRoaXMuX2FuaW1hdGlvbnMgPSBbXTtcbiAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgdGhpcy5zdGFydFRpbWUgPSAwO1xuICB0aGlzLl90aW1lID0gMDtcbn1cblxuLyoqXG4gKiBJbnRlcm5hbCBtYWluIGNhbGxiYWNrIG1ldGhvZCB0aGF0IGlzIHBhc3NlZCB0byByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgXG4gKiBhbmQgaGFuZGxlcyBjYWxsaW5nIGFsbCBzY2hlZHVsZWQgYW5pbWF0aW9ucy4gQ29waWVzIGFuaW1hdGlvbnMgYXJyYXkgXG4gKiBiZWZvcmUgY2FsbGluZyBhbmltYXRpb24gY2FsbGJhY2tzIHNvIGl0ZW1zIGNhbiBiZSBzYWZlbHkgcmVtb3ZlZCBtaWR3YXkgXG4gKiB0aHJvdWdoIGEgbG9vcCBjeWNsZS4gXG4gKiBcbiAqIEBtZXRob2RcbiAqIEBwcml2YXRlXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgLSB0aW1lIGhpZ2ggcmVzb2x1dGlvbiB0aW1zdGFtcCBcbiAqXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfSB1bmRlZmluZWRcbiovXG5BbmltYXRpb25Mb29wLnByb3RvdHlwZS5fdXBkYXRlTG9vcCA9IGZ1bmN0aW9uIF91cGRhdGVMb29wKHRpbWUpeyBcbiAgdGhpcy5fdGltZSA9IHRpbWU7XG4gIC8vIG1ha2UgYSBjb3B5IHNvIGFuaW1hdGlvbnMgY2FuIGJlIHJlbW92ZWQgZHVyaW5nIGxvb3BcbiAgdGhpcy5fYW5pbWF0aW9ucyA9IHRoaXMuYW5pbWF0aW9ucy5zbGljZSgpO1xuICB3aGlsZSh0aGlzLl9hbmltYXRpb25zLmxlbmd0aCl7XG4gICAgLy8gcG9wIGFuaW1hdGlvbnMgb2ZmIGFuZCBjYWxsIGVhY2ggYW5pbWF0aW9uIHBhc3NpbiBpbiB0aW1lXG4gICAgdGhpcy5fYW5pbWF0aW9ucy5wb3AoKSh0aW1lKTtcbiAgfVxuICAvL3N0b3JlIHJlZmVyZW5jZSBzbyB3ZSBjYW4gY2FuY2VsIGl0IGxhdGVyXG4gIHRoaXMuX3JBRiA9IHJBRih0aGlzLnVwZGF0ZUxvb3ApO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgbWFpbiBhbmltYXRpb24gbG9vcCBhbmQgcHJldmVudHMgbXVsdGlwbGUgdXBkYXRlcyB0byBcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAqIFxuICogQG1ldGhvZCBcbiAqXG4gKiBAcmV0dXJucyB7QW5pbWF0aW9uTG9vcH0gdGhpc1xuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKXtcbiAgaWYoIXRoaXMuaXNSdW5uaW5nKXtcbiAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVMb29wID0gdGhpcy5fdXBkYXRlTG9vcC5iaW5kKHRoaXMpO1xuICAgIHJBRih0aGlzLnVwZGF0ZUxvb3ApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdG9wcyB0aGUgbWFpbiBhbmltYXRpb24gbG9vcCBieSBjYWxsaW5nIGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBcbiAqIFxuICogQG1ldGhvZCBcbiAqXG4gKiBAcmV0dXJucyB7QW5pbWF0aW9uTG9vcH0gdGhpc1xuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCl7XG4gIGlmKHRoaXMuaXNSdW5uaW5nKXtcbiAgICBjQUYodGhpcy5fckFGKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhIGNhbGxiYWNrIHRvIHRoZSB1cGRhdGUgbG9vcCBhbmQgcHJldmVudHMgdGhlIHNhbWUgY2FsbGJhY2sgZnJvbSBiZWluZyBcbiAqIGFkZGVkIHR3aWNlLiBcbiAqIFxuICogQG1ldGhvZCBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhbmltYXRpb24gLSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gdXBkYXRlIGxvb3AuICBcbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IGFuaW1hdGlvbiBjYWxsYmFjayBwYXNzZWQgaW5cbiovXG5BbmltYXRpb25Mb29wLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbiBhZGRBbmltYXRpb24oYW5pbWF0aW9uKXtcbiAgaWYgKHR5cGVvZiBhbmltYXRpb24gPT09IFwiZnVuY3Rpb25cIiAmJiB0aGlzLmFuaW1hdGlvbnMuaW5kZXhPZihhbmltYXRpb24pID09PSAtMSkge1xuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gIH1cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gdGhlIGN1cnJlbnQgdXBkYXRlIGxvb3AgYW5kIG5leHQgc2NoZWR1bGVkIGxvb3AuIFxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFuaW1hdGlvbiAtIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgbWFpbiB1cGRhdGUgbG9vcC4gIFxuICpcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9IHVuZGVmaW5lZFxuKi9cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLnJlbW92ZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihhbmltYXRpb24pIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5hbmltYXRpb25zLmluZGV4T2YoYW5pbWF0aW9uKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuYW5pbWF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGluZGV4ID0gdGhpcy5fYW5pbWF0aW9ucy5pbmRleE9mKGFuaW1hdGlvbik7XG4gIC8vIHJlbW92ZSBhbmltYXRpb24gaWYgbWlkd2F5IHRocm91Z2ggbG9vcFxuICBpZihpbmRleCAhPT0gLTEpe1xuICAgIHRoaXMuX2FuaW1hdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBNaW1pY3MgYnJvd3NlcidzIHNldFRpbWVvdXQgYmFzaWMgZnVuY3Rpb25hbGl0eS4gUHJldmVudHMgYnJvd3NlciB0aW1lciBmcm9tIFxuICogZGVncmFkaW5nIHBlcmZvcm1hbmNlIG9mIHRoZSBtYWluIHVwZGF0ZSBsb29wLiBJdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBvdmVyXG4gKiBzZXRUaW1lb3V0IGFmdGVyIGAuc3RhcnQoKWAgaGFzIGJlZW4gY2FsbGVkLiBcbiAqIFxuICogQG1ldGhvZCBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhbmltYXRpb24gLSBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSB0aW1lciBleHBpcmVzLiBcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSAtIFRoZSB0aW1lLCBpbiBtaWxsaXNlY29uZHMgKHRob3VzYW5kdGhzIG9mIGEgc2Vjb25kKSwgdGhlIHRpbWVyIFxuICogc2hvdWxkIHdhaXQgYmVmb3JlIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb24gaXMgZXhlY3V0ZWQuIFxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdGltZW91dCBjYWxsYmFjayByZXR1cm5lZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgdmlhIGByZW1vdmVBbmltYXRpb24oKWBcbiovXG5BbmltYXRpb25Mb29wLnByb3RvdHlwZS5zZXRBbmltYXRpb25UaW1lb3V0ID0gZnVuY3Rpb24gc2V0QW5pbWF0aW9uVGltZW91dChhbmltYXRpb24sIGRlbGF5KXtcbiAgdmFyIHN0YXJ0VGltZSA9IHRoaXMuX3RpbWU7XG4gIHZhciBhbmltTG9vcCA9IHRoaXM7XG4gIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbihmdW5jdGlvbiB0aW1lb3V0QW5pbWF0aW9uKHRpbWUpe1xuICAgIGlmKHRpbWUgLSBzdGFydFRpbWUgPj0gZGVsYXkpe1xuICAgICAgYW5pbWF0aW9uKCk7XG4gICAgICBhbmltTG9vcC5yZW1vdmVBbmltYXRpb24odGltZW91dEFuaW1hdGlvbik7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNaW1pY3MgYnJvd3NlcidzIHNldEludGVydmFsIGJhc2ljIGZ1bmN0aW9uYWxpdHkuIFByZXZlbnRzIGJyb3dzZXIgdGltZXIgZnJvbSBcbiAqIGRlZ3JhZGluZyBwZXJmb3JtYW5jZSBvZiB0aGUgbWFpbiB1cGRhdGUgbG9vcC4gSXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgb3ZlclxuICogc2V0SW50ZXJuYWwgYWZ0ZXIgYC5zdGFydCgpYCBoYXMgYmVlbiBjYWxsZWQuIFxuICogXG4gKiBAbWV0aG9kIFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFuaW1hdGlvbiAtIEEgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgZXZlcnkgYGRlbGF5YCBtaWxsaXNlY29uZHMuIFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IC0gVGhlIHRpbWUsIGluIG1pbGxpc2Vjb25kcyAodGhvdXNhbmR0aHMgb2YgYSBzZWNvbmQpLCB0aGUgdGltZXIgXG4gKiBzaG91bGQgZGVsYXkgaW4gYmV0d2VlbiBleGVjdXRpb25zIG9mIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBpbnRlcnZhbCBjYWxsYmFjayByZXR1cm5lZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgdmlhIGByZW1vdmVBbmltYXRpb24oKWBcbiovXG5BbmltYXRpb25Mb29wLnByb3RvdHlwZS5zZXRBbmltYXRpb25JbnRlcnZhbCA9IGZ1bmN0aW9uIHNldEFuaW1hdGlvbkludGVydmFsKGFuaW1hdGlvbiwgaW50ZXJ2YWwpe1xuICB2YXIgc3RhcnRUaW1lID0gdGhpcy5fdGltZTtcbiAgdmFyIGFuaW1Mb29wID0gdGhpcztcbiAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKGZ1bmN0aW9uIGludGVydmFsQW5pbWF0aW9uKHRpbWUpe1xuICAgIGlmKHRpbWUgLSBzdGFydFRpbWUgPj0gaW50ZXJ2YWwpe1xuICAgICAgYW5pbWF0aW9uKCk7XG4gICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qXG4qIEdldCB0aGUgY3VycmVudCBbaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUhpZ2hSZXNUaW1lU3RhbXApLlxuKlxuKiBAbWV0aG9kXG4qXG4qIEByZXR1cm5zIHtOdW1iZXJ9IGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXBcbiovXG5cbkFuaW1hdGlvbkxvb3AucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5fdGltZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hdGlvbkxvb3A7XG4iLCIvLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuLy8gTUlUIGxpY2Vuc2VcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGFzdFRpbWUgPSAwO1xudmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddO1xuXG52YXIgckFGLCBjQUY7XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgIHJBRiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgY0FGID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhckFGOyArK3gpIHtcbiAgICAgICAgckFGID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIGNBRiA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddIHx8XG4gICAgICAgICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ107XG4gICAgfVxuXG4gICAgaWYgKHJBRiAmJiAhY0FGKSB7XG4gICAgICAgIC8vIGNBRiBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAvLyBGYWxsIGJhY2sgdG8gc2V0SW50ZXJ2YWwgZm9yIG5vdyAodmVyeSByYXJlKS5cbiAgICAgICAgckFGID0gbnVsbDtcbiAgICB9XG59XG5cbmlmICghckFGKSB7XG4gICAgdmFyIG5vdyA9IERhdGUubm93ID8gRGF0ZS5ub3cgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuXG4gICAgckFGID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbm93KCk7XG4gICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICB2YXIgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgICBjQUYgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufVxuXG52YXIgYW5pbWF0aW9uRnJhbWUgPSB7XG4gICAgLyoqXG4gICAgICogQ3Jvc3MgYnJvd3NlciB2ZXJzaW9uIG9mIFtyZXF1ZXN0QW5pbWF0aW9uRnJhbWVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvcmVxdWVzdEFuaW1hdGlvbkZyYW1lfS5cbiAgICAgKlxuICAgICAqIFVzZWQgYnkgRW5naW5lIGluIG9yZGVyIHRvIGVzdGFibGlzaCBhIHJlbmRlciBsb29wLlxuICAgICAqXG4gICAgICogSWYgbm8gKHZlbmRvciBwcmVmaXhlZCB2ZXJzaW9uIG9mKSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpcyBhdmFpbGFibGUsXG4gICAgICogYHNldFRpbWVvdXRgIHdpbGwgYmUgdXNlZCBpbiBvcmRlciB0byBlbXVsYXRlIGEgcmVuZGVyIGxvb3AgcnVubmluZyBhdFxuICAgICAqIGFwcHJveGltYXRlbHkgNjAgZnJhbWVzIHBlciBzZWNvbmQuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb24gdGhlIG5leHQgZnJhbWUuXG4gICAgICogQHJldHVybiAge051bWJlcn0gICAgcmVxdWVzdElkIHRvIGJlIHVzZWQgdG8gY2FuY2VsIHRoZSByZXF1ZXN0IHVzaW5nXG4gICAgICogICAgICAgICAgICAgICAgICAgICAge0BsaW5rIGNhbmNlbEFuaW1hdGlvbkZyYW1lfS5cbiAgICAgKi9cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IHJBRixcblxuICAgIC8qKlxuICAgICAqIENyb3NzIGJyb3dzZXIgdmVyc2lvbiBvZiBbY2FuY2VsQW5pbWF0aW9uRnJhbWVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cvY2FuY2VsQW5pbWF0aW9uRnJhbWV9LlxuICAgICAqXG4gICAgICogQ2FuY2VscyBhIHByZXZpb3VzbHkgdXNpbmcgW3JlcXVlc3RBbmltYXRpb25GcmFtZV17QGxpbmsgYW5pbWF0aW9uRnJhbWUjcmVxdWVzdEFuaW1hdGlvbkZyYW1lfVxuICAgICAqIHNjaGVkdWxlZCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVXNlZCBmb3IgaW1tZWRpYXRlbHkgc3RvcHBpbmcgdGhlIHJlbmRlciBsb29wIHdpdGhpbiB0aGUgRW5naW5lLlxuICAgICAqXG4gICAgICogQG1ldGhvZCAgY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOdW1iZXJ9ICAgIHJlcXVlc3RJZCBvZiB0aGUgc2NoZWR1bGVkIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQgYnkgW3JlcXVlc3RBbmltYXRpb25GcmFtZV17QGxpbmsgYW5pbWF0aW9uRnJhbWUjcmVxdWVzdEFuaW1hdGlvbkZyYW1lfS5cbiAgICAgKi9cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZTogY0FGXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGlvbkZyYW1lOyJdfQ==
