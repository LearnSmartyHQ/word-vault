import { IOxfordDefinition, IWord } from 'src/types';
import { findWord } from './findWord';

export function getDefinitions(id: string): IOxfordDefinition[] | null {
  const wordData: IWord | null = findWord(id);
  return wordData?.definitions || null;
}
