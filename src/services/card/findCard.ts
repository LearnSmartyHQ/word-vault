import { cardImportMap } from '../../data/cards/importMap.js';
import { IOxford } from '../../types/index.js';

export async function findCard(id: string): Promise<IOxford | null> {

  if (cardImportMap[id]) {
    try {
      const data = await cardImportMap[id]();
      return data.default as IOxford;
    } catch (error) {
      console.debug(`❌ Error loading card for ID: ${id}`, error);
      return null;
    }
  } else {
    console.debug(`❌ Word with slug "${id}" does not exist.`);
    return null;
  }
}
