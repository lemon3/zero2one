/*!
* zero2one v0.1.4
* https://lemon3.github.io/zero2one
*/
const c = (s) => s, a = (s) => s * s, o = (s) => 1 - (1 - s) * (1 - s), u = (s) => s < 0.5 ? 2 * s * s : 1 - Math.pow(-2 * s + 2, 2) / 2, d = (s) => s * s * s, p = (s) => 1 - Math.pow(1 - s, 3), f = (s) => 1 - Math.cos(s * Math.PI / 2), w = (s) => Math.sin(s * Math.PI / 2), M = (s) => 1 + 2.70158 * Math.pow(s - 1, 3) + 1.70158 * Math.pow(s - 1, 2), I = (s) => {
  const i = 2 * Math.PI / 3;
  return s === 0 ? 0 : s === 1 ? 1 : Math.pow(2, -10 * s) * Math.sin((s * 10 - 0.75) * i) + 1;
}, g = (s) => s < 0.36363636363636365 ? 7.5625 * s * s : s < 0.7272727272727273 ? 7.5625 * (s -= 0.5454545454545454) * s + 0.75 : s < 0.9090909090909091 ? 7.5625 * (s -= 0.8181818181818182) * s + 0.9375 : 7.5625 * (s -= 0.9545454545454546) * s + 0.984375, r = {
  linear: c,
  easeIn: a,
  easeOut: o,
  easeInOut: u,
  cubicEaseIn: d,
  cubicEaseOut: p,
  sineEaseIn: f,
  sineEaseOut: w,
  backOut: M,
  elasticOut: I,
  bounceOut: g
}, h = (s) => !!s && typeof s == "function";
class l {
  constructor() {
    this._noop = () => {
    }, this.progress = 0, this.init();
  }
  init() {
    this.duration = 0, this.curTime = 0, this.then = 0;
  }
  renderLoop(i) {
    const t = (/* @__PURE__ */ new Date()).getTime(), e = t - (this.then || t);
    this.curTime += e, this.progress = this.curTime / this.duration, this.progress > 1 && (this.progress = 1);
    const n = this.easing(this.progress);
    i(n), this.then = t, this.progress < 1 ? this.requestId = window.requestAnimationFrame(
      () => this.renderLoop(i)
    ) : this.stop();
  }
  start(i, t, e) {
    if (this.init(), h(e) || (e = this._noop), this.duration = +i, isNaN(this.duration) && (this.duration = 0), t ? h(t) ? this.easing = t : r[t] ? this.easing = r[t] : this.easing = o : this.easing = o, this.duration <= 0)
      return e.call(this, 1);
    this.renderLoop((n) => e.call(this, n));
  }
  stop() {
    this.requestId && window.cancelAnimationFrame(this.requestId);
  }
}
export {
  l as default
};
