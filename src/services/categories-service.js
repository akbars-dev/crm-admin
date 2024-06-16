const { CondidationError } = require("../errors/flash-error");
const categoriesModel = require("../models/categories-model");


class CategoriesService {

    async categoriesEditPage (id) {
        const condidate = await categoriesModel.findById(id);

        if (!condidate) throw CondidationError('Id xato kiritilgan');

        return JSON.parse(JSON.stringify(condidate))
    }
    
    async create(name){
        const condidate = await categoriesModel.findOne({name});

        if (condidate) throw CondidationError('Bunday kateogiya oldin yaratilgan');

        const category = await categoriesModel.create({name})
        return category
    }
    async update(id, name) {
        const category = await categoriesModel.findByIdAndUpdate(id, { name });

        if (!category) throw CondidationError('Bunday kategoriya topilmadi');

        return category;
    }

    async del(id) {
        const category =  await categoriesModel.findByIdAndDelete(id);
        if (!category) throw CondidationError('Bunday kategoriya topilmadi');
        return category
    }
}

module.exports = new CategoriesService();