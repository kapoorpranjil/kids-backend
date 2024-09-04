const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  teacherName: { type: String, required: true },
  studentName: { type: String, required: true },
  studentClass: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  baseName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Form = mongoose.model('Form', FormSchema);
module.exports = Form;




