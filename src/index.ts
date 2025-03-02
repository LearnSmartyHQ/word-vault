export * from "./data/cards/index.js";
export * from "./data/collections/index.js";
export * from "./services/index.js";
export * from "./types/index.js";

export const greet = (name: string = "World!"): string => {
	return `Hello, ${name}!`;
};
