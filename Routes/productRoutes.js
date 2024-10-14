const express = require('express')
const router = express.Router()
router.use(express.json())

const Object = require('../controlers/categoryControlers')
const Object2 = require('../controlers/productControlers')


router.post('/',Object.creerObjet )
module.exports = router;
