import { Router } from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import {
    createSubscription,
    getUserSubscriptions,
} from '../controllers/subscription.controller.js'

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.send({ message: 'GET all subscriptions' })
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({ message: 'GET a subscription by id' })
})

subscriptionRouter.get('/user/:id', authMiddleware, getUserSubscriptions)

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ message: 'GET all upcoming renewals' })
})

subscriptionRouter.post('/', authMiddleware, createSubscription)

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ message: 'UPDATE a subscription by id' })
})

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ message: 'CANCEL a subscription by id' })
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ message: 'DELETE a subscription by id' })
})

export default subscriptionRouter