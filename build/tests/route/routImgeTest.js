'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const supertest_1 = __importDefault(require('supertest'));
const promises_1 = __importDefault(require('fs/promises'));
const path_1 = __importDefault(require('path'));
const image_size_1 = __importDefault(require('image-size'));
const index_1 = __importDefault(require('../../index'));
describe('GET /api/images', () => {
  it('response with 400 if without pramater', (good) => {
    (0, supertest_1.default)(index_1.default).get('/api/images').expect(400, good);
  });
  it('respons 400 if missing paramter', (good) => {
    (0, supertest_1.default)(index_1.default).get('/api/images?nameoffile=test&heightimage=100').expect(400, good);
  });
  it('respons 400 if missing paramter', (good) => {
    (0, supertest_1.default)(index_1.default).get('/api/images?nameoffile=test&heightimage=100').expect(400, good);
  });
  it('respons 404 if image does not exite', (good) => {
    (0, supertest_1.default)(index_1.default)
      .get('/api/images?nameoffile=test&heightimage=100&widthimage=100')
      .expect(404, good);
  });
  it('respons 200 if correct and image exite', (good) => {
    (0, supertest_1.default)(index_1.default).get('/api/images?nameoffile=image1&heightimage=100').expect(200, good);
  });
  it('creat a  resize version from the image', (good) => {
    (0, supertest_1.default)(index_1.default)
      .get('/api/images?nameoffile=image1&heightimage=100')
      .then(() => {
        promises_1.default
          .stat(path_1.default.resolve(__dirname, '../../../images/resize/image1-100x100.jpg'))
          .then((statOfFile) => expect(statOfFile).not.toBeNull());
        good();
      });
  });
  it('creat a Resize version from image with the correct width and height', (good) => {
    (0, supertest_1.default)(index_1.default)
      .get('/api/images?nameoffile=image1&heightimage=100&widthimage=150')
      .then(() => {
        const dimentionOfImage = (0, image_size_1.default)(
          path_1.default.resolve(__dirname, '../../../images/resize/image1-100x150.jpg'),
        );
        expect(dimentionOfImage.height).toEqual(100);
        expect(dimentionOfImage.width).toEqual(150);
        good();
      });
  });
});
