export * from './services/index.js';
export * from './types/index.js';

export const greet = (name: string = "World!"): string => {
  return `Hello, ${name}!`;
};
