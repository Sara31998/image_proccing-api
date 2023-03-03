// The file is import to use in this file
// the rout of image from the routimage folder
import routerofImages from './api/routerofImage';
// import of images from the list images
import imgeofthelistingapper from './api/listsogimages';
// The express of the images to esed in server
import expressofimage from 'express';
const routerofimage = expressofimage.Router();
// The routs from the lists of the images
routerofimage.use('/listsofimages', imgeofthelistingapper);
// The images from The rout of image and their resizing
routerofimage.use('/routerimages', routerofImages);
//Export of routs to use in any files we need
export default routerofimage;
