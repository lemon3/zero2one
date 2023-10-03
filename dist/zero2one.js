(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Zero2One", [], factory);
	else if(typeof exports === 'object')
		exports["Zero2One"] = factory();
	else
		root["Zero2One"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ zero2one; }
});

;// CONCATENATED MODULE: ./src/easing.js
var easing = {
  Linear: function Linear(p) {
    return p;
  },
  // Pow: {},
  Quad: {
    easeIn: function easeIn(p) {
      return Math.pow(p, 2);
    },
    easeOut: function easeOut(p) {
      return 1 - Math.pow(1 - p, 2);
    }
  },
  Cubic: {
    easeIn: function easeIn(p) {
      return Math.pow(p, 3);
    },
    easeOut: function easeOut(p) {
      return 1 - Math.pow(1 - p, 3);
    }
  },
  Sine: {
    easeIn: function easeIn(p) {
      return 1 - Math.cos(p * Math.PI / 2);
    },
    easeOut: function easeOut(p) {
      return Math.sin(p * Math.PI / 2);
    }
  },
  Elastic: {
    easeOut: function easeOut(p) {
      var c4 = 2 * Math.PI / 3;
      if (0 === p || 1 === p) {
        return p;
      }
      return Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * c4) + 1;
    }
  }
};
;// CONCATENATED MODULE: ./src/zero2one.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*!
 * (c) wolfgang jungmayer
 * www.lemon3.at
 */



// helper
var isFunction = function isFunction(fn) {
  return !!fn && 'function' === typeof fn;
};
var Zero2One = /*#__PURE__*/function () {
  function Zero2One() {
    _classCallCheck(this, Zero2One);
    _defineProperty(this, "_noop", function () {});
    this.duration = 0;
    this.time = 0;
    this.curTime = 0;
    this.then = 0;
  }
  _createClass(Zero2One, [{
    key: "_renderloop",
    value: function _renderloop(callback) {
      var _this = this;
      var now = new Date().getTime();
      var dt = now - (this.then || now);
      this.curTime += dt;
      this.progress = this.curTime / this.duration;
      if (this.progress > 1) {
        this.progress = 1;
      }
      var ease = this.easing(this.progress);
      callback(ease);
      this.then = now;
      if (this.progress < 1) {
        this.requestId = window.requestAnimationFrame(function () {
          return _this._renderloop(callback);
        });
      } else {
        window.cancelAnimationFrame(this.requestId);
      }
    }
  }, {
    key: "start",
    value: function start(duration, _easing, callback) {
      var _this2 = this;
      if (!isFunction(callback)) {
        callback = this._noop;
      }
      this.duration = +duration;
      if (isNaN(this.duration)) {
        this.duration = 0;
      }
      if (!_easing) {
        this.easing = easing.Quad.easeOut;
      } else {
        var _easing$split = _easing.split('.'),
          _easing$split2 = _slicedToArray(_easing$split, 2),
          fun = _easing$split2[0],
          type = _easing$split2[1];
        this.easing = easing[fun][type] || easing[fun];
      }
      if (this.duration <= 0) {
        return callback.call(this, 1);
      }
      this._renderloop(function (value) {
        return callback.call(_this2, value);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.requestId) {
        window.cancelAnimationFrame(this.requestId);
      }
    }
  }]);
  return Zero2One;
}();
/* harmony default export */ var zero2one = (Zero2One);
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});