import { IOxford, IOxfordDefinition, IOxfordDefinitionExample } from "../../types";
import { findWord } from "./findWord";

export function getExamples(id: string): IOxfordDefinitionExample[] | null {
    const wordData: IOxford | null = findWord(id);
    if (!wordData?.definitions) {
        return null;
    }

    return wordData.definitions.flatMap((definition: IOxfordDefinition) => definition.examples);
  }