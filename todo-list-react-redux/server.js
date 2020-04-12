var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 4000;
app.use(express.static('build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(port, () => console.log(`server on running on ${port}`));