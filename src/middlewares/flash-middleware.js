
module.exports = function (req, res, next) {
    res.locals.error_msg = req.flash('error_msg');
    return next();
};