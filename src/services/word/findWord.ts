import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { IOxford } from '../../types';
import { baseWordPath } from '../const';

export function findWord(id: string): IOxford | null {
  const filePath = join(baseWordPath, `${id}.json`);

  if (!existsSync(filePath)) {
    console.error(`Word with slug "${id}" does not exist.`);
    return null;
  }

  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as IOxford;
  } catch (error) {
    console.error(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
