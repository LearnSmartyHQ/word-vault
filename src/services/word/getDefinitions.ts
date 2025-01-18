import { IOxford, IOxfordDefinition } from '../../types';
import { findWord } from './findWord';

export function getDefinitions(id: string): IOxfordDefinition[] | null {
  const wordData: IOxford | null = findWord(id);

  return wordData?.definitions || null;
}
