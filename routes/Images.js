//Where all routes will be defined, process incoming requests and map to controller
const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/Images')

//put in middleware
const { uploadImage } = require('../middlewares')

//routes
router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)
//add uploadImage middlewear to create route
router.post('/', imageCtrl.create, uploadImage)
//repeat to the update route
router.post('/:id', imageCtrl.update, uploadImage)

router.delete('/:id', imageCtrl.remove)
router.all('/:id/delete', imageCtrl.remove)

module.exports = router;