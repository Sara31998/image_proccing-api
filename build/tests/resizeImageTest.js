'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const path_1 = __importDefault(require('path'));
const imageOrg_1 = __importDefault(require('../imageOrg'));
const pathOfFileFullImage = path_1.default.resolve(__dirname, '../../../images/fullsize/image1.jpg');
const pathOfFileResizeImage = path_1.default.resolve(__dirname, '../../../images/resize/image1.jpg');
describe('ImageResizer Function', () => {
  it('after sucessfully resizing an image returns abuffer', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const bufferImage = yield imageOrg_1.default.imageResizing({
        heightimage: 100,
        widthimage: 150,
        pathOfFileFullImage,
        pathOfFileResizeImage,
      });
      expect(bufferImage).toBeInstanceOf(Buffer);
    }));
  it('promise is rejecting if something went wrong', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield expectAsync(
        imageOrg_1.default.imageResizing({
          heightimage: 100,
          widthimage: 150,
          pathOfFileFullImage,
          pathOfFileResizeImage,
        }),
      ).toBeRejected();
    }));
});
