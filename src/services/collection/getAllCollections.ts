import { readdirSync } from 'fs';
import { ICollection } from '../../types';
import { baseCollectionPath } from '../const';
import { findCollection } from './findCollection';

export function getAllCollections(): ICollection[] | null {
  let filesList: string[] = [];
  try{
    const folderFiles = readdirSync(baseCollectionPath)
    filesList = folderFiles.filter((file) => file.endsWith('.json'))
  } catch (error) {
    console.error(`Error reading folder ${baseCollectionPath}`, error);
    return null;
  }

  const collections: ICollection[] = [];

  filesList.forEach((file) => {
    const slug = file.replace('.json', '');
    const collection = findCollection(slug);
    if (collection) {
      collections.push(collection);
    }
  });

  return collections;
}
