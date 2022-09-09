const supertest = require('supertest');
const connection = require('../src/database/config/connection');
const { dbBuild } = require('../src/database/config/build');
const router = require('../src/app');
const validateInputs = require('../public/assets/js/signup/logic');

beforeAll(() => {
  dbBuild();
});
afterAll(() => connection.end());

// Pure functions
describe('Testing validateInputs should return true when the values are valid for username', () => {
  test('Should return true when given mohammed', () => {
    const actual = validateInputs(/^[a-zA-Z]{3,}\d?/i, 'mohammed');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return false when given ss', () => {
    const actual = validateInputs(/^[a-zA-Z]{3,}\d?/i, 'ss');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return true when given Mohm', () => {
    const actual = validateInputs(/^[a-zA-Z]{3,}\d?/i, 'Moha');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given moh123', () => {
    const actual = validateInputs(/^[a-zA-Z]{3,}\d?/i, 'moh123');
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('Testing validateInputs should return true when the values are valid for email', () => {
  test('Should return false when given mohammed@gmail', () => {
    const actual = validateInputs(/^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/, 'mohammed@gmail');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return false when given mohammedgmail.com', () => {
    const actual = validateInputs(/^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/, 'mohammedgmail.com');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return false when given saif@hotmail.com', () => {
    const actual = validateInputs(/^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/, 'saif@hotmail.com');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return false when given saif@hotmailcom', () => {
    const actual = validateInputs(/^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/, 'saif@hotmailcom');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return false when given saif123@hotmail.com', () => {
    const actual = validateInputs(/^[a-zA-Z0-9]{6,30}@gmail.com|@hotmail.com$/, 'saif123@hotmail.com');
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('Testing validateInputs should return true when the values are valid for Password', () => {
  test('Should return true when given password1$', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, 'password1$');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return false when given password$', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, 'password$');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return false when given password1', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, 'password1');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return true when given password1$', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, 'password1$');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given 1$password', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '1$password');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given 145$password', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '145$password');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given $#@1paord', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '$#@1paord');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given $#@1pa555ord', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '$#@1pa555ord');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return true when given mo123$', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, 'mo123$');
    const expected = true;
    expect(actual).toBe(expected);
  });
  test('Should return false when given 1mo123', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '1mo123');
    const expected = false;
    expect(actual).toBe(expected);
  });
  test('Should return true when given $$$123', () => {
    const actual = validateInputs(/^(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/, '$$$123');
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe('Route checkUserAuth should return status code 200', () => {
  test('should return json file ', (done) => {
    supertest(router)
      .get('/checkUserAuth')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else done();
      });
  });
});

describe('signup route with status code 200', () => {
  test('should return json file', (done) => {
    supertest(router)
      .post('/signup').send({
        email: 'mohammed897@gmail.com',
        username: 'mohammed12345',
        password: '$password1234',
        confirmPassword: '$password1234',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else done();
      });
  });

  test('should return json file with bad request', (done) => {
    supertest(router)
      .post('/signup').send({
        email: 'mohammed897@gmail.com',
        username: 'mohammed12345',
        password: '$password1234',
        confirmPassword: '$password1234',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else {
          done();
        }
      });
  });
  test('should return json file with bad request error', (done) => {
    supertest(router)
      .post('/signup').send({
        email: 'mohammed897@gmail.com',
        username: 'mohammed12345',
        password: 'password1234',
        confirmPassword: '$password1234',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else {
          done();
        }
      });
  });
  test('should return json file with bad request error', (done) => {
    supertest(router)
      .post('/signup').send({
        email: 'mohammed897@gmail.',
        username: 'mohammed12345',
        password: 'password1234',
        confirmPassword: '$password1234',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.body.message).toEqual('"email" must be a valid email');
          done();
        }
      });
  });
});
describe('login route', () => {
  test('should return bad request with status code 400 ', (done) => {
    supertest(router)
      .post('/login').send({
        email: 'hmza@gm22ail.com',
        password: 'moh1234$$5',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.body.message).toEqual('Password or username are not correct ');
          done();
        }
      });
  });
  test('should return status code 200 ', (done) => {
    supertest(router)
      .post('/login').send({
        email: 'mohammed897@gmail.com',
        password: '$password1234',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.body.path).toEqual('../index.html');
          done();
        }
      });
  });
});
