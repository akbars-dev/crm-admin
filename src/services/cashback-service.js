const cashbackModel = require("../models/cashback-model");


class CashbackService {
    async create(barCode, photo) {
        const cashback = await cashbackModel.create({ barCode: barCode, photoPath: `/images/${photo}` });
        return cashback
    }
}


module.exports = new CashbackService();