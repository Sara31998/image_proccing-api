// The file is import to use in this file
// import of images to resizing from the imageOrg
import imageOrgfunction from '../../imageOrge_files/imageOrg';
// import path file from path
import pathoffile from 'path';
// The path of full size folder to orginal of images
const pathOfFileFullImage = pathoffile.resolve(__dirname, '../../../images/fullsize/image1.jpg');
// The path of resizing folder oafter the processing of images
const pathOfFileResizeImage = pathoffile.resolve(__dirname, '../../../images/resize/image1.jpg');
// the write the test of the folders of images
describe('The imageResizer function', (): void => {
  // if the images retern succeful
  it('returns a buffer after sucessfully resizing an image', async () => {
    const imageBufferSucce: Buffer = await imageOrgfunction.functionofimageResizing({
      // used the imgeorg to resizing of image
      // the path full sizing images
      pathOfFileFullImage,
      //  the path of resizing image
      pathOfFileResizeImage,
      // height of images to resizing
      heightimage: 100,
      // width of  images to resizing
      widthimage: 150,
    });
    expect(imageBufferSucce).toBeInstanceOf(Buffer); // the test of images result equal to Buffer
  });
  it('promise is rejecting if something went wrong', async () => {
    // if the images return rejected
    await expectAsync(
      imageOrgfunction.functionofimageResizing({
        // The path full sizing images
        pathOfFileFullImage: '',
        // the path resizing of images
        pathOfFileResizeImage,
        // height of images to resizing
        heightimage: 100,
        //width of images to resizing
        widthimage: 150,
      }),
    ).toBeRejected(); // if the images nut succefuly is return rejected
  });
});
