# Image Processing API

this project is the first in the Advanced Web Track

it is the project we do in I have the folder from images . i write code to tack the image and resizing by width and height then put in folder is creating have name resize folder.

# To creat the resizing folder of version of image

`````http
GET /api/images/?nameoffile={filename}&heightimage={hieght}&widthimage={width} ````

-------------------------------------------
nameoffile ====>  'sring' ====> **Required**. The name of image file
-------------------------------------------
Resizing are :
--------------
heightimage  ====> 'number' ====> **Required**.
-----------------------------------------------
widthimage  ====> 'number' ====> **Required**.


# Script
1) Run build
------
npx tsc
------

2) run test
-------------------------------
npm run build && npm run jasmine
--------------------------------

3) run start
----------------------
nodemon src/index.ts
----------------------


# Author

---Sara Gamal---
`````
#   i m a g e _ p r o c c i n g - a p i  
 