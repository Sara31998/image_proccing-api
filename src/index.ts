//import the files used in this file
// import the fsfile from fs
import fsfileimage from 'fs';
// import exxpress from express to used app
import expressapp, { Response } from 'express';
// the router from
import routerimage from './route/index';
// the path of folder
import pathoffile from 'path';
//creat the app
const app = expressapp();
// the port of server
const port = 3000;
// used of app to router
app.use('/api', routerimage);
// the responsed to get the link
app.get('/', (_, res: Response): void => {
  res.status(200).send('Server Working'); // when the server is succeful
});
// Work The Server in Browser
app.listen(port, (): void => {
  // make sure resize folder exites
  const resizePathofimagesresize = pathoffile.resolve(__dirname, '../images/resize');
  // the function to used in the resizing of images
  //existsSync used to synchronously check if a file already exists in the given path or not.
  if (!fsfileimage.existsSync(resizePathofimagesresize)) {
    // the fs.mkdir()  is used to create a directory asynchronously.
    fsfileimage.mkdirSync(resizePathofimagesresize);
  }
  // the link of server
  console.log(`http://localhost: ${port}`);
});
//Export of application to use in any files we need
export default app;
