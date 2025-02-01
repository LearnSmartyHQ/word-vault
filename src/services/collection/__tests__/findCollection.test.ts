import '@jest/globals';
import { existsSync, readFileSync } from 'fs';
import { beforeEach, describe, it } from 'node:test';
import { ICollection } from '../../../types';
import { findCollection } from '../findCollection';

// Mock the fs module
jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

describe('findCollection', () => {
  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return null if collection does not exist', () => {
    // Mock existsSync to return false
    (existsSync as jest.Mock).mockReturnValue(false);

    const result = findCollection('non-existent-id');

    expect(result).toBeNull();
    expect(existsSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).not.toHaveBeenCalled();
  });

  it('should return collection data if file exists and is valid', () => {
    const mockCollection: ICollection = {
        id: 1, // Changed from string to number to match ICollection type
        title: 'Test Collection',
        description: 'A test collection',
        categories: [],
        slug: '',
        totalCards: 0,
        status: 'published',
        createdAt: ''
    };

    // Mock successful file operations
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockCollection));

    const result = findCollection('test-collection');

    expect(result).toEqual(mockCollection);
    expect(existsSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledTimes(1);
  });

  it('should return null if JSON parsing fails', () => {
    // Mock file exists but contains invalid JSON
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFileSync as jest.Mock).mockReturnValue('invalid json');

    const result = findCollection('invalid-json');

    expect(result).toBeNull();
    expect(existsSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledTimes(1);
  });

  it('should return null if file reading fails', () => {
    // Mock file exists but reading fails
    (existsSync as jest.Mock).mockReturnValue(true);
    (readFileSync as jest.Mock).mockImplementation(() => {
      throw new Error('File read error');
    });

    const result = findCollection('error-file');

    expect(result).toBeNull();
    expect(existsSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledTimes(1);
  });
});