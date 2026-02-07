import mongoose from 'mongoose'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_EXPIRES_IN, JWT_SECRET } from '../config/env.js'

export const signUp = async(req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        // Create new user
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error('User already exists')
            error.statusCode = 409
            throw error
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUsers = await User.create(
            [{ name, email, password: hashedPassword }], { session },
        )

        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        })

        await session.commitTransaction()
        session.endSession()

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: { token, user: newUsers[0] },
        })
    } catch (error) {
        await session.abortTransaction()
        session.endSession()
        next(error)
    }
}

export const signIn = async(req, res, next) => {
    try {
        // Create new user
        const { email, password } = req.body

        const userData = await User.findOne({ email })

        if (!userData) {
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }

        // compare password
        const isPasswordValid = await bcrypt.compare(password, userData.password)

        if (!isPasswordValid) {
            const error = new Error('Incorrect email or password')
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({ userId: userData._id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        })

        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data: { token, user: userData },
        })
    } catch (error) {
        next(error)
    }
}

export const signOut = async(req, res, next) => {
    return res.send({ message: 'Sign out route', success: true })
}