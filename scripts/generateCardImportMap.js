import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardsDir = path.join(__dirname, '../data/cards');
const outputFile = path.join(cardsDir, 'importMap.ts');

function generateImportMap() {
  const categories = fs
    .readdirSync(cardsDir)
    .filter((dir) => fs.statSync(path.join(cardsDir, dir)).isDirectory());

  let mappings =
    `// eslint-disable-next-line @typescript-eslint/no-explicit-any\n` +
    'export const cardImportMap: Record<string, () => Promise<any>> = {\n';

  for (const category of categories) {
    const categoryPath = path.join(cardsDir, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith('.json'));

    for (const file of files) {
      const key = `${file.replace('.json', '')}`;
      mappings += `  "${key}": () => import("./${category}/${file}"),\n`;
    }
  }

  mappings += '};\n';
  fs.writeFileSync(outputFile, mappings);
  console.log(`✅ Generated ${outputFile}`);
}

generateImportMap();
