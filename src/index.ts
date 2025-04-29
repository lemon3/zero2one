import Zero2One from '../lib/zero2one';
import './style.css';

const init = () => {
  // demo 1
  const d1 = document.querySelectorAll<HTMLElement>('#demo1 .ani');
  if (d1) {
    d1.forEach((node) => {
      const element = node as HTMLElement;
      const z2o = new Zero2One();
      const end = +(element.dataset.endval ?? 1);
      const start = +(element.dataset.startval ?? 0);
      const duration = +(element.dataset.duration || 2000);
      const decimalPlaces = +(element.dataset.decimalPlaces || 0);

      const delta = end - start;
      const multi = Math.pow(10, decimalPlaces);
      z2o.start(duration, null, (progress) => {
        let val = start + delta * progress;
        val = Math.round(val * multi) / multi;
        element.innerText = '' + val;
      });
    });
  }

  // demo 2
  const d2 = document.querySelectorAll<HTMLElement>('.d2');
  if (d2) {
    d2.forEach((d) => {
      const z2o = new Zero2One();
      const start = +(d.dataset.startval || 0);
      const end = +(d.dataset.endval || 100);
      const duration = +(d.dataset.duration || 2000);
      const ease = d.dataset.ease || 'easeOut';
      const delta = end - start;

      z2o.start(duration, ease, (progress) => {
        const val = start + delta * progress - 100;
        d.style.transform = 'translate3d(' + val + '%, 0, 0)';
      });
    });
  }

  // demo 3
  const d3 = document.querySelector<HTMLElement>('.d3');
  if (d3) {
    const calcDelta = (from, to): { x: number; y: number; r: number } => {
      const ret = { x: 0, y: 0, r: 0 };
      Object.entries(to).forEach((entry) => {
        const [key, val] = entry as [string, number];
        let fromVal = 0;
        if ('undefined' !== typeof from[key]) {
          fromVal = from[key];
        }
        ret[key] = (val ?? 0) - fromVal;
      });
      return ret;
    };

    const from = {
      x: 0,
      y: 0,
      r: 0,
    };
    const to = {
      x: 250,
      y: 150,
      r: 1800,
    };
    const delta = calcDelta(from, to);
    const z2o = new Zero2One();

    z2o.start(2000, 'easeOut', (progress) => {
      const val = {
        x: from.x + delta.x * progress,
        y: from.y + delta.y * progress,
      };
      d3.style.transform = `translate3d(${val.x}px, ${val.y}px, 0)`;
    });

    const z2o2 = new Zero2One();
    z2o2.start(3000, 'Sine.easeOut', (progress) => {
      const r = from.r + delta.r * progress;
      const rotateVal = ' rotate(' + r + 'deg)';
      let tmp = d3.style.transform;
      tmp =
        tmp.indexOf('rotate') > 0
          ? tmp.replace(/rotate(.*)/, rotateVal)
          : tmp + rotateVal;
      d3.style.transform = tmp;
    });
  }

  // demo 3
  const d4 = document.querySelector('#d4');
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  if (d4) {
    const d4Result = document.querySelector<HTMLElement>('#d4-result');
    const d4z2o = new Zero2One();

    let current = 0;
    const demo4Action = (evt) => {
      let input = evt.target.value;
      if ('' === input) {
        input = 0;
      } else if (isNaN(input)) {
        return;
      }

      input = +input;
      const delta = input - current;
      console.log(current, delta);
      let val;
      d4z2o.start(400, null, (progress) => {
        val = current + delta * progress;
        val = Math.round(val);
        if (d4Result) {
          d4Result.innerText = val;
        }
        if (1 === progress) {
          current = input;
        }
      });
    };

    const processChange = debounce((evt) => demo4Action(evt));
    d4.addEventListener('input', processChange, false);
  }
};

if (
  'complete' === document.readyState ||
  'interactive' === document.readyState
) {
  init();
  document.removeEventListener('DOMContentLoaded', init);
} else {
  document.addEventListener('DOMContentLoaded', init, false);
}
