const { Router } = require('express');
const telegramRouter = require('./telegram-routes');
const errorMiddleware = require('../middlewares/error-middleware');

const router = Router();


router.use('/telegram', telegramRouter)

router.use(errorMiddleware);

module.exports = router;