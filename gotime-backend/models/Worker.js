const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // các trường khác của worker
});

const Worker = mongoose.model('Worker', workerSchema);
module.exports = Worker;
