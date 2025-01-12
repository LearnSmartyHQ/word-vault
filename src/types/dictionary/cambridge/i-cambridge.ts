import { IIdiom } from "../i-idiom";
import { LevelA2CTypes } from "../level-a2c-types";
import { CambridgeCodeTypes } from "./i-cambridge-codes";

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
