const express = require('express');
const { getNotesByGroupId ,createNote} = require('../controllers/noteController');
const router = express.Router();

router.get('/groups/:groupId/notes', getNotesByGroupId);
router.post('/note', createNote);

module.exports = router;