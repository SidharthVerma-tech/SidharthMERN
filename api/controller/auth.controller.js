import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !password || !email || username==='' || email==='' || password===''){
        return res.status(400).json({message: "All fields are required"})
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
        return res.status(500).json({message:error.message})
    }
    
}