import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Check if we are in an ESM environment (import.meta is available)
let __dirname;
try {
  __dirname = dirname(fileURLToPath(import.meta.url));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e: unknown) {
  // Fallback for Metro (React Native) which does not support import.meta
  __dirname = __dirname || resolve();
}

export const baseCollectionPath = `${__dirname}/../../data/collections`;
export const baseCardPath = `${__dirname}/../../data/cards`;
