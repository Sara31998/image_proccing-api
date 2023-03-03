// The file is import to use in this file
//The import if the file from promiss
import fsoffile from 'fs/promises';
//import from sharp to used in resizing of image
import sharpresizeofimage from 'sharp';
//The properties  of Images Resize
interface pramaterofresizingofimage {
  // The path of folder of full size of image
  pathOfFileFullImage: string;
  //The psth of folder of resizing o image after processing
  pathOfFileResizeImage: string;
  // The height of image to resizng its
  heightimage: number;
  // The width of image to resizng its
  widthimage: number;
}
// The Function of Resizing of Image
const functionofimageResizing = async ({
  // the prpratis is image resizing
  pathOfFileFullImage,
  pathOfFileResizeImage,
  heightimage,
  widthimage,
}: pramaterofresizingofimage): Promise<Buffer> => {
  //this functio is returns buffer
  // the vriable newdataofimage is the image from the full data
  const newdataofimage: null | Buffer = await fsoffile.readFile(pathOfFileFullImage).catch(() => null);
  //if the vriable is not so return the rejected
  if (!newdataofimage) {
    return Promise.reject();
  }
  // Rsizing of imag and give of Path then saved in resizeFolder
  const dataimegerize: Buffer | null = await sharpresizeofimage(newdataofimage)
    // resizing of dtat
    .resize(heightimage, widthimage)
    .toBuffer()
    // if the data is null so exite from await
    .catch(() => null);
  // if data is not  so return the rejected
  if (!dataimegerize) {
    return Promise.reject();
  }
  //  creat the file of resizing image to put of imagein her.
  return (
    fsoffile
      .writeFile(pathOfFileResizeImage, dataimegerize)
      // when creat the file of resizing return the image after resizing
      .then(() => {
        return dataimegerize;
      })
      // return the rejected promise if fial
      .catch(() => {
        return Promise.reject();
      })
  );
};
//Export of Function to use in any files we need
export default { functionofimageResizing };
