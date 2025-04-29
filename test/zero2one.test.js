import { describe, test, expect } from 'vitest';
import Zero2one from '../lib/zero2one.ts';

describe('Zero2one Class tests', () => {
  test('Zero2one is Object', () => {
    expect(Zero2one).toBeTruthy();
    expect(typeof Zero2one).toBe('function');
  });

  test('new Zero2one() is Object', () => {
    const bp = new Zero2one();
    expect(bp).toBeTruthy();
    expect(typeof bp).toBe('object');
  });
});
