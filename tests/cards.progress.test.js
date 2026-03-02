import { describe, it, expect } from 'vitest';
import { computeProgress } from '../urani/study/minbub/lib/cards.js';

describe('computeProgress', () => {
  it('returns 0% when no cards are mastered', () => {
    const state = {
      '1': { s: 'learning', sc: 40, n: 1 },
      '2': { s: 'new', sc: 0, n: 0 },
    };
    const result = computeProgress(state, 10);
    expect(result.done).toBe(0);
    expect(result.progressPct).toBe(0);
  });

  it('returns 100% when all tracked cards are mastered and equal the total', () => {
    const state = {
      '1': { s: 'mastered', sc: 100, n: 5 },
      '2': { s: 'mastered', sc: 90, n: 3 },
    };
    const result = computeProgress(state, 2);
    expect(result.done).toBe(2);
    expect(result.progressPct).toBe(100);
  });

  it('rounds the percentage correctly', () => {
    // 1 mastered out of 3 → 33.33…% → rounds to 33
    const state = { '1': { s: 'mastered', sc: 100, n: 1 } };
    const result = computeProgress(state, 3);
    expect(result.progressPct).toBe(33);
  });

  it('counts only mastered entries, ignoring learning/new', () => {
    const state = {
      '1': { s: 'mastered', sc: 100, n: 3 },
      '2': { s: 'learning', sc: 50, n: 2 },
      '3': { s: 'new', sc: 0, n: 0 },
    };
    const result = computeProgress(state, 1033);
    expect(result.done).toBe(1);
  });

  it('returns 0% when state is empty', () => {
    const result = computeProgress({}, 1033);
    expect(result.done).toBe(0);
    expect(result.progressPct).toBe(0);
  });

  it('returns 0% when totalCards is 0 (avoids division by zero)', () => {
    const state = { '1': { s: 'mastered', sc: 100, n: 1 } };
    const result = computeProgress(state, 0);
    expect(result.progressPct).toBe(0);
  });

  it('reports the correct total', () => {
    const result = computeProgress({}, 1033);
    expect(result.total).toBe(1033);
  });
});
