const express = require('express')

const router = express.Router();
const app = express()

const Object = require('../controlers/categoryControlers')
const Object2 = require('../controlers/productControlers')
router.post('/',Object.creerObjet )
module.exports = router;