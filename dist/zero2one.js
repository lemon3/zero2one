/*!
* Zero2One v0.1.3
* https://lemon3.github.io/zero2one
*/
var a = Object.defineProperty;
var u = (t, s, i) => s in t ? a(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var h = (t, s, i) => (u(t, typeof s != "symbol" ? s + "" : s, i), i);
const o = {
  Linear: (t) => t,
  // Pow: {},
  Quad: {
    easeIn: (t) => Math.pow(t, 2),
    easeOut: (t) => 1 - Math.pow(1 - t, 2)
  },
  Cubic: {
    easeIn: (t) => Math.pow(t, 3),
    easeOut: (t) => 1 - Math.pow(1 - t, 3)
  },
  Sine: {
    easeIn: (t) => 1 - Math.cos(t * Math.PI / 2),
    easeOut: (t) => Math.sin(t * Math.PI / 2)
  },
  Elastic: {
    easeOut: (t) => {
      const s = 2 * Math.PI / 3;
      return t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * s) + 1;
    }
  }
}, d = (t) => !!t && typeof t == "function";
class c {
  constructor() {
    h(this, "_noop", () => {
    });
    this.init();
  }
  init() {
    this.duration = 0, this.time = 0, this.curTime = 0, this.then = 0;
  }
  _renderloop(s) {
    const i = (/* @__PURE__ */ new Date()).getTime(), e = i - (this.then || i);
    this.curTime += e, this.progress = this.curTime / this.duration, this.progress > 1 && (this.progress = 1);
    const n = this.easing(this.progress);
    s(n), this.then = i, this.progress < 1 ? this.requestId = window.requestAnimationFrame(
      () => this._renderloop(s)
    ) : this.stop();
  }
  start(s, i, e) {
    if (this.init(), d(e) || (e = this._noop), this.duration = +s, isNaN(this.duration) && (this.duration = 0), !i)
      this.easing = o.Quad.easeOut;
    else {
      const [n, r] = i.split(".");
      this.easing = o[n][r] || o[n];
    }
    if (this.duration <= 0)
      return e.call(this, 1);
    this._renderloop((n) => e.call(this, n));
  }
  stop() {
    this.requestId && window.cancelAnimationFrame(this.requestId);
  }
}
export {
  c as default
};
