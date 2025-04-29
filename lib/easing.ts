// Linear (no easing)
export const linear = (t: number) => t;

// Ease-In (accelerating from 0)
export const easeIn = (t: number) => t * t;

// Ease-Out (decelerating to 0)
export const easeOut = (t: number) => 1 - (1 - t) * (1 - t);

// Ease-In-Out (acceleration until halfway, then deceleration)
export const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const cubicEaseIn = (t: number) => t * t * t;
export const cubicEaseOut = (t: number) => 1 - Math.pow(1 - t, 3);

export const sineEaseIn = (t: number) => 1 - Math.cos((t * Math.PI) / 2);
export const sineEaseOut = (t: number) => Math.sin((t * Math.PI) / 2);

// Back-Out (overshoot a little, then settle)
export const backOut = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// Elastic-Out (bouncy effect)
export const elasticOut = (t: number) => {
  const c4 = (2 * Math.PI) / 3;
  return t === 0
    ? 0
    : t === 1
      ? 1
      : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
};

// Bounce-Out (bouncy "drop" effect)
export const bounceOut = (t: number) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) {
    return n1 * t * t;
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75;
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375;
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  }
};
