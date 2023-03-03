// The file is import to use in this file
// the app of server to used is import from index
import apptoused from '../../index';
// import the request from the supertest to endpoint
import requesttotest from 'supertest';
//The testing of imagelist to endpoint
// the test if the link is the same world
describe('GET /api/imageofList', (): void => {
  // then returen the response 200 it succeful
  it('response with 200', (good): void => {
    // the response to get the api in the link
    requesttotest(apptoused).get('/api/imageogList').expect(200, good);
    good();
  });
});
