const { join } = require('path');
const express = require('express');
const app = express();
const port = 8001;
const urlFragment = '/resultFiles/ameba/';
const foldertoServePath = join(__dirname, 'ameba');

app.use(urlFragment, express.static(foldertoServePath));

app.listen(port, function () {
    console.log(`File server running in port ${port}`);
});
