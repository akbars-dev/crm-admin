const {model, Schema} = require('mongoose');


const CashbackSchema = new Schema({
    barCode: { type: String, required: true },
    balance: { type: String, required: true },
})



module.exports = model('cashback', CashbackSchema)