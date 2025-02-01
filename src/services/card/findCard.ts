import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { IOxford } from '../../types';
import { baseCardPath } from '../const';

export function findCard(id: string): IOxford | null {
  const firstTwoDigits = id.slice(0, 2);
  const fileName = id + '.json';
  const filePath = join(baseCardPath, firstTwoDigits, fileName);

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
