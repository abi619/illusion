import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_LOADER, OTP_LOADER, OTP_SUCCESS, OTP_FAILURE} from '../constants/loginConstants'
export const userLoginReducer = (state= {}, action) => {
    switch(action.type) {
        case LOGIN_LOADER:
            return {
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
                userNumber: action.info,
                userEmail: action.mail,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const userOtpReducer = (state= {}, action) => {
    switch(action.type) {
        case OTP_LOADER:
            return {
                loading: true
            }
        case OTP_SUCCESS:
            return {
                loading: false,
                currentStatus: action.payload,
                succeed: true
            }
        case OTP_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


