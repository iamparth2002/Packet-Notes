const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', groupRoutes);
app.use('/api', noteRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

module.exports = app;