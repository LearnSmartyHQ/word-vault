import { IOxford, IOxfordDefinition, IOxfordDefinitionExample } from "../../types/index.js";
import { findCard } from "./findCard.js";

export function getCardExamples(id: string): IOxfordDefinitionExample[] | null {
    const wordData: IOxford | null = findCard(id);
    if (!wordData?.definitions) {
        return null;
    }

    return wordData.definitions.flatMap((definition: IOxfordDefinition) => definition.examples);
  }