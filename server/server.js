import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const authRoute = require('./routes/auth.js')
app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT)
