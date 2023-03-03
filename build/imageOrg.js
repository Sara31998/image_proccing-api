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
const sharp_1 = __importDefault(require('sharp'));
const promises_1 = __importDefault(require('fs/promises'));
function imageResizing({ widthimage, heightimage, pathOfFileFullImage, pathOfFileResizeImage }) {
  return __awaiter(this, void 0, void 0, function* () {
    const data = yield promises_1.default.readFile(pathOfFileFullImage).catch(() => null);
    if (!data) {
      return Promise.reject();
    }
    const imegerize = yield (0, sharp_1.default)(data)
      .resize(widthimage, heightimage)
      .toBuffer()
      .catch(() => null);
    if (!imegerize) {
      return Promise.reject();
    }
    return promises_1.default
      .writeFile(pathOfFileResizeImage, imegerize)
      .then(() => {
        return imegerize;
      })
      .catch(() => {
        return Promise.reject();
      });
  });
}
exports.default = { imageResizing };
