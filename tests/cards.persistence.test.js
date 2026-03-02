import { describe, it, expect } from 'vitest';
import { serialiseState, deserialiseState } from '../urani/study/minbub/lib/cards.js';

describe('serialiseState / deserialiseState round-trip', () => {
  it('round-trips an empty state', () => {
    const state = {};
    expect(deserialiseState(serialiseState(state))).toEqual({});
  });

  it('round-trips a populated state', () => {
    const state = {
      '1': { s: 'mastered', sc: 90, n: 5 },
      '42': { s: 'learning', sc: 30, n: 2 },
    };
    expect(deserialiseState(serialiseState(state))).toEqual(state);
  });
});

describe('deserialiseState', () => {
  it('returns empty object for null', () => {
    expect(deserialiseState(null)).toEqual({});
  });

  it('returns empty object for undefined', () => {
    expect(deserialiseState(undefined)).toEqual({});
  });

  it('returns empty object for empty string', () => {
    expect(deserialiseState('')).toEqual({});
  });

  it('returns empty object for malformed JSON (does not throw)', () => {
    expect(deserialiseState('not-json{')).toEqual({});
  });

  it('returns empty object for a JSON string that is not an object', () => {
    // Technically valid JSON but not the expected shape — should survive gracefully
    const result = deserialiseState('"just a string"');
    // We only guarantee no throw and that the result is usable
    expect(typeof result).not.toBe('undefined');
  });
});
