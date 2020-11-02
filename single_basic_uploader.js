const path = require('path');
const express = require('express');
const multer = require('multer');

const uploads = multer({ dest: '/uploads' });
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.post('/uploads', uploads.single('file'), (req, res) => {
    return res.send('Upload realizado');
});

app.listen(3000, () => {
    console.log('Express has been started');
})