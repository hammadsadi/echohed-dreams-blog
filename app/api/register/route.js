import connectWithDatabase from "@/config/db";
import { NextResponse } from "next/server";
import User from '@/models/user'
import bcrypt from 'bcrypt'
export async function POST(req) {
    // Connect Database
    await connectWithDatabase()
    try {
        const {name, email, password} = await req.json()
        // Check User Exist User or Not
        const user = await User.findOne({email})
        // Validate User
        if(user){
            return NextResponse.json({message: 'User Already Exist', success: false})
        }
        // Hash Password
        const hashPassword = await bcrypt.hash(password, 10)
        // Create User
        await new User({
            name,
            email,
            password: hashPassword
        }).save()
        return NextResponse.json({message: 'User Created Successful', success: true})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}

// Get 
export async function GET(){

    return NextResponse.json({message: 'okkk', app:process.env.API_BASE_URL})
}