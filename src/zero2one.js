/*!
 * (c) wolfgang jungmayer
 * www.lemon3.at
 */

import { easing } from '@/easing';

// helper
const isFunction = (fn) => !!fn && 'function' === typeof fn;

class Zero2One {
  constructor() {
    this.duration = 0;
    this.time = 0;
    this.curTime = 0;
    this.then = 0;
  }

  _noop = () => {};

  _renderloop(callback) {
    const now = new Date().getTime();
    const dt = now - (this.then || now);
    this.curTime += dt;
    this.progress = this.curTime / this.duration;

    if (this.progress > 1) {
      this.progress = 1;
    }

    const ease = this.easing(this.progress);
    callback(ease);
    this.then = now;

    if (this.progress < 1) {
      this.requestId = window.requestAnimationFrame(() =>
        this._renderloop(callback)
      );
    } else {
      window.cancelAnimationFrame(this.requestId);
    }
  }

  start(duration, _easing, callback) {
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
      const [fun, type] = _easing.split('.');
      this.easing = easing[fun][type] || easing[fun];
    }

    if (this.duration <= 0) {
      return callback.call(this, 1);
    }
    this._renderloop((value) => callback.call(this, value));
  }

  stop() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }
}

export default Zero2One;
