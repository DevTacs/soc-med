import express from 'express'
import loginSchema from '../schemas/login.zod.js'
import validate from '../middlewares/validateSchema.js'
import {catchAsync} from '../utils/catchAsync.js'
import {login, register, logout} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/login', validate(loginSchema), catchAsync(login))
router.post('/register', validate(loginSchema), catchAsync(register))
router.delete('/logout', catchAsync(logout))

export default router
