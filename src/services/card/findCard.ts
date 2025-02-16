import { wordVaultCards } from '../../data/cards/index.js';
import type { IOxford } from '../../types/index.js';

export async function findCard(id: string): Promise<IOxford | null> {

  if (wordVaultCards[id]) {
    try {
      const data = await wordVaultCards[id]();
      return data;
    } catch (error) {
      console.debug(`❌ Error loading card for ID: ${id}`, error);
      return null;
    }
  } else {
    console.debug(`❌ Word with slug "${id}" does not exist.`);
    return null;
  }
}
