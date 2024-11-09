const express = require('express');
const Applicant = require('../models/Applicant');

const router = express.Router();

router.post('/apply', async (req, res) => {
  const { name, email, phone, statement } = req.body;

  if (!name || !email || !phone || !statement) {
    return res.status(400).json({ message: 'All fields are required!' });
  }
  console.log(name, email, phone, statement);

  try {
    const newApplicant = new Applicant({ name, email, phone, statement });
    await newApplicant.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Error processing application:', err);
    res.status(500).json({ message: 'Error in submission. Please try again.' });
  }
});

module.exports = router;
