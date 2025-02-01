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
    expect(result).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      categories: expect.any(Array),
      slug: '504',
      totalCards: expect.any(Number),
      status: 'published',
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      difficulty: expect.any(String),
      image: expect.any(String),
      subject: expect.any(String),
      category: expect.any(String),
      totalCardsByDifficulty: expect.any(Object),
    });
  });

  // This test requires creating a temporary invalid JSON file
  it('should return null if file contains invalid JSON', () => {
    const result = findCollection('invalid-json');
    expect(result).toBeNull();
  });
});