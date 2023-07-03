const asyncHandler = require('express-async-handler')
const Note = require('../models/noteModel')

const getNotes = asyncHandler(async (req, res) => {
   const notes = await Note.find({ user: req.user._id })
   res.json(notes)
})

const createNote = asyncHandler(async (req, res) => {
   const { title, content } = req.body
   if (!title || !content) {
      res.status(400)
      throw new Error("Please Fiil all the Feilds")
   } else {
      const note = new Note({ user: req.user._id, title, content })
      const createNote = await note.save()
      res.status(201).json(createNote)
   }
}
)

const getNoteById = asyncHandler(async (req, res) => {
   const note = await Note.findById(req.params.id)
   if (note) {
      res.json(note)
   } else {
      res.status(404).json({ message: " Note not Found" })
   }
})

const updateNote = asyncHandler(async (req, res) => {
   const { title, content } = req.body
   const note = await Note.findById(req.params.id)
   if (note.user.toString() !== req.user._id.toString()) {
      throw new Error("You can't perform this action")
   }
   if (note) {
      note.title = title
      note.content = content
      const updatedNote = await note.save()
      res.json(updatedNote)
   } else {
      res.status(404);
      throw new Error("Note not Found")
   }
})

const deleteNote = asyncHandler(async (req, res) => {
   const note = await Note.findById(req.params.id)
   if (note.user.toString() !== req.user._id.toString()) {
      res.status(401)
      throw new Error("You Can't perform this action")
   }
   if (note) {
      await note.remove()
      res.json({ message: "Note Deleted" })
   } else {
      res.status(404);
      throw new Error("Note not Found")
   }
})
module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote } 