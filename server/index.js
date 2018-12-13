const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

const router = require('./router.js');

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname + '/../client/dist')))

app.use('/', router)

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT} for yER boy`));
