const express = require("express")
const generalController = require("../controllers/general")
const shopsController = require("../controllers/shops")

const router = express.Router()

router.post("/insert", generalController.insert)
router.post("/list", shopsController.fetch)
router.post("/delete", generalController.delete)
module.exports = router