const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 3000;

// Static Folder
app.use(express.static(__dirname+'/client'));
// Body Parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Please use /api/airports or /api/states endpoints');
});

// Airports
app.get('/api/airports', (req, res) => {
  res.send('AIRPORTS');
});

// States
app.get('/api/states', (req, res) => {
  res.send('STATES');
});

// Airports By State
app.get('/api/airports/state/:state', (req, res) => {
  res.send('AIRPORTS BY STATE');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});
