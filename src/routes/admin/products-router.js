const { Router } = require('express');

const upload = require('../../utils/storage-util');
const productsController = require('../../controllers/products-controller');


const productsRouter = Router();

productsRouter.get('/', productsController.getPage);
productsRouter.get('/categories', productsController.categoriesPage);
productsRouter.get('/categories/add', productsController.addCategoryPage);
productsRouter.get('/categories/edit/:id', productsController.editCategoryPage);


// post methods
productsRouter.post('/categories/add', productsController.addCategory);
productsRouter.post('/categories/edit/:id', productsController.editCategory);

// for deleting
productsRouter.get('/categories/del/:id', productsController.delCategory);


module.exports = productsRouter;