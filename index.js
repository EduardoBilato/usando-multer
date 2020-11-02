const path = require('path');
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.filename}${path.extname(file.originalname)}`)
    }

});
const app = express();
const uploads = multer({ storage: storage });

app.use(express.static(path.join(__dirname, '/public')));

app.post('/uploads', uploads.single('file'), (req, res) => {
    return res.send('Upload realizado');
});

app.listen(3000, () => {
    console.log('Express has been started');
})