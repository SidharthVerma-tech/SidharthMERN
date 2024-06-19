import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
dotenv.config()
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Mongo DB is connectd')
    }
).catch(err=>{
    console.log(err)
})
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000')
})
app.use('/api/user',userRoutes)
app.use('/api/auth', authRoutes)