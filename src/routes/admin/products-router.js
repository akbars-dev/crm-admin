const { Router } = require('express');

const upload = require('../../utils/storage-util');
const productsController = require('../../controllers/products-controller');


const productsRouter = Router();

// categories
productsRouter.get('/', productsController.getPage);
productsRouter.get('/categories', productsController.categoriesPage);
productsRouter.get('/categories/add', productsController.addCategoryPage);
productsRouter.get('/categories/edit/:id', productsController.editCategoryPage);

// subcategories 
productsRouter.get('/sub-categories', productsController.subCategoriesPage);
productsRouter.get('/sub-categories/add', productsController.addSubCategoryPage);
productsRouter.get('/sub-categories/edit/:id', productsController.editSubCategoryPage);
productsRouter.get('/sub-categories/get/:id', productsController.getSubCategoriesByCategoryId);


// post methods
//categories
productsRouter.post('/categories/add', productsController.addCategory);
productsRouter.post('/categories/edit/:id', productsController.editCategory);

// subcategories
productsRouter.post('/sub-categories/add', productsController.addSubCategory);
productsRouter.post('/sub-categories/edit/:id', productsController.editSubCategory);

// for deleting
productsRouter.get('/categories/del/:id', productsController.delCategory);
productsRouter.get('/sub-categories/del/:id', productsController.delSubCateogry);


module.exports = productsRouter;