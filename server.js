const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Check routes if listening
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})