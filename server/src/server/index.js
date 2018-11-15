const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.listen(8080, () => console.log('Listening on port 8080!'));
