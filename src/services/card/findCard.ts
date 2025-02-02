import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { IOxford } from '../../types/index.js';
import { baseCardPath } from '../const.js';

export function findCard(id: string): IOxford | null {
  const firstTwoDigits = id.slice(0, 2);
  const fileName = id + '.json';
  const filePath = join(baseCardPath, firstTwoDigits, fileName);

  console.log('filePath', filePath);

  if (!existsSync(filePath)) {
    console.debug(`Word with slug "${id}" does not exist. ${filePath}`);
    return null;
  }

  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as IOxford;
  } catch (error) {
    console.debug(`Error reading file for ID: ${id}`, error);
    return null;
  }
}
