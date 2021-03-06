const express   = require('express');
const mongoose  = require('mongoose');
const db        = require('inventoryDB');

const PORT =7878;

const app = express();

mongoose.connect('mongodb://127.0.0.1/daDB');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', function() {
  console.log("\n db connected, mongoose did itt");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log("\n Willingly waiting for wise inwastements on port", PORT);
});