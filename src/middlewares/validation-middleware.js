const { validationResult } = require('express-validator');
const ApiError = require('../errors/api-errors');

const validateResults = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw ApiError.BadRequest('Validatsiya xato !',  errors.array());
    }
    next();
};

module.exports = validateResults;
