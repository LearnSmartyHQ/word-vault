import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { ICollection } from '../../types';
import { baseCollectionPath } from '../const';

export function findCollection(id: string): ICollection | null {
  const filePath = join(baseCollectionPath, `${id}.json`);

  if (!existsSync(filePath)) {
    console.error(`Collection with slug "${id}" does not exist.`);
    return null;
  }

  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as ICollection;
  } catch (error) {
    console.error(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
