//Where all routes will be defined, process incoming requests and map to controller
const app = require('express')
const router = express.router()
const productCtrl = require('../controllers/Products')

router.get('/', productCtrl.index)

module.exports = router
