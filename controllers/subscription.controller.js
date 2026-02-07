import { SERVER_URL } from '../config/env.js'
import { workflowClient } from '../config/upstash.js'
import Subscription from '../models/subscription.model.js'

export async function createSubscription(req, res, next) {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        })

        const { workflowRunId } = await workflowClient.trigger({
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        })

        res
            .status(201)
            .json({ success: true, data: { subscription, workflowRunId } })
    } catch (error) {
        next(error)
    }
}

export async function getUserSubscriptions(req, res, next) {
    try {
        if (req.user.id !== req.params.id) {
            const error = new Error('You are not the owner of this account')
            error.status = 401
            throw error
        }

        const subscriptions = await Subscription.find({ user: req.params.id })

        res.status(200).json({
            success: true,
            message: 'Subscriptions retrieved successfully',
            data: subscriptions,
        })
    } catch (error) {
        next(error)
    }
}