const cashbackService = require("../services/cashback-service");
const userService = require("../services/user-service");


class ApiController {
    async createUser(req, res, next) {
        try {
            const { firstName, lastName, telephone, telegramId, lang, birthdayDate, cashback } = req.body;

            const user = await userService.create(firstName, lastName, telephone, telegramId, lang, birthdayDate, cashback);
            return res.json({ status: 201, message: 'Foydalanuvchi yaratildi', data: user });
        } catch (error) {
            next(error)
        }
    }

    async createCashback(req, res, next) {
        try {
            const barCode = req.body.barCode;
            const cashback = await cashbackService.create(barCode, req.file.filename)

            return res.json({ status: 201, message: "Cashback yaratildi", data: cashback })
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new ApiController();