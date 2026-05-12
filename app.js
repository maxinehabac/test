const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

// View Engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', studentRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});