import type { IOxford, IOxfordDefinition } from '../../types/index.js';
import { findCard } from './findCard.js';

export async function getCardDefinitions(id: string): Promise<IOxfordDefinition[] | null> {
  const wordData: IOxford | null = await findCard(id);

  return wordData?.definitions || null;
}
