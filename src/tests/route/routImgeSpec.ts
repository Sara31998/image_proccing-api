// The file is import to use in this file
// the filepathe of fspromise
import fsfiles from 'fs/promises';
// the requesttest from supertest
import requesttest from 'supertest';
// the test to size of image
import sizeOfimage from 'image-size';
// the app to used
import appused from '../../index';
// the states from the fs
import { Stats } from 'fs';
// the path of files
import pathoffile from 'path';
// the supertest to test the endpoint
import supertestendpoint from 'supertest';
// the request to test
const request1 = supertestendpoint(appused);
// the test of the images
describe('GET /api/images', () => {
  // the test is retern 400 if this without paramter
  it('response with 401 if without pramater', async () => {
    const respons = await request1.get('/api/images');
    expect(respons.status).toBe(404);
  });
  // the test to is retern 401 if images not exite
  it('respons 404 if image does not exite', async () => {
    const respons = await request1.get('/api/images?nameoffile=test&heightimage=100&widthimage=100');
    expect(respons.status).toBe(404);
  });
  // the test to is return 200 if images exite
  it('respons 200 if correct and image exite', (good): void => {
         requesttest(appused).get('/api/images?nameoffile=image1&heightimage=100&widthimage=100').expect(200);
          good();
       });
  it('creat a  resize version from the image', (good): void => {
    requesttest(appused)
      .get('/api/images?nameoffile=image1&heightimage=100&widthimage=100')
      .then(() => {
        fsfiles
          .stat(pathoffile.resolve(__dirname, '../../../images/resize/image1-100x100.jpg'))
          .then((statOfFile: Stats) => expect(statOfFile).not.toBeNull());
        good();
      });
  });

  it('created a Resize version of the image with the correct height and width', (good): void => {
    requesttest(appused)
      .get('/api/images?nameoffile=image1&heightimage=100&widthimage=150')
      .then(() => {
        const dimensionsofimage = sizeOfimage(
          pathoffile.resolve(__dirname, '../../../images/resize/image1-100x150.jpg'),
        );
        expect(dimensionsofimage.height).toEqual(100);
        expect(dimensionsofimage.width).toEqual(150);
        good();
      });
  });
});

// The Testing of Image Routes
// describe('GET /api/images', () => {
//   it('response with 400 if without pramater', (done) => {
//      request(app).get('/api/images').expect(400);
//     done();
//   });
//   it('respons 404 if image does not exite', (good): void => {
//     request(app).get('/api/images?nameoffile=test&heightimage=100&widthimage=100').expect(404);
//      good();
//   });
//   it('respons 200 if correct and image exite', (good): void => {
//     request(app).get('/api/images?nameoffile=image1&heightimage=100&widthimage=100').expect(200);
//      good();
//   });
//   it('creat a  resize version from the image', (good): void => {
//     request(app)
//       .get('/api/images?nameoffile=image1&heightimage=100&widthimage=100')
//       .then(() => {
//         fs.stat(path.resolve(__dirname, '../../../images/resize/image1-100x100.jpg')).then((statOfFile: Stats) =>
//           expect(statOfFile).not.toBeNull(),
//         );
//         good();
//       });
//   });

//   it('created a Resize version of the image with the correct height and width',  (good): void  => {
//       request(app)
//         .get('/api/images?nameoffile=image1&heightimage=100&widthimage=150')
//         .then(() => {
//           const dimensionsofimage = sizeOf(path.resolve(__dirname, '../../../images/resize/image1-100x150.jpg'));
//           expect(dimensionsofimage.height).toEqual(100);
//           expect(dimensionsofimage.width).toEqual(150);
//           good();
//         });
//     });

// });
