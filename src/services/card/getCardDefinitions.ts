import { IOxford, IOxfordDefinition } from '../../types';
import { findCard } from './findCard';

export function getCardDefinitions(id: string): IOxfordDefinition[] | null {
  const wordData: IOxford | null = findCard(id);

  return wordData?.definitions || null;
}
