const connection = require('../src/database/config/connection');
const dbBuild = require('../src/database/config/build');

// beforeAll(() => dbBuild());

describe('Testing 1 return value 1', () => {
  test('Should return 1 when given 1', () => {
    const actual = 1;
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

// afterAll(() => connection.end());
