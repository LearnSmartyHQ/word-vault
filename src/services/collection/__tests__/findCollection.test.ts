import '@jest/globals';
import { findCollection } from '../findCollection';

describe('findCollection', () => {
  it('should return null if collection does not exist', () => {
    const result = findCollection('non-existent-collection');
    expect(result).toBeNull();
  });

  it('should return collection data if file exists and is valid', () => {
    const result = findCollection('504');

    expect(result).not.toBeNull();
    expect(result).toEqual({
      id: 1,
      title: "504 Essential Words",
      slug: "504",
      subject: "English",
      category: "Vocabulary",
      description: "A collection of essential English words to improve your vocabulary.",
      difficulty: "Intermediate",
      totalCards: 504,
      totalCardsByDifficulty: {
        A1: 10,
        A2: 20,
        B1: 30,
        B2: 40,
        C1: 50,
        C2: 60
      },
      status: "published",
      createdAt: "2024-09-07T12:00:00Z",
      updatedAt: expect.any(String), // This may be generated
      categories: expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          title: "Lesson 1",
          description: "The first lesson of the 504 Essential Words collection.",
          cards: [
            "abandon", "keen", "jealous", "tact", "oath",
            "vacant", "hardship", "gallant", "data", "unaccustomed",
            "bachelor", "qualify"
          ]
        }),
        expect.objectContaining({
          id: 42,
          title: "Lesson 42",
          cards: [
            "maintain", "snub", "endure", "wrath", "expose",
            "legend", "ponder", "resign", "drastic", "wharf",
            "amend", "ballot"
          ]
        })
      ]),
    });

    // Verify the total number of categories
    expect(result?.categories).toHaveLength(42);

    // Verify each category has exactly 12 cards
    result?.categories.forEach(category => {
      expect(category.cards).toHaveLength(12);
    });
  });

  // This test requires creating a temporary invalid JSON file
  it('should return null if file contains invalid JSON', () => {
    const result = findCollection('invalid-json');
    expect(result).toBeNull();
  });
});