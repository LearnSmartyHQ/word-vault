import { findCard } from '../findCard';

describe('findCard', () => {
  it('should find and return complete card data for "abandon"', () => {
    const result = findCard('abandon');

    expect(result).not.toBeNull();
    expect(result).toMatchObject({
      term: 'abandon',
      partOfSpeech: 'verb',
      academic: true,
      ox3000: true,
      cefr: 'b2',

      // Check verb forms
      verbForms: {
        presentSimple: {
          iYouWeThey: 'abandon',
          heSheIt: 'abandons'
        },
        pastSimple: 'abandoned',
        pastParticiple: 'abandoned',
        ingForm: 'abandoning'
      },

      // Check definitions array
      definitions: expect.arrayContaining([
        expect.objectContaining({
          senseNumber: 1,
          definition: expect.any(String),
          sensetop: expect.any(String),
          cefr: 'b2',
          ox3000: true,
          examples: expect.arrayContaining([
            expect.objectContaining({
              text: 'The baby had been abandoned by its mother.'
            })
          ]),
          collocations: expect.objectContaining({
            adverb: expect.arrayContaining(['hastily']),
            phrases: expect.arrayContaining([
              'abandon somebody to their fate',
              'be left abandoned',
              'be found abandoned'
            ])
          })
        })
      ]),

      // Check pronunciations
      pronunciations: {
        uk: expect.arrayContaining([
          expect.objectContaining({
            pronunciation: '/əˈbændən/',
            audio: 'ab/abandon/abandon__gb_2.mp3'
          })
        ]),
        us: expect.arrayContaining([
          expect.objectContaining({
            pronunciation: '/əˈbændən/',
            audio: 'ab/abandon/abandon__us_2.mp3'
          })
        ])
      },

      // Check word origin
      wordOrigin: expect.stringContaining('late Middle English')
    });

    // Additional specific checks
    if (result) {
      // Check definitions length
      expect(result.definitions).toHaveLength(5);

      // Check specific definition contents
      expect(result.definitions[0]).toMatchObject({
        senseNumber: 1,
        definition: 'to leave somebody, especially somebody you are responsible for, with no intention of returning'
      });

      // Check pronunciations array lengths
      expect(result.pronunciations.uk).toHaveLength(4);
      expect(result.pronunciations.us).toHaveLength(4);

      // Check all verb forms are present
      expect(result.verbForms).toMatchObject({
        presentSimple: {
          iYouWeThey: 'abandon',
          heSheIt: 'abandons'
        },
        pastSimple: 'abandoned',
        pastParticiple: 'abandoned',
        ingForm: 'abandoning'
      });
    }
  });

  it('should return null for non-existing word', () => {
    const result = findCard('nonexistentword123');
    expect(result).toBeNull();
  });

  it('should return null and handle error for malformed json file', () => {
    const result = findCard('malformed');
    expect(result).toBeNull();
  });
});