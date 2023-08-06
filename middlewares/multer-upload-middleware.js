const multer = require('multer');

const storage = multer.memoryStorage({
    filename: (req, file, cb)=>{
        const ext = file.mimetype.split('/')[1];
        cb(null, `file-${file.fieldname}-${Date.now()}.${ext}`);
    }
});

const upload = multer({storage}).any();

module.exports = upload;