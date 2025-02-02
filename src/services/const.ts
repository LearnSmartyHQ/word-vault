import { join } from "path";

const currentDir = process.cwd();

export const baseCollectionPath = join(currentDir, './data/collections');
export const baseCardPath = join(currentDir, './data/cards');
