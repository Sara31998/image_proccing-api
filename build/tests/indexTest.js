'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../index'));
describe('GET /', () => {
  it('respons with 200', (good) => {
    (0, supertest_1.default)(index_1.default).get('/').expect(200, good);
  });
});
