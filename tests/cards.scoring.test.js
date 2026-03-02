import { describe, it, expect } from 'vitest';
import { applyTestScore, applyTraceCorrect, isTraceCorrect } from '../urani/study/minbub/lib/cards.js';

// ── applyTestScore ────────────────────────────────────────────────────────────

describe('applyTestScore', () => {
  describe('status transitions', () => {
    it('transitions to mastered when score is exactly 80', () => {
      const result = applyTestScore(undefined, 80);
      expect(result.s).toBe('mastered');
    });

    it('transitions to mastered when score is above 80', () => {
      const result = applyTestScore(undefined, 100);
      expect(result.s).toBe('mastered');
    });

    it('stays learning when score is 79', () => {
      const result = applyTestScore(undefined, 79);
      expect(result.s).toBe('learning');
    });

    it('stays learning when score is 0', () => {
      const result = applyTestScore(undefined, 0);
      expect(result.s).toBe('learning');
    });

    it('can demote mastered back to learning when score drops below 80', () => {
      const existing = { s: 'mastered', sc: 90, n: 5 };
      const result = applyTestScore(existing, 60);
      expect(result.s).toBe('learning');
    });
  });

  describe('score and attempt counter', () => {
    it('records the exact score given', () => {
      const result = applyTestScore(undefined, 55);
      expect(result.sc).toBe(55);
    });

    it('increments attempt counter from undefined (first attempt)', () => {
      const result = applyTestScore(undefined, 50);
      expect(result.n).toBe(1);
    });

    it('increments attempt counter from existing entry', () => {
      const existing = { s: 'learning', sc: 50, n: 3 };
      const result = applyTestScore(existing, 70);
      expect(result.n).toBe(4);
    });

    it('overwrites previous score with latest score', () => {
      const existing = { s: 'mastered', sc: 90, n: 2 };
      const result = applyTestScore(existing, 40);
      expect(result.sc).toBe(40);
    });
  });

  describe('immutability', () => {
    it('does not mutate the existing state entry', () => {
      const existing = { s: 'learning', sc: 50, n: 1 };
      applyTestScore(existing, 90);
      expect(existing.s).toBe('learning');
      expect(existing.sc).toBe(50);
      expect(existing.n).toBe(1);
    });
  });
});

// ── applyTraceCorrect ─────────────────────────────────────────────────────────

describe('applyTraceCorrect', () => {
  it('adds 10 points on first correct trace', () => {
    const result = applyTraceCorrect(undefined);
    expect(result.sc).toBe(10);
  });

  it('accumulates points across multiple correct traces', () => {
    let state = undefined;
    for (let i = 0; i < 5; i++) state = applyTraceCorrect(state);
    expect(state.sc).toBe(50);
  });

  it('caps accumulated score at 100', () => {
    const existing = { s: 'learning', sc: 95, n: 9 };
    const result = applyTraceCorrect(existing);
    expect(result.sc).toBe(100);
  });

  it('transitions to mastered at exactly 80 points', () => {
    const existing = { s: 'learning', sc: 70, n: 7 };
    const result = applyTraceCorrect(existing);
    expect(result.sc).toBe(80);
    expect(result.s).toBe('mastered');
  });

  it('stays learning below 80 points', () => {
    const existing = { s: 'learning', sc: 60, n: 6 };
    const result = applyTraceCorrect(existing);
    expect(result.s).toBe('learning');
  });

  it('increments attempt counter', () => {
    const existing = { s: 'learning', sc: 40, n: 4 };
    const result = applyTraceCorrect(existing);
    expect(result.n).toBe(5);
  });

  it('requires 8 correct traces to reach mastered from zero', () => {
    let state = undefined;
    let attempts = 0;
    while (true) {
      state = applyTraceCorrect(state);
      attempts++;
      if (state.s === 'mastered') break;
      if (attempts > 20) throw new Error('Never reached mastered');
    }
    expect(attempts).toBe(8);
  });
});

// ── isTraceCorrect ────────────────────────────────────────────────────────────

describe('isTraceCorrect', () => {
  it('returns true for an exact match', () => {
    expect(isTraceCorrect('민법 제1조', '민법 제1조')).toBe(true);
  });

  it('returns false when answer differs', () => {
    expect(isTraceCorrect('민법 제2조', '민법 제1조')).toBe(false);
  });

  it('trims whitespace from user input', () => {
    expect(isTraceCorrect('  민법 제1조  ', '민법 제1조')).toBe(true);
  });

  it('does NOT trim whitespace from the stored answer (strict matching)', () => {
    // The stored answer is compared as-is; if it has no trailing space it should fail
    expect(isTraceCorrect('민법 제1조', '민법 제1조 ')).toBe(false);
  });

  it('is case-sensitive', () => {
    expect(isTraceCorrect('abc', 'ABC')).toBe(false);
  });

  it('returns false for empty input against non-empty answer', () => {
    expect(isTraceCorrect('', '민법 제1조')).toBe(false);
  });

  it('returns true for empty input matching empty answer', () => {
    expect(isTraceCorrect('', '')).toBe(true);
  });
});
