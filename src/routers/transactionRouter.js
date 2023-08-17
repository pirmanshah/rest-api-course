const path = require('path');
const multer = require('multer');
const router = require('express').Router();
const transactionController = require('@controllers/transactionController');

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, 'C:/xampp/htdocs/courseonline/public/storage/transactions/');
    // or
    cb(null, 'uploads/');
  },
  filename: function (request, file, cb) {
    const { filename } = request.body;
    const fileExtension = path.extname(file.originalname);
    const newFileName = 'tf-' + filename + fileExtension;
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('file'), transactionController.create);

module.exports = router;
