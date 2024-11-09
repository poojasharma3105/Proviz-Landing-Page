const express = require('express');
const Applicant = require('../models/Applicant');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, statement } = req.body;

  if (!name || !email || !phone || !statement) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const newApplicant = new Applicant({ name, email, phone, statement });
    await newApplicant.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error in submission. Please try again.' });
  }
});

module.exports = router;
