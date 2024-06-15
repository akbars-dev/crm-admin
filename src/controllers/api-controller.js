const userService = require("../services/user-service");


class ApiController {
    async createUser(req, res, next) {
        try {
            const { firstName, lastName, telephone, telegramId, lang, birthdayDate, cashback } = req.body;

            const user = await userService.create(name, telephone, telegramId, lang, birthdayDate, cashback);
            return res.json({ status: 201, message: 'Foydalanuvchi yaratildi', data: user });
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new ApiController();