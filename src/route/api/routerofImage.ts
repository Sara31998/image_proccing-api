// The file is import to use in this file
// the import fsfile rom fspromises to used function realted to the file
import fsfile from 'fs/promises';
// the import of path of file from the path
import pathoffile from 'path';
// import stats from fs
import { Stats } from 'fs';
// import imageOrg from files to used to resizing of images
import imageOrgtoresize from '../../imageOrge_files/imageOrg';
//  import express to used in server
import expressimage, { Request, Response } from 'express';
// create the Router of image
const routImagesexpress = expressimage.Router();
// used the vriables to create the link of image
routImagesexpress.get('/', async (reqforimage: Request, resfromimage: Response): Promise<void> => {
  // the first query is filename
  const nameoffile = reqforimage.query['nameoffile'];
  // the secound query is height of image
  const heightimage = reqforimage.query['heightimage']
    ? parseInt(reqforimage.query['heightimage'] as string, 10)
    : null;
  // the third query is width of image
  const widthimage = reqforimage.query['widthimage'] ? parseInt(reqforimage.query['widthimage'] as string, 10) : null;
  // Chech of the correct of query data
  if (!nameoffile || !heightimage || !widthimage) {
    // if the vriables is not find
    resfromimage.status(401).send('Verify that the URL is correct and contain nameoffile, heightimage and widthimage'); // when the vriables is not finde return 401 and this text
    return;
  }
  // The Path of Full Size Image  for the image
  const pathOfFileFullImage = `${pathoffile.resolve(__dirname, `../../../images/fullsize/${nameoffile}.jpg`)}`;
  //The Path of Resize Image file for the images after theair processing
  const pathOfFileResizeImage = `${pathoffile.resolve(
    __dirname,
    `../../../images/resize/${nameoffile}-${heightimage}x${widthimage}.jpg`,
  )}`;
  //Check if The filename exiset from Fullsize Folder
  // the vriables of the images for full sizes
  const fullSizeImage: null | Stats = await fsfile.stat(pathOfFileFullImage).catch(() => {
    //  the responses from the full of image is 404 when the image not Exites
    resfromimage.status(404).send('Image doesnot exite');
    //then return null
    return null;
  });
  // the vriables of creating resizing of images and this path of fille resizing
  const creatingResizing: null | Stats = await fsfile.stat(pathOfFileResizeImage).catch(() => {
    return null; // return nulll
  });
  // if the not found the fullsizeimage return nothing
  if (!fullSizeImage) {
    return;
  }
  // the creating resizing and reading of theair folder
  if (creatingResizing) {
    fsfile
      .readFile(pathOfFileResizeImage)
      .then((resizeData: Buffer) => {
        // if resizing image from type of buffer
        // when the resizing image is the statue 200 and the content type is jpg then send this data (images)
        resfromimage.status(200).contentType('jpg').send(resizeData);
      })
      .catch(() => {
        // if  the resizing images is not finding return 501 and this Errors
        resfromimage.status(501).send('Errors in processing the image');
      });
  } else {
    // The function to processing of resizing of images
    imageOrgtoresize
      .functionofimageResizing({
        // the prppraties of processing of resizing images
        pathOfFileFullImage, // the path of full size image folder
        pathOfFileResizeImage, // the path of resiz image folder
        widthimage, // the width of image
        heightimage, // the height of image
      })
      .then((functionofimageResizing: Buffer) => {
        //respons of the image is 200 then returned of image by the new width and height  in the new folder
        resfromimage.status(200).contentType('jpg').send(functionofimageResizing);
      })
      .catch(() => {
        //respons of the image is 501 because  is errors
        resfromimage.status(501).send('Errors in processing the image');
      });
  }
});
//Export of Function to use in any files we need
export default routImagesexpress;
