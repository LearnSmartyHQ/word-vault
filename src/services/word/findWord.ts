import { readFileSync } from 'fs';
import { join } from 'path';
import { IWord } from '../../types';

const basePath = join(__dirname, '../../../data/words');

export function findWord(id: string): IWord | null {
  try {
    const filePath = join(basePath, `${id}.json`);
    const data = readFileSync(filePath, 'utf-8');

    return JSON.parse(data) as IWord;
  } catch (error) {
    console.error(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
