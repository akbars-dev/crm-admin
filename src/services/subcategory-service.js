const subCategoriesModel = require("../models/subCategories-model");
const { CondidationError } = require("../errors/flash-error");
const categoriesModel = require("../models/categories-model");


class SubCategoriesService {
    async subCategoriesPage() {
        const subCategories = JSON.stringify(await subCategoriesModel.find({}));
        return JSON.parse(subCategories);
    }

    async addSubCategoryPage() {
        const categories = JSON.stringify(await categoriesModel.find({}));
        return JSON.parse(categories);
    }

    async subCategoriesEditPage(id) {
        const condidate = await subCategoriesModel.findById(id);

        if (!condidate) throw CondidationError('Id xato kiritilgan');

        return JSON.parse(JSON.stringify(condidate))
    }

    async create(name, categoryId) {
        const condidate = await subCategoriesModel.findOne({ name });

        if (condidate) throw CondidationError('Bunday sub kateogiya oldin yaratilgan');

        const category = await subCategoriesModel.create({ name, category: categoryId });
        return category
    }

    async update(id, name) {
        const subCategory = await subCategoriesModel.findByIdAndUpdate(id, { name });

        if (!subCategory) throw CondidationError('Bunday kategoriya topilmadi');

        return subCategory;
    }

    async get(categoryId) {
        const subCategories = await subCategoriesModel.find({ category: categoryId });
        return subCategories
    }

    async del(id) {
        const subCategory = await subCategoriesModel.findByIdAndDelete(id);
        if (!subCategory) throw CondidationError('Bunday kategoriya topilmadi');
        return subCategory
    }
}


module.exports = new SubCategoriesService();