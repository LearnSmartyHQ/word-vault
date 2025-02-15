import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const baseCollectionPath = path.join(__dirname, '../../data/collections');
export const baseCardPath = path.join(__dirname, '../../data/cards');
