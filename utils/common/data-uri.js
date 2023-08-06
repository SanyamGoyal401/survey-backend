const DataURIParser = require('datauri/parser.js');
const path = require('path');

const getDataUri = (File) =>{
    const parser = new DataURIParser();
    const extName = path.extname(File.originalname).toString();
    return parser.format(extName, File.buffer);
}

module.exports = getDataUri