import { describe, it, expect } from 'vitest';
import { nextIndex, prevIndex } from '../urani/study/minbub/lib/cards.js';

describe('nextIndex', () => {
  it('advances by one', () => {
    expect(nextIndex(0, 5)).toBe(1);
    expect(nextIndex(3, 5)).toBe(4);
  });

  it('wraps around from last card to first', () => {
    expect(nextIndex(4, 5)).toBe(0);
  });

  it('wraps on single-card list (stays at 0)', () => {
    expect(nextIndex(0, 1)).toBe(0);
  });

  it('returns 0 for empty list', () => {
    expect(nextIndex(0, 0)).toBe(0);
  });
});

describe('prevIndex', () => {
  it('goes back by one', () => {
    expect(prevIndex(3, 5)).toBe(2);
    expect(prevIndex(1, 5)).toBe(0);
  });

  it('wraps around from first card to last', () => {
    expect(prevIndex(0, 5)).toBe(4);
  });

  it('wraps on single-card list (stays at 0)', () => {
    expect(prevIndex(0, 1)).toBe(0);
  });

  it('returns 0 for empty list', () => {
    expect(prevIndex(0, 0)).toBe(0);
  });
});
