const categoriesModel = require("../models/categories-model");
const categoriesService = require("../services/categories-service");


class ProductController {
    async getPage(req, res) {
        return res.render('products-controll');
    }


    // categories functions
    async categoriesPage(req, res) {
        const categories = JSON.stringify(await categoriesModel.find({}));

        return res.render('categories', { categories: JSON.parse(categories) });
    }

    async addCategoryPage(req, res) {
        return res.render('add-category');
    }

    async editCategoryPage(req, res) {
        try {
            const id = req.params.id;
            const category = await categoriesService.categoriesEditPage(id);

            return res.render('edit-category', { category: category })
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
}

module.exports = new ProductController();