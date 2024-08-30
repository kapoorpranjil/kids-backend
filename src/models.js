const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  teacherName: { type: String, required: true },
  studentName: { type: String, required: true },
  studentClass: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const Form = mongoose.model('Form', FormSchema);
module.exports = Form;




