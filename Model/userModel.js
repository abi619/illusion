const {Schema, model} = require('mongoose')
const jwt = require('jsonwebtoken')

const secretKey = "HJDUDHSIDejhfefHEjk"

const userSchema = Schema({
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {timestamps: true})

userSchema.methods.generateJWT = function() {
    const token = jwt.sign({
        _id: this._id,
        number: this.number
    }, secretKey, {expiresIn: "7d"})
    return token
}

module.exports.User = model('User', userSchema)