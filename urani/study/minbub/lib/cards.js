/**
 * Pure business logic for the Minbub study tool.
 * These functions are DOM-free and fully unit-testable.
 */

/**
 * Hashes a password string using SHA-256.
 * @param {string} password
 * @returns {Promise<string>} hex digest
 */
export async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Filters cards based on category, part, and memorisation status.
 * @param {Array<{id:string, category:string, part:string}>} cards
 * @param {Object} state  - keyed by card id: { s: 'new'|'learning'|'mastered', sc: number, n: number }
 * @param {{ category?: string, part?: string, status?: string }} filters
 * @returns {Array} filtered subset of cards
 */
export function filterCards(cards, state, { category = '', part = '', status = '' } = {}) {
  return cards.filter(c => {
    if (category && c.category !== category) return false;
    if (part && c.part !== part) return false;
    if (status) {
      const s = state[c.id] ? state[c.id].s : 'new';
      if (s !== status) return false;
    }
    return true;
  });
}

/**
 * Computes overall memorisation progress.
 * @param {Object} state
 * @param {number} totalCards
 * @returns {{ done: number, total: number, progressPct: number }}
 */
export function computeProgress(state, totalCards) {
  let done = 0;
  Object.values(state).forEach(item => {
    if (item.s === 'mastered') done++;
  });
  const progressPct = totalCards > 0 ? Math.round((done / totalCards) * 100) : 0;
  return { done, total: totalCards, progressPct };
}

/**
 * Returns the next card index (wraps around).
 * @param {number} curIdx
 * @param {number} length
 * @returns {number}
 */
export function nextIndex(curIdx, length) {
  if (length === 0) return 0;
  return (curIdx + 1) % length;
}

/**
 * Returns the previous card index (wraps around).
 * @param {number} curIdx
 * @param {number} length
 * @returns {number}
 */
export function prevIndex(curIdx, length) {
  if (length === 0) return 0;
  return (curIdx - 1 + length) % length;
}

/**
 * Applies a test score to a card's state, returning the updated state entry.
 * Score thresholds: >= 80 → mastered, > 0 → learning, 0 → learning (first attempt).
 * @param {{ s: string, sc: number, n: number }|undefined} existing - current state for this card (undefined if first attempt)
 * @param {number} score - 0-100
 * @returns {{ s: string, sc: number, n: number }}
 */
export function applyTestScore(existing, score) {
  const entry = existing ? { ...existing } : { s: 'learning', sc: 0, n: 0 };
  entry.n++;
  entry.sc = score;
  if (score >= 80) {
    entry.s = 'mastered';
  } else {
    entry.s = 'learning';
  }
  return entry;
}

/**
 * Applies a correct trace to a card's state, accumulating score by +10 (capped at 100).
 * Transitions to 'mastered' when accumulated score reaches >= 80.
 * @param {{ s: string, sc: number, n: number }|undefined} existing
 * @returns {{ s: string, sc: number, n: number }}
 */
export function applyTraceCorrect(existing) {
  const entry = existing ? { ...existing } : { s: 'learning', sc: 0, n: 0 };
  entry.n++;
  entry.sc = Math.min(100, entry.sc + 10);
  if (entry.sc >= 80) {
    entry.s = 'mastered';
  }
  return entry;
}

/**
 * Checks whether the user's trace input exactly matches the card answer.
 * Trims leading/trailing whitespace from the input only (answer is stored as-is).
 * @param {string} input
 * @param {string} answer
 * @returns {boolean}
 */
export function isTraceCorrect(input, answer) {
  return input.trim() === answer;
}

/**
 * Serialises state to a JSON string for localStorage persistence.
 * @param {Object} state
 * @returns {string}
 */
export function serialiseState(state) {
  return JSON.stringify(state);
}

/**
 * Deserialises state from a localStorage JSON string.
 * Returns an empty object if the string is absent or malformed.
 * @param {string|null} raw
 * @returns {Object}
 */
export function deserialiseState(raw) {
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
