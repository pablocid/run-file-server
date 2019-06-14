const { join } = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT;
const urlFragment = process.env.URLFRAGMENT;
const foldertoServePath = process.env.FOLDERPATH;
 
app.use(urlFragment, express.static(foldertoServePath));

app.listen(port, function () {
    console.log(`File server running in port ${port}`);
});
