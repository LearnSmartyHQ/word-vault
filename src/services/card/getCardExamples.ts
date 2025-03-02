import type {
	IOxford,
	IOxfordDefinition,
	IOxfordDefinitionExample,
} from "../../types/index.js";
import { findCard } from "./findCard.js";

export async function getCardExamples(
	id: string,
): Promise<IOxfordDefinitionExample[] | null> {
	const wordData: IOxford | null = await findCard(id);
	if (!wordData?.definitions) {
		return null;
	}

	return wordData.definitions.flatMap(
		(definition: IOxfordDefinition) => definition.examples,
	);
}
