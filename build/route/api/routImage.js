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
const imageOrg_1 = __importDefault(require('../../imageOrg'));
const routImages = express_1.default.Router();
routImages.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const nameoffile = req.query['nameoffile'];
    const heightimage = req.query['heightimage'] ? parseInt(req.query['heightimage'], 10) : null;
    const widthimage = req.query['widthimage'] ? parseInt(req.query['widthimage'], 10) : null;
    if (!nameoffile || !heightimage || !widthimage) {
      res.status(400).send('Verify that the URL is correct and contain nameoffile, heightimage and widthimage');
      return;
    }
    const pathOfFileFullImage = `${path_1.default.resolve(__dirname, `../../../images/fullsize/${nameoffile}.jpg`)}`;
    const pathOfFileResizeImage = `${path_1.default.resolve(
      __dirname,
      `../../../images/resize/${nameoffile}-${heightimage}x${widthimage}.jpg`,
    )}`;
    const fullSizeImage = yield promises_1.default.stat(pathOfFileFullImage).catch(() => {
      res.status(404).send('Image doesnot exite');
      return null;
    });
    if (!fullSizeImage) {
      return;
    }
    const creatingResizing = yield promises_1.default.stat(pathOfFileResizeImage).catch(() => {
      return null;
    });
    if (creatingResizing) {
      promises_1.default
        .readFile(pathOfFileResizeImage)
        .then((resizeData) => {
          res.status(200).contentType('jpg').send(resizeData);
        })
        .catch(() => {
          res.status(500).send('Errors in processing the image');
        });
    } else {
      imageOrg_1.default
        .imageResizing({
          widthimage,
          heightimage,
          pathOfFileFullImage,
          pathOfFileResizeImage,
        })
        .then((imageResizing) => {
          res.status(200).contentType('jpg').send(imageResizing);
        })
        .catch(() => {
          res.status(500).send('Errors in processing the image');
        });
    }
  }),
);
exports.default = routImages;
