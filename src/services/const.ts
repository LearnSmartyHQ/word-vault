import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const baseCollectionPath = join(__dirname, '../../data/collections');
export const baseCardPath = join(__dirname, '../../data/cards');
