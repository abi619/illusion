// const express = require('express')
// const userRouter = require('./Routers/userRouter')
// const cors = require('cors')
// const {notFound, errorHandler} = require('./middlewares/errorMiddleware')

// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }

// //initializing the express app
// const app = express()
// app.use(cors(corsOptions))

// app.use(express.json())

// app.use('/api/user', userRouter)
// app.use(notFound)
// app.use(errorHandler)

// module.exports = app