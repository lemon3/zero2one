import {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  cubicEaseIn,
  cubicEaseOut,
  sineEaseIn,
  sineEaseOut,
  backOut,
  elasticOut,
  bounceOut,
} from './easing';

const easingFunctions = {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  cubicEaseIn,
  cubicEaseOut,
  sineEaseIn,
  sineEaseOut,
  backOut,
  elasticOut,
  bounceOut,
};

const isFunction = (fn: unknown): fn is Function =>
  !!fn && typeof fn === 'function';

class Zero2One {
  private duration: number;
  private curTime: number;
  private then: number;
  private requestId?: number;
  private easing: (progress: number) => number;
  private _noop = (): void => {};

  constructor() {
    this.init();
  }

  init(): void {
    this.duration = 0;
    this.curTime = 0;
    this.then = 0;
  }

  private renderLoop(callback: (value: number) => void): void {
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
        this.renderLoop(callback)
      );
    } else {
      this.stop();
    }
  }

  start(
    duration: number,
    _easing: string | Function | undefined | null,
    callback: (value: number) => void
  ): void {
    this.init();

    if (!isFunction(callback)) {
      callback = this._noop;
    }

    this.duration = +duration;
    if (isNaN(this.duration)) {
      this.duration = 0;
    }

    if (!_easing) {
      this.easing = easeOut;
    } else if (isFunction(_easing)) {
      this.easing = _easing;
    } else {
      if (easingFunctions[_easing]) {
        this.easing = easingFunctions[_easing];
      } else {
        this.easing = easeOut;
      }
    }

    if (this.duration <= 0) {
      return callback.call(this, 1);
    }

    this.renderLoop((value) => callback.call(this, value));
  }

  stop(): void {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }

  private progress: number = 0;
}

export default Zero2One;
