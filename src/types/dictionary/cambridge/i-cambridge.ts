import { IIdiom } from "../i-idiom.js";
import { LevelA2CTypes } from "../level-a2c-types.js";
import { CambridgeCodeTypes } from "./i-cambridge-codes.js";

export interface ICambridge {
    pronunciations: {
      uk: string[];
      us: string[];
    };
    meanings: ICambridgeDefinition[];
    idioms: IIdiom[];
}

export interface ICambridgeDefinition {
    partOfSpeech: string;
    code: CambridgeCodeTypes[];
    context: string;
    definition: string;
    examples: string[];
    synonyms: string[];
    antonyms: string[];
    level: LevelA2CTypes;
}
