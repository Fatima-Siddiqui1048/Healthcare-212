const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Professionals data
const professionals = [
  { name: 'Dr. Aisha Rahman', specialty: 'Family Medicine', photo: '/images/doctor1.jpg' },
  { name: 'Dr. Michael Lee', specialty: 'Pediatrics', photo: '/images/doctor2.jpg' },
  { name: 'Nurse Olivia Martinez', specialty: 'Community Health', photo: '/images/doctor3.jpg' }
];

// Testimonials data
const testimonials = [
  { name: 'John Doe', text: 'Amazing care and service!' },
  { name: 'Jane Smith', text: 'Highly professional staff and doctors.' },
  { name: 'Mark Wilson', text: 'I felt cared for and supported throughout.' }
];

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/professionals', (req, res) => {
  res.render('professionals', { professionals });
});

app.get('/testimonials', (req, res) => {
  res.render('testimonials', { testimonials });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
