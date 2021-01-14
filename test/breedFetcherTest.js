const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, data.trim());

      done();
    });
  });

  it('returns  Breed not found if invalid/not-existent breed is passed in', (done) => {
    fetchBreedDescription('hola', (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, "Breed not found");

      const expectedDesc = null;

      // compare returned description
      assert.equal(expectedDesc, data);

      done();
    });
  });
});