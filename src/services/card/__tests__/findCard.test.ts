import { findCard } from '../findCard';

describe('findCard', () => {
  it('should find and return card data for existing word "abandon"', () => {
    const result = findCard('abandon');

    expect(result).not.toBeNull();
    expect(result).toMatchObject({
      id: 'abandon',
      word: 'abandon',
    });
  });

  it('should return null for non-existing word', () => {
    const result = findCard('nonexistentword123');

    expect(result).toBeNull();
  });

  it('should return null and handle error for malformed json file', () => {
    // This assumes the word ID points to a malformed JSON file
    const result = findCard('malformed');

    expect(result).toBeNull();
  });
});