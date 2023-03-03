'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
//import the files used in this file
const express_1 = __importDefault(require('express'));
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const index_1 = __importDefault(require('./route/index'));
//creat the app
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', index_1.default);
app.get('/', (_, res) => {
  res.status(200).send('Server Working');
});
app.listen(port, () => {
  const resizePath = path_1.default.resolve(__dirname, '../images/resize');
  if (!fs_1.default.existsSync(resizePath)) {
    fs_1.default.mkdirSync(resizePath);
  }
  console.log(`http://localhost: ${port}`);
});
exports.default = app;
