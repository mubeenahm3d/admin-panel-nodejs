const express = require("express")
const generalController = require("../controllers/general")

const router = express.Router()

router.post("/insert", generalController.insert)
router.post("/list", generalController.fetch)
router.post("/delete", generalController.delete)
module.exports = router