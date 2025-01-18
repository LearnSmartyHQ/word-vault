import { readFileSync } from 'fs';
import { join } from 'path';
import { ICollection } from '../../types';

const basePath = join(__dirname, '../../../data/collections');

export function findCollection(id: string): ICollection | null {
  try {
    const filePath = join(basePath, `${id}.json`);
    const data = readFileSync(filePath, 'utf-8');

    return JSON.parse(data) as ICollection;
  } catch (error) {
    console.error(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
