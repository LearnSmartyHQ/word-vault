import { describe, expect, it, vi } from "vitest";
import type { ICollection } from "../../../types/index.js";
import { getAllCollectionCards } from "../getAllCollectionCards.js";
import { getAllCollections } from "../getAllCollections.js";

// Mock the getAllCollections function
vi.mock("../getAllCollections.js", () => ({
	getAllCollections: vi.fn(() => mockCollections),
}));

const mockCollections: ICollection[] = [
	{
		id: 1,
		title: "Collection 1",
		slug: "collection-1",
		totalCards: 4,
		status: "published",
		createdAt: "2024-01-01",
		categories: [
			{
				id: 1,
				title: "Category 1",
				slug: "category-1",
				totalCards: 2,
				cards: ["apple", "banana", "cat", "dog"],
			},
		],
	},
	{
		id: 2,
		title: "Collection 2",
		slug: "collection-2",
		totalCards: 3,
		status: "published",
		createdAt: "2024-01-02",
		categories: [
			{
				id: 2,
				title: "Category 2",
				slug: "category-2",
				totalCards: 3,
				cards: ["banana", "elephant", "fox"],
			},
		],
	},
];

describe("getAllCollectionCards", () => {
	it("should return all unique words from all collections sorted alphabetically", () => {
		const result = getAllCollectionCards();

		// Check if all words are present
		expect(result).toContain("apple");
		expect(result).toContain("banana");
		expect(result).toContain("cat");
		expect(result).toContain("dog");
		expect(result).toContain("elephant");
		expect(result).toContain("fox");

		// Check total number of unique words
		expect(result.length).toBe(6); // Should be 6 unique words

		// Check if array is sorted
		expect(result).toEqual([
			"apple",
			"banana",
			"cat",
			"dog",
			"elephant",
			"fox",
		]);

		// Verify no duplicates (banana appears in both collections)
		const uniqueWords = new Set(result);
		expect(uniqueWords.size).toBe(result.length);
	});

	it("should return an empty array when there are no collections", () => {
		vi.mocked(getAllCollections).mockReturnValueOnce([]);
		const result = getAllCollectionCards();
		expect(result).toEqual([]);
	});
});
