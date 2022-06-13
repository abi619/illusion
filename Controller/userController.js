const bcrypt = require('bcrypt')
const _ = require('lodash')
const asyncHandler = require('express-async-handler')
const axios = require('axios')
const otpGenerator = require('otp-generator')
const fast2sms = require('fast-two-sms')
const {User} = require('../Model/userModel')
const {Otp} = require('../Model/otpModel')

//functions
module.exports.signUp = asyncHandler(async (req, res) => { 
    const user = await User.findOne({number: req.body.number})
    if(user) {
        res.status(400)
        throw new Error('user already registered')
    } else {
        const OTP = otpGenerator.generate(6, {
            digits: true, alphabets: false, upperCase: false, specialChars: false
        })
        const number = req.body.number
        console.log(OTP)
    
        const newResponse = await fast2sms.sendMessage({authorization: 'K2kwGo1QRigeqraAEDS0dvpfyI6UxLZu4c7CXmTJM8Y3FlHtVjTd3pbI1DByk5qhFSesmXGZJwfrMnlO', message: `Use ${OTP} as your OTP to verify your Vybes account.`, numbers: [number]})
        console.log(newResponse)
    
        const otp = new Otp({number: number, otp: OTP})
        const salt = await bcrypt.genSalt(10)
        otp.otp = await bcrypt.hash(otp.otp, salt)
        const result = await otp.save()
        return res.status(200).send('otp sent successfully')
    }
})

module.exports.verifyOtp = asyncHandler(async (req, res) => {
    const otpHolder = await Otp.find({number: req.body.number})
    if(otpHolder.length === 0) return res.status(400).send('you used an expired otp')
    const rightOtpFind = otpHolder[otpHolder.length - 1]
    const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp)
    if(rightOtpFind.number === req.body.number && validUser) {
        // const user = new User(_.pick(req.body, ["number"], req.body))
        console.log(req.body.number)
        console.log(req.body.mail)
        const user = new User({number: req.body.number, email: req.body.mail})
        const token = user.generateJWT()
        const result = await user.save()
        const OTPDelete = await Otp.deleteMany({
            number: rightOtpFind.number
        })
        return res.status(200).send({
            message: 'user registration successfull',
            token: token,
            data: result
        })
    } else {
        return res.status(400).send('your otp was wrong')
    }
})