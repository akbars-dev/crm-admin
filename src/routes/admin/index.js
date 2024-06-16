const { Router } = require('express');

const upload = require('../../utils/storage-util');
const productsRouter = require('./products-router');

const router = Router();

router.get('/', (req, res) => res.render('home'));

router.use('/products-controll', productsRouter);

module.exports = router;