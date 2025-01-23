import { IIdiom } from "../i-idiom";
import { LevelA2CTypes } from "../level-a2c-types";

export interface IOxford {
  term: string;
  partOfSpeech?: string;
  image?: string;
  cefr?: LevelA2CTypes;
  academic?: boolean;
  ox3000?: boolean;
  ox5000?: boolean;
  verbForms?: IOxfordVerbForms;
  definitions: IOxfordDefinition[];
  pronunciations: IOxfordPronunciations;
  wordOrigin?: string;
  idioms?: IIdiom[];
}

export interface IOxfordPronunciations {
  uk: IOxfordPronunciation[];
  us: IOxfordPronunciation[];
}

export interface IOxfordPronunciation {
  pronunciation: string;
  audio: string;
}

export interface IOxfordDefinitionExample {
  text: string;
  contextForm?: string;
}

export interface IOxfordDefinition {
  senseNumber?: number;
  partOfSpeech?: string;
  cefr: LevelA2CTypes;
  oxford3000?: boolean;
  oxford5000?: boolean;
  definition: string;
  sensetop?: string;
  labels?: string;
  examples: IOxfordDefinitionExample[];
  synonyms?: string[];
  antonyms?: string[];
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
