import express from 'express'
import dotenv from 'dotenv'

// other packages
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
import 'express-async-errors'
import connectDB from './db/connect.js'



const app = express()

// middleware imports
import notFoundMiddleWare from './middleware/not-found.js'
import errorHandlerMiddleWare from './middleware/error-handler.js'

// routes imports
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import customerRouter from './routes/customerRoutes.js'
import loanRouter from './routes/loanRoutes.js'


// 
app.use(cors())
app.use(morgan('tiny'))

// express.json
app.use(express.json())



// auth route
app.use('/api/v1/auth', authRouter)

// user route
app.use('/api/v1/user', userRouter)

// customer route
app.use('/api/v1/customer', customerRouter)

// loan route
app.use('/api/v1/loan', loanRouter)


// middleware
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
