'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const routImage_1 = __importDefault(require('./api/routImage'));
const images_list_1 = __importDefault(require('./api/images_list'));
const routs = express_1.default.Router();
routs.use('/images', routImage_1.default);
routs.use('/imageList', images_list_1.default);
exports.default = routs;
