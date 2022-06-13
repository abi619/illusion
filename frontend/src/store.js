import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userLoginReducer, userOtpReducer} from './reducers/loginReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userOtp: userOtpReducer
})

const middleware = [thunk]

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
)

//exporting the store
export default store