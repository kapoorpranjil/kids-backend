const express = require('express');
const router = express.Router();
const Form = require('./models');

// POST endpoint to submit form data
router.post('/submit', async (req, res) => {
  const { teacherName, studentName, studentClass, phoneNumber, baseName } = req.body;

  if (!teacherName || !studentName || !studentClass || !phoneNumber) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newForm = new Form({ teacherName, studentName, studentClass, phoneNumber, baseName });
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
