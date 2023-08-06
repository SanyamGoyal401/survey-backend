const { Cloudinary } = require("../../config");
const getDataUri = require("./data-uri");



async function uploadFile(file) {
    try {
        const FileUri = getDataUri(file);
        const result = await Cloudinary.uploader.upload(FileUri.content);
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = uploadFile;