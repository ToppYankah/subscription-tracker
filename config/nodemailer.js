import nodemailer from 'nodemailer'
import { NODEMAILER_PASSWORD } from './env.js'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tppyankah@gmail.com',
        pass: NODEMAILER_PASSWORD,
    },
})

export default transporter