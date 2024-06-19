import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    if(!username || !password || !email || username==='' || email==='' || password===''){
        return next(errorHandler(400, 'All fields are required'))
    }
    const hashPassword = bcryptjs.hashSync(password,10)
    const newUser = User({
        username,
        email,
        password : hashPassword,
    })
    try {
        await newUser.save()
        res.json({message : 'Signup Succesful'})
    } catch (error) {
        next(error)
    }
    
}