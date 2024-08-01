const Note = require('../models/noteModel');

exports.getNotesByGroupId = async (req, res) => {
  try {
    const { groupId } = req.params;
    const notes = await Note.find({ groupId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

exports.createNote = async (req, res) => {
    try {
      const {  content, groupId } = req.body;
      const note = new Note({ content, groupId });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };