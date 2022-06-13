import dotenv from 'dotenv'
const mongoose = require('mongoose')
const express = require('express')
const path = require('path');
const cors = require('cors')
const userRouter = require('./Routers/userRouter')
const {notFound, errorHandler} = require('./middlewares/errorMiddleware')

dotenv.config()
mongoose.connect("mongodb+srv://admin:admin@cluster0.jjl6o.mongodb.net/authenticationn?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to mongoDB!'))
    .catch((err) => console.log(`${err.message}`))

const app = express()
const node_ENV = "production"

// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }

//initializing the express app

// app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/user', userRouter)


if (node_ENV === 'production' || node_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
}

app.get('/', (req, res) => {
    res.send('API is running....')
})





app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})
