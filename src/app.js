const cors = require('cors');
const multer = require('multer');
const express = require('express');
const router = require('@routers/router');
const errorController = require('@controllers/errorController');

const app = express();
const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, 'C:/xampp/htdocs/courseonline/public/storage/');
    // or
    cb(null, 'uploads/');
  },
  filename: function (request, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/api/upload', upload.single('file'), (request, response) => {
  console.log(request.file);
  console.log(request.body);

  response.status(201).json({
    status: 'success',
  });
});

app.use('/api', router);
app.all('*', errorController.notFound);
app.use(errorController.serverError);

module.exports = app;
