// The file is import to use in this file
// the app used in the server
import apptoused from '../index';
// the request to the test
import requesttest from 'supertest';
// The testing of index
describe('GET /', (): void => {
  // when the respons is 200 it is sucessfull
  it('respons with 200', (good): void => {
    //when  the request is succefull is 200
    requesttest(apptoused).get('/').expect(200, good);
  });
});
