export type CambridgeCodeTypes =
| CambridgeAdjectiveLabel
| CambridgeNounLabels
| CambridgeVerbLabels
| CambridgeOtherLabels;

export type CambridgeAdjectiveLabel =
  | 'adjective' // A word that describes a noun or pronoun
  | '[after noun]' // An adjective that only follows a noun
  | '[after verb]' // An adjective that only follows a verb
  | '[before noun]' // An adjective that only goes before a noun
  | 'comparative' // The form of an adjective or adverb that expresses a difference in amount, number, degree, or quality
  | 'superlative' // The form of an adjective or adverb that expresses the most of a particular quality
  | '[not gradable]'; // An adjective that has no comparative or superlative form

  export type CambridgeNounLabels =
  | 'noun' // A word that refers to a person, place, or thing
  | '[C]' // Countable noun
  | '[U]' // Uncountable noun
  | '[S]' // Singular noun
  | 'plural' // Plural form of a noun
  | 'noun [plural]' // A noun that can only be used in the plural
  | '[usually plural]' // A noun usually used in the plural
  | '[usually singular]' // A countable noun usually used in the singular
  | '[+ sing/pl verb]'; // Noun used with a singular or plural verb depending on usage

  export type CambridgeVerbLabels =
  | 'verb' // A word that describes an action, state, or experience
  | '[T]' // Transitive verb
  | '[I]' // Intransitive verb
  | 'auxiliary verb' // Verbs like be, have, and do
  | 'modal verb' // Verbs like must and can
  | 'past simple' // The past simple form of the verb
  | 'past participle' // The past participle form of the verb
  | 'present participle' // The present participle form of the verb
  | 'phrasal verb' // A verb followed by an adverb or preposition
  | '[L]' // Linking verb
  | '[L only + adjective]' // A linking verb followed only by an adjective
  | '[L only + noun]' // A linking verb followed only by a noun
  | '[+ adv/prep]' // A verb followed by an adverb or preposition
  | '[+ that clause]' // A verb followed by a clause starting with "that"
  | '[+ question word]' // A verb followed by a question word
  | '[+ speech]' // A verb used with direct speech
  | '[+ to infinitive]' // A verb followed by an infinitive with "to"
  | '[+ infinitive without to]' // A verb followed by an infinitive without "to"
  | '[+ -ing] verb' // A verb followed by the -ing form of the verb
  | '[+ not or so]' // A verb followed immediately by "not" or "so"
  | '[+ two objects]' // A verb with a direct and indirect object
  | '[+ obj + adjective]' // A verb with an object followed by an adjective
  | '[+ obj + noun]' // A verb with an object followed by a noun
  | '[+ obj + as noun or adjective]' // A verb with an object followed by "as" and a noun/adjective
  | '[+ obj + to be noun or adjective]' // A verb with an object followed by "to be" and a noun/adjective
  | '[+ obj + that clause]' // A verb with an object followed by a "that" clause
  | '[+ obj + to infinitive]' // A verb with an object followed by an infinitive with "to"
  | '[+ obj + infinitive without to]' // A verb with an object followed by an infinitive without "to"
  | '[+ obj + past participle]' // A verb with an object followed by a past participle
  | '[+ obj + ing verb]' // A verb with an object followed by the -ing form
  | '[+ obj + question word]' // A verb with an object followed by a question word
  | '[usually passive]' // A verb usually used in the passive voice
  | '[not continuous]'; // A verb not used in the continuous form

  export type CambridgeOtherLabels =
  | 'adverb' // A word that modifies a verb, adjective, or other adverb
  | 'conjunction' // A word that links two parts of a sentence
  | 'determiner' // A word like "the" or "this"
  | 'number' // A word that refers to a number
  | 'ordinal number' // A number that shows the position of something in a list (1st, 2nd, etc.)
  | 'preposition' // A word that connects a noun phrase or pronoun to another word
  | 'predeterminer' // A word like "both" or "all"
  | 'pronoun' // A word like "it" or "mine"
  | 'prefix' // A letter/group of letters like un-, pre-, etc.
  | 'suffix' // A letter/group of letters like -less, -ment, etc.
  | 'exclamation' // A word or expression like "damn!" or "oh dear!"
  | '[+ ing verb]' // A word or phrase followed by the -ing form of the verb
  | '[+ to infinitive]' // A word or phrase followed by the infinitive with "to"
  | '[+ that]' // A word or phrase followed by a clause beginning with "that"
  | '[+ question word]' // A word or phrase followed by a question word
  | '[as form of address]'; // A word or phrase used to address someone (e.g., Mr., dear)
