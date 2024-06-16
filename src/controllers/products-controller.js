const categoriesModel = require("../models/categories-model");
const categoriesService = require("../services/categories-service");
const subcategoryService = require("../services/subcategory-service");


class ProductController {
    async getPage(req, res) {
        return res.render('products-controll');
    }


    // categories functions
    async categoriesPage(req, res) {
        const categories = JSON.stringify(await categoriesModel.find({}));

        return res.render('category-pages/categories', { categories: JSON.parse(categories) });
    }

    async addCategoryPage(req, res) {
        return res.render('category-pages/add-category');
    }

    async editCategoryPage(req, res) {
        try {
            const id = req.params.id;
            const category = await categoriesService.categoriesEditPage(id);

            return res.render('category-pages/edit-category', { category: category })
        } catch (error) {
            return res.redirect('/404')
        }
    }

    async addCategory(req, res) {
        try {
            const name = req.body.name;
            await categoriesService.create(name);

            return res.redirect('/products-controll/categories')
        } catch (error) {
            console.log(error)
            req.flash('error_msg', error.message)
            return res.redirect('/products-controll/categories/add')
        }
    }

    async editCategory(req, res) {
        try {
            const id = req.params.id;
            await categoriesService.update(id, req.body.name)

            return res.redirect('/products-controll/categories')
        } catch (error) {
            return res.redirect('/products-controll/categories')
        }
    }

    async delCategory(req, res) {
        try {
            const id = req.params.id;
            await categoriesService.del(id);
            return res.redirect('/products-controll/categories');
        } catch (error) {
            return res.redirect('/products-controll/categories');
        }
    }

    // sub categories functions
    async subCategoriesPage(req, res) {
        try {
            const subcategories = await subcategoryService.subCategoriesPage();

            return res.render('subcategory-pages/subcategories', { subcategories })
        } catch (error) {
            return res.redirect('/products-controll')
        }
    }


    async addSubCategoryPage(req, res) {
        const categories = await subcategoryService.addSubCategoryPage();
        return res.render('subcategory-pages/add-subcategory', { categories })
    }

    async editSubCategoryPage(req, res) {
        try {
            const id = req.params.id;
            const subcategory = await subcategoryService.subCategoriesEditPage(id);

            return res.render('subcategory-pages/edit-subcategory', { subcategory: subcategory })
        } catch (error) {
            return res.redirect('/404')
        }
    }

    async addSubCategory (req, res) {
        try {
            await subcategoryService.create(req.body.name, req.body.categoryId);
            return res.redirect('/products-controll/sub-categories')
        } catch (error) {
            console.log(error);
            req.flash('error_msg', error.message)
            return res.redirect('/products-controll/sub-categories/add')
        }
    }

    async editSubCategory(req, res) {
        try {
            const id = req.params.id;
            await subcategoryService.update(id, req.body.name)

            return res.redirect('/products-controll/sub-categories')
        } catch (error) {
            return res.redirect('/products-controll/sub-categories')
        }
    }

    async delSubCateogry(req, res) {
        try {
            const id = req.params.id;
            await subcategoryService.del(id);
            return res.redirect('/products-controll/sub-categories');
        } catch (error) {
            console.log(error);
            return res.redirect('/products-controll/sub-categories');
        }
    }

    async getSubCategoriesByCategoryId (req, res) {
        try {
            const id = req.params.id;
            const subcategories = await subcategoryService.get(id);
            return res.json(subcategories);
        } catch (error) {
            return res.redirect('/products-controll/sub-categories');
        }
    }

}

module.exports = new ProductController();