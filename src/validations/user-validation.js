const { check, body } = require('express-validator');


const createUserValidation = [
    body('firstName').isLength({ min: 5}),
    body('lastName').isLength({ min: 5 }),
    body('telephone').isNumeric().isLength({ min: 9, max: 9 }),
    body('telegramId').isLength({ min: 5 }),
    body('lang').isIn(['en', 'ru', 'uz']),
    body('birthdayDate')
]



module.exports = {
    createUserValidation,
}