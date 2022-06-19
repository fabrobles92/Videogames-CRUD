const multer = require("multer");



var storage = multer.diskStorage({   
  destination: (req, file, cb) => { 
      cb(null, 'uploads') 
  }, 
  filename: (req, file, cb) => { 
      cb(null, file.fieldname + '-' + Date.now()) 
  } 
}); 


//Vacio por que si no pongo storage en multer el file queda en memoria
module.exports = multer()
