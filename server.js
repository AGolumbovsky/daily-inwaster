const express = require('express');

const PORT =7878;

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log("Willingly waiting for wise inwastements on port", PORT);
});