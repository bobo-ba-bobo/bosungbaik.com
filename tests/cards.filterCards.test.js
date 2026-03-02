import { describe, it, expect } from 'vitest';
import { filterCards } from '../urani/study/minbub/lib/cards.js';

const CARDS = [
  { id: '1', category: '총칙', part: 'Part 1', prompt: 'Q1', answer: 'A1' },
  { id: '2', category: '총칙', part: 'Part 2', prompt: 'Q2', answer: 'A2' },
  { id: '3', category: '물권', part: 'Part 1', prompt: 'Q3', answer: 'A3' },
  { id: '4', category: '물권', part: 'Part 2', prompt: 'Q4', answer: 'A4' },
  { id: '5', category: '채권', part: 'Part 1', prompt: 'Q5', answer: 'A5' },
];

const STATE = {
  '1': { s: 'mastered', sc: 90, n: 3 },
  '2': { s: 'learning', sc: 50, n: 2 },
  '3': { s: 'learning', sc: 30, n: 1 },
  // cards 4 and 5 have no state entry → implicitly 'new'
};

describe('filterCards', () => {
  describe('no filters', () => {
    it('returns all cards when no filters are provided', () => {
      expect(filterCards(CARDS, STATE)).toHaveLength(5);
    });

    it('returns all cards when all filters are empty strings', () => {
      expect(filterCards(CARDS, STATE, { category: '', part: '', status: '' })).toHaveLength(5);
    });
  });

  describe('category filter', () => {
    it('filters by category', () => {
      const result = filterCards(CARDS, STATE, { category: '총칙' });
      expect(result).toHaveLength(2);
      expect(result.every(c => c.category === '총칙')).toBe(true);
    });

    it('returns empty array for unknown category', () => {
      expect(filterCards(CARDS, STATE, { category: '존재하지않음' })).toHaveLength(0);
    });
  });

  describe('part filter', () => {
    it('filters by part', () => {
      const result = filterCards(CARDS, STATE, { part: 'Part 1' });
      expect(result).toHaveLength(3);
      expect(result.every(c => c.part === 'Part 1')).toBe(true);
    });
  });

  describe('status filter', () => {
    it('filters to mastered cards', () => {
      const result = filterCards(CARDS, STATE, { status: 'mastered' });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });

    it('filters to learning cards', () => {
      const result = filterCards(CARDS, STATE, { status: 'learning' });
      expect(result).toHaveLength(2);
      expect(result.map(c => c.id)).toEqual(expect.arrayContaining(['2', '3']));
    });

    it('treats cards with no state entry as "new"', () => {
      const result = filterCards(CARDS, STATE, { status: 'new' });
      expect(result).toHaveLength(2);
      expect(result.map(c => c.id)).toEqual(expect.arrayContaining(['4', '5']));
    });
  });

  describe('combined filters', () => {
    it('combines category and part filters', () => {
      const result = filterCards(CARDS, STATE, { category: '총칙', part: 'Part 1' });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('1');
    });

    it('combines category and status filters', () => {
      const result = filterCards(CARDS, STATE, { category: '물권', status: 'new' });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('4');
    });

    it('returns empty when no cards match combined filters', () => {
      const result = filterCards(CARDS, STATE, { category: '채권', status: 'mastered' });
      expect(result).toHaveLength(0);
    });
  });

  describe('edge cases', () => {
    it('returns empty array when cards array is empty', () => {
      expect(filterCards([], STATE, { category: '총칙' })).toHaveLength(0);
    });

    it('treats all cards as new when state is empty', () => {
      const result = filterCards(CARDS, {}, { status: 'new' });
      expect(result).toHaveLength(5);
    });
  });
});
