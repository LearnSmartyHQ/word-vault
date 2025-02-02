export * from './services/index.js';
export * from './types/index.js';

export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
