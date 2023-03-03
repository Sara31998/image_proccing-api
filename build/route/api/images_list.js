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
const express_1 = __importDefault(require('express'));
const promises_1 = __importDefault(require('fs/promises'));
const path_1 = __importDefault(require('path'));
const imge_list_rout = express_1.default.Router();
imge_list_rout.get('./', (_req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const folderOfPathFullImage = `${path_1.default.resolve(__dirname, '../../../images/fullsize')}`;
    const files_f = yield promises_1.default.readdir(folderOfPathFullImage).catch(() => {
      res.status(500).send('Errors in processing the images');
      return null;
    });
    if (!files_f) {
      return;
    }
    let htmlResponseInPage = `
    <h1>Image is Avialable</h1>
    <p>You can Find all image tha are via the route /api/images</p>
    <ul>`;
    files_f.forEach((files_f) => {
      htmlResponseInPage = htmlResponseInPage + `<li>${files_f}</li>`;
    });
    res.status(200).send(`${htmlResponseInPage}</ul>`);
  }),
);
exports.default = imge_list_rout;
