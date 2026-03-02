/**
 * Data integrity tests for cards_data.json.
 *
 * These tests act as a regression guard: if the data file is regenerated or
 * edited, any schema violations or unexpected structural changes will be
 * caught immediately.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

let cards;

beforeAll(() => {
  const raw = readFileSync(
    join(__dirname, '../urani/study/minbub/cards_data.json'),
    'utf8'
  );
  const data = JSON.parse(raw);
  cards = data.cards;
});

// ── Top-level structure ───────────────────────────────────────────────────────

describe('cards_data.json top-level structure', () => {
  it('has a "cards" array at the root', () => {
    expect(Array.isArray(cards)).toBe(true);
  });

  it('contains more than 0 cards', () => {
    expect(cards.length).toBeGreaterThan(0);
  });
});

// ── Required fields ───────────────────────────────────────────────────────────

const REQUIRED_STRING_FIELDS = ['id', 'category', 'part', 'prompt', 'answer'];

describe('required fields', () => {
  it.each(REQUIRED_STRING_FIELDS)(
    'every card has a non-empty "%s" string field',
    field => {
      const violations = cards.filter(
        c => typeof c[field] !== 'string' || c[field].trim() === ''
      );
      expect(violations).toHaveLength(0);
    }
  );
});

// ── ID uniqueness ─────────────────────────────────────────────────────────────

describe('card IDs', () => {
  it('are all unique', () => {
    const ids = cards.map(c => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });
});

// ── Allowed enum values ───────────────────────────────────────────────────────

const VALID_CATEGORIES = new Set(['비교', '요건효과', '조문', '판례', '핵심숫자']);
const VALID_PARTS = new Set([
  '제1편 민법총칙',
  '제2편 채권총론',
  '제3편 채권각론',
  '제4편 물권법',
  '제5편 친족상속법',
]);

describe('category values', () => {
  it('every card has a recognised category', () => {
    const violations = cards.filter(c => !VALID_CATEGORIES.has(c.category));
    expect(violations).toHaveLength(0);
  });
});

describe('part values', () => {
  it('every card belongs to a recognised part (편)', () => {
    const violations = cards.filter(c => !VALID_PARTS.has(c.part));
    expect(violations).toHaveLength(0);
  });
});

// ── Priority field ────────────────────────────────────────────────────────────

describe('priority field', () => {
  it('is a number on every card', () => {
    const violations = cards.filter(c => typeof c.priority !== 'number');
    expect(violations).toHaveLength(0);
  });

  it('only contains values 1 or 2', () => {
    const violations = cards.filter(c => c.priority !== 1 && c.priority !== 2);
    expect(violations).toHaveLength(0);
  });
});

// ── Optional fields ───────────────────────────────────────────────────────────

describe('exam field (optional)', () => {
  it('is either null or a string on every card', () => {
    const violations = cards.filter(
      c => c.exam !== null && c.exam !== undefined && typeof c.exam !== 'string'
    );
    expect(violations).toHaveLength(0);
  });
});

describe('page field (optional)', () => {
  it('is either null, undefined, or a number on every card', () => {
    const violations = cards.filter(
      c => c.page !== null && c.page !== undefined && typeof c.page !== 'number'
    );
    expect(violations).toHaveLength(0);
  });
});

// ── Snapshot-style count guards ───────────────────────────────────────────────
// Update these if the data set is intentionally changed.

describe('card counts (snapshot guard)', () => {
  it('has the expected total number of cards', () => {
    expect(cards.length).toBe(2382);
  });

  it('has cards in all 5 parts', () => {
    const parts = new Set(cards.map(c => c.part));
    expect(parts.size).toBe(5);
  });

  it('has cards in all 5 categories', () => {
    const cats = new Set(cards.map(c => c.category));
    expect(cats.size).toBe(5);
  });
});
