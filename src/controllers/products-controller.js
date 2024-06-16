const categoriesModel = require("../models/categories-model");


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
        const id = req.params.id;
        const category = JSON.stringify(await categoriesModel.findById(id));

        console.log(category);

        return res.render('edit-category', { category: JSON.parse(category) })
    }

    async addCategory(req, res) {
        const name = req.body.name;
        const cateogry = await categoriesModel.create({ name });
        console.log(cateogry);

        return res.redirect('/products-controll/categories')
    }

    async editCategory(req, res) {
        const id = req.params.id;
        await categoriesModel.findByIdAndUpdate(id, req.body);

        return res.redirect('/products-controll/categories')
    }

    async delCategory(req, res) {
        const id = req.params.id;
        await categoriesModel.findByIdAndDelete(id);

        return res.redirect('/products-controll/categories')
    }
}

module.exports = new ProductController();