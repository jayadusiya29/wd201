const express = require('express');
const path = require('path');
const minimist = require('minimist');
const app = express();

// Use minimist to get the port from command line
const args = minimist(process.argv.slice(2));
const port = args.port || 3000; // Default to port 3000 if not provided

app.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, 'http-server', 'registration.html'));
});

app.listen(port, () => {
    console.log(Server running on port ${port});
});