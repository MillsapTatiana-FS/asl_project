const util = require('util')
const path = require('path')

//load image into Sequelize model
const { Image } = require('../models')

//define express middleware that will upload  image
const uploadImage = async (req, res, next) => {

    //define the final file path for image
    let uploadPath = `${__dirname}/../public/images/%s%s`
    //if prev middleware did not pass an ImageId then leave
    if (!req.imageId) { return }
    //check to see if there are any files to load
    if (Object.keys(req.files).length > 0) {
        //get the extension from the incoming file(jpg, gif)
        const extension = path.extname(req.files.image.name)
        //show the file path based on imageId and file extension
        uploadPath = util.format(uploadPath, req.imageId, extension)
        //move file from temp location to final path
        return await req.files.image.mv(uploadPath)
        //update the Image model with file extension uploaded
        .then(async () => await Image.update(
            { extension },
            { where: { id: Number(req.imageId) } }
        ))}
}

module.exports = { uploadImage }