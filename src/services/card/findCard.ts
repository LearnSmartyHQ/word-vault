import { IOxford } from '../../types/index.js';

export async function findCard(id: string): Promise<IOxford | null> {
  const baseCardPath = '../../../data/cards';

  const firstTwoDigits = id.slice(0, 2);
  const fileName = `${id}.json`;
  const filePath = `${baseCardPath}/${firstTwoDigits}/${fileName}`

  try {
    // Use dynamic import instead of readFileSync
    const data = await import(filePath);
    return data.default as IOxford;
  } catch (error) {
    console.debug(`❌ Word with slug "${id}" does not exist!`);
    console.debug(error);
    return null;
  }
}
