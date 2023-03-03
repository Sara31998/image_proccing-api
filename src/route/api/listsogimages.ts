// The file is import to use in this file
// import fsfile from fspromises to used the function realted to files
import fsfile from 'fs/promises';
// the import express to used req and res
import expressnode, { Response, Request } from 'express';
// the import path rom path modules to creat the path of resizing file
import pathoffile from 'path';
// connected the list image with express to used in server by this vriable
const imgeofthelistingapper = expressnode.Router();
// the function of  lists image and response that
imgeofthelistingapper.get(
  '/',
  async (
    _req: Request,
    resoffile: Response,
  ): Promise<void> => { // this asunc return promises void
    //the folder of fullsize image  this path to take the image from this folder
    const folderOfPathFullImage = `${pathoffile.resolve(__dirname, '../../../images/fullsize')}`;
    // the paramter to used puts the images in full folder
    const offilesofimages: null | string[] = await fsfile.readdir(folderOfPathFullImage).catch(() => {
      resoffile.status(505).send('Errors in imaging is process'); // when the processing of image is Error return 505
      return null;
    });
    // the offiles is not find it return nulll
    if (!offilesofimages) {
      return;
    }
    //   The text is apper in the html to expline to the user
    let Thetextapper = `
    <body style="background-color:lightblue;>"
    <h2 style="color: red; size:24px;">You can found <strong>Image</strong> is Aviarable </h2>
    <h3 style =" color: blue; size: 24px;">the image is the find in rout<string>/api/images</strong></h3>
    <ul>`;
    // used the forEach function to gather the images in this folder
    offilesofimages.forEach((file: string): void => {
      // complet of the text appear in pages
      Thetextapper = Thetextapper + `<li>${file}</li>`;
    });
    resoffile.status(200).send(`${Thetextapper}</ul></body>`); //when the srever is 200 is the text appear
  },
);
//The function is exports to used in any another file
export default imgeofthelistingapper;
