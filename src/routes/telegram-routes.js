const { Router } = require('express');
const validateResults = require('../middlewares/validation-middleware');

const apiController = require('../controllers/api-controller');
const { createUserValidation } = require('../validations/user-validation');


const telegramRouter = Router();


telegramRouter.post('/create/user', createUserValidation, validateResults, apiController.createUser);


module.exports = telegramRouter;