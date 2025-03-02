import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardsDir = path.join(__dirname, "../src/data/cards");

const subfolders = fs
	.readdirSync(cardsDir)
	.filter((dir) => fs.statSync(path.join(cardsDir, dir)).isDirectory());

// ** Step 1: Generate an `index.ts` for each subfolder **
function generateSubfolderIndexes() {
	for (const subfolder of subfolders) {
		const subfolderPath = path.join(cardsDir, subfolder);
		const files = fs
			.readdirSync(subfolderPath)
			.filter((file) => file.endsWith(".json"));

		const exportName = `dir_${subfolder.replace(/\W/g, "_")}`;

		const imports = 'import type { IOxford } from "../../../types/index.js";\n';
		let mappings = `export const ${exportName}: Record<string, () => Promise<IOxford>> = {\n`;

		for (const file of files) {
			const key = file.replace(".json", "");
			// const importName = key.replace(/\W/g, '_') + '_json'; // Convert to a valid JS variable name
			// imports += `import ${importName} from "./${file}" with { type: "json" };\n`;
			mappings += `  "${key}": () => import("./${file}") as unknown as Promise<IOxford>,\n`;
		}

		mappings += "};\n";
		const finalContent = `${imports}\n${mappings}`;
		fs.writeFileSync(path.join(subfolderPath, "index.ts"), finalContent);
		console.log(`✅ Generated ${subfolderPath}/index.ts`);
	}
}

// ** Step 2: Generate the root `index.ts` in `cards/` **
function generateRootIndex() {
	let imports = 'import type { IOxford } from "../../types/index.js";\n\n';
	let mappings =
		"export const cards: Record<string, () => Promise<IOxford>> = {\n";

	for (const subfolder of subfolders) {
		const exportName = `dir_${subfolder.replace(/\W/g, "_")}`;
		imports += `import { ${exportName} } from "./${subfolder}/index.js";\n`;
		mappings += `  ...${exportName},\n`;
	}

	mappings += "};\n";
	const finalContent = `${imports}\n${mappings}`;
	fs.writeFileSync(path.join(cardsDir, "index.ts"), finalContent);
	console.log(`✅ Generated ${cardsDir}/index.ts`);
}

// ** Run both steps **
generateSubfolderIndexes();
generateRootIndex();
