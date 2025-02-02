import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { ICollection } from '../../types/index.js';
import { baseCollectionPath } from '../const.js';

export function findCollection(id: string): ICollection | null {
  const filePath = join(baseCollectionPath, `${id}.json`);

  if (!existsSync(filePath)) {
    console.debug(`Collection with slug "${id}" does not exist. ${filePath}`);
    return null;
  }

  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as ICollection;
  } catch (error) {
    console.debug(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
