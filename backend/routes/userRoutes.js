const express = require('express')
const { registerUser, authUser, userProfileUpdate } = require('../controllers/userController')
const { protect } = require('../middlwares/authMiddleware')
const router = express.Router()

router.route("/signup").post(registerUser)
router.route("/login").post(authUser)
router.route("/profile").post(protect, userProfileUpdate)

module.exports = router 