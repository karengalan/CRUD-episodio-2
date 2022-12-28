const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({  
    destination : (req,file,callback) => {
        callback(null,'./public/images/products')
    },
    filename:(req,file,callback) => {  
        callback(null,`img-${Date.now()}${path.extname(file.originalname)}`)
    } 
})
const fileFilter = function(req,file,callback) {
    if (!file.originalname.match(/\.(jpg|jepg|png|jfif|gif|webp)$/)){
        req.fileValidationError = "Sólo se permite imágenes";
        return callback(null,false,req.fileValidationError)
    }
    callback(null,true);
} 

module.exports = multer({
    storage
})
