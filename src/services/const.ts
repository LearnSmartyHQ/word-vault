
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const baseCollectionPath =  `${__dirname}/../../data/collections`;
export const baseCardPath =  `${__dirname}/../../data/cards`;
