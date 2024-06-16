const { Router } = require('express');

const upload = require('../../utils/storage-util');
const productsRouter = require('./products-router');
const flashMiddleware = require('../../middlewares/flash-middleware');

const router = Router();


router.use(flashMiddleware);
router.get('/', (req, res) => res.render('home'));
router.get('/404', (req, res) => res.render('404'));

router.use('/products-controll', productsRouter);

module.exports = router;