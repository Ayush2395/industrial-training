const mongoose = require("mongoose");
const schemaCreate = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now(),
  },
});

const SchemaTemplate = mongoose.model("dataEntry", schemaCreate);

module.exports = SchemaTemplate;
