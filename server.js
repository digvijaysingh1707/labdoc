const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/lapdoc'; // Change as needed
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the 'assets' directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/blog.html', (req, res) => {
res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/sign_in.html', (req, res) => {
res.sendFile(path.join(__dirname, 'sign_in.html'));
});

app.get('/sign_up.html', (req, res) => {
res.sendFile(path.join(__dirname, 'sign_up.html'));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
