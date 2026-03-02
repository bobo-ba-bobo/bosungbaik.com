import { describe, it, expect } from 'vitest';
import { hashPassword } from '../urani/study/minbub/lib/cards.js';

describe('hashPassword', () => {
  it('returns a 64-character hex string (SHA-256 output)', async () => {
    const hash = await hashPassword('test1234');
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(/^[0-9a-f]+$/);
  });

  it('produces a deterministic output for the same input', async () => {
    const hash1 = await hashPassword('mypassword');
    const hash2 = await hashPassword('mypassword');
    expect(hash1).toBe(hash2);
  });

  it('produces different hashes for different passwords', async () => {
    const hash1 = await hashPassword('password1');
    const hash2 = await hashPassword('password2');
    expect(hash1).not.toBe(hash2);
  });

  it('produces different hashes for passwords that differ only by case', async () => {
    const lower = await hashPassword('Password');
    const upper = await hashPassword('password');
    expect(lower).not.toBe(upper);
  });

  it('handles unicode/Korean password input', async () => {
    const hash = await hashPassword('암호1234');
    expect(hash).toHaveLength(64);
  });

  it('produces the correct SHA-256 for a known input', async () => {
    // echo -n "abc" | sha256sum → ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
    const hash = await hashPassword('abc');
    expect(hash).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  });
});
