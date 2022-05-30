//Where all routes will be defined, process incoming requests and map to controller
const express = require('Express')
const router = express.Router()
const imageCtrl = require('../controllers/Images')

router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)
router.post('/', imageCtrl.create)
router.post('/:id', imageCtrl.update)
router.delete('/:id', imageCtrl.remove)
router.all('/:id/delete', imageCtrl.remove)

module.exports = router;