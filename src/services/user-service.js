const ApiError = require("../errors/api-errors");
const userModel = require("../models/user-model");

class UserService {
    async create(firstName, lastName, telephone, telegramId, lang, birthdayDate, cashback) {
        const condidate = await userModel.findOne({ telegramId });

        if (condidate) throw ApiError.BadRequest(`Bu foydalanuvchi oldin ro'yxatdan o'tgan`);
        const user = await userModel.create({ firstName, lastName, telephone, telegramId, lang, birthdayDate, cashback });

        return user;
    }
}


module.exports = new UserService();

