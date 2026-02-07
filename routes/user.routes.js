import { Router } from 'express'
import { getUser, getUsers } from '../controllers/user.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const userRouter = Router()

userRouter.get('/', getUsers)

userRouter.get('/:id', authMiddleware, getUser)

userRouter.post('/', (req, res) => {
    res.send({ message: 'CREATE a new user' })
})

userRouter.put('/:id', (req, res) => {
    res.send({ message: 'UPDATE user by id' })
})

userRouter.delete('/:id', (req, res) => {
    res.send({ message: 'DELETE user by id' })
})

export default userRouter