import {LOGIN_LOADER, LOGIN_SUCCESS, LOGIN_FAILURE, OTP_LOADER, OTP_FAILURE, OTP_SUCCESS} from '../constants/loginConstants'
import axios from 'axios'

export const userLoginAction = (number, email) => async (dispatch) => {
    try {
        dispatch({
            type: {
                LOGIN_LOADER
            }
        })

        console.log(number)  
        console.log(email)

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('http://127.0.0.1:3001/api/user/signup', {number, email})

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
            info: number,
            mail: email
        })

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data.error.message
        })
    }
}

export const otpAction = (number, otp, mail) => async (dispatch) => {
    try {
        dispatch({
            type: {
                OTP_LOADER
            }
        })

        console.log(number)  

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('http://127.0.0.1:3001/api/user/signup/verify', {number, otp, mail})

        dispatch({
            type: OTP_SUCCESS,
            payload: data,
        })

    } catch (error) {
        console.log(error.response)
        dispatch({
            type: OTP_FAILURE,
            payload: error.response.data
        })
    }
}