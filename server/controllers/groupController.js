const Group = require('../models/groupModel');

exports.createGroup = async (req, res) => {
  try {
    const { name, color } = req.body;
    const group = new Group({ name, color });
    await group.save();
    res.status(201).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGroups = async (req, res) => {
    try {
      const groups = await Group.find().sort({ createdAt: -1 });;
      res.status(200).json(groups);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };