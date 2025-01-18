import { IIdiom } from "../i-idiom";
import { ITranslation } from "../i-translation";
import { LevelA2CTypes } from "../level-a2c-types";

export interface IOxford {
  pronunciations: IOxfordPronunciations;
  verbForms?: IOxfordVerbForms;
  level: LevelA2CTypes;
  definitions: IOxfordDefinition[];
  wordOrigin: string;
  idioms: IIdiom[];
}

export interface IOxfordPronunciations {
  uk: IOxfordPronunciation[];
  us: IOxfordPronunciation[];
}

export type IOxfordPronunciationRegion = 'uk' | 'us';

export interface IOxfordPronunciation {
  pronunciation: string;
  audio: string;
  region: IOxfordPronunciationRegion;
}

export interface IOxfordDefinitionExample {
  text: string;
  contextForm?: string;
  translations: ITranslation;
}

export interface IOxfordDefinition {
  senseNumber: number;
  partOfSpeech: string;
  cefr: LevelA2CTypes;
  oxford3000: boolean;
  oxford5000: boolean;
  definition: string;
  translations: ITranslation;
  sensetop: string;
  labels: string;
  examples: IOxfordDefinitionExample[];
  synonyms: string[];
  antonyms: string[];
  collocations?: IOxfordCollocations;
}

export interface IOxfordVerbForms {
  presentSimple: {
    iYouWeThey: string;
    heSheIt: string;
  };
  pastSimple: string;
  pastParticiple: string;
  ingForm: string;
}

export interface IOxfordCollocations {
  adverb?: string[];
  phrases?: string[];
  verbPlusAbandon?: string[];
  prepositions?: string[];
}
