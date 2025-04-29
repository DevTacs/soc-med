import createCookie from '../utils/cookies.js'
import {generateAccessToken, generateRefreshToken} from '../utils/token.js'
import {minutesToMilliseconds, daysToMilliseconds} from '../utils/expiry.js'
import {insertUser, getUserByEmail} from '../services/user.service.js'

export const login = async (req, res, next) => {
    const {email, password} = req.body

    const user = await getUserByEmail(email)
    if (!user) return next(createError(404, 'User not found'))

    if (user.password !== password)
        return next(createError(401, 'Invalid credentials'))

    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
    }

    const accessToken = generateAccessToken(
        payload,
        process.env.ACCESS_TOKEN_SECRET
    )
    const refreshToken = generateRefreshToken(
        payload,
        process.env.REFRESH_TOKEN_SECRET
    )

    createCookie(res, 'accessToken', accessToken, minutesToMilliseconds(15))
    createCookie(res, 'refreshToken', refreshToken, daysToMilliseconds(7))

    res.status(200).json({success: true, message: 'Login successful'})
}

export const register = async (req, res, next) => {
    const {username, email, password} = req.body

    const [isEmailExist, isUsernameExist] = await Promise.all([
        getUserByEmail(email),
        getUserByUsername(username),
    ])

    if (isEmailExist) return next(createError(400, 'Email already exists'))
    if (isUsernameExist)
        return next(createError(400, 'Username already exists'))

    const user = await insertUser({username, email, password})

    const payload = {
        id: user._id,
        email: user.email,
        username: user.username,
    }

    const accessToken = generateAccessToken(
        payload,
        process.env.ACCESS_TOKEN_SECRET
    )
    const refreshToken = generateRefreshToken(
        payload,
        process.env.REFRESH_TOKEN_SECRET
    )

    createCookie(res, 'accessToken', accessToken, minutesToMilliseconds(15))
    createCookie(res, 'refreshToken', refreshToken, daysToMilliseconds(7))

    res.status(201).json({success: true, message: 'User created'})
}

export const logout = async (req, res, next) => {
    const {accessToken, refreshToken} = req.cookies

    if (!accessToken || !refreshToken)
        return next(createError(401, 'Unauthorized'))

    res.clearCookie('accessToken')
    res.clearCookie('refreshToken')

    res.status(200).json({success: true, message: 'Logout successful'})
}
