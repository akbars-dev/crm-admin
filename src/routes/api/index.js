const { Router } = require('express');

const validateResults = require('../../middlewares/validation-middleware');
const apiController = require('../../controllers/api-controller');
const errorMiddleware = require('../../middlewares/error-middleware');
const { createUserValidation } = require('../../validations/user-validation');
const upload = require('../../utils/storage-util');


const router = Router();


router.post('/create/user', createUserValidation, validateResults, apiController.createUser);
router.post('/create/cashback', upload.single('photo'), apiController.createCashback);
router.use(errorMiddleware);

module.exports = router;