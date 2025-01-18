import { IIdiom } from "../i-idiom";
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

export interface IOxfordDefinition {
  partOfSpeech: string;
  definition: string;
  examples: string[];
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
