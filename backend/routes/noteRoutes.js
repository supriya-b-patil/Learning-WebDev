const express = require('express')
const router = express.Router()
const { getNotes, createNote, getNoteById, updateNote, deleteNote } = require('../controllers/noteController')
const { protect } = require('../middlwares/authMiddleware')

router.route("/").get(protect, getNotes)
router.route("/create").post(protect, createNote)
router.route("/:id").get(protect, getNoteById).put(protect, updateNote).delete(protect, deleteNote)

module.exports = router