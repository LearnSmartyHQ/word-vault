import { IOxford, IOxfordDefinition } from '../../types/index.js';
import { findCard } from './findCard.js';

export function getCardDefinitions(id: string): IOxfordDefinition[] | null {
  const wordData: IOxford | null = findCard(id);

  return wordData?.definitions || null;
}
