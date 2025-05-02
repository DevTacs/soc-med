import {z} from 'zod'

const maxCharLength = 6

export const loginSchema = z.object({
    email: z.string().email().min(1, {message: 'Email is required'}),
    password: z.string().min(maxCharLength, {message: 'Password is required'}),
})

export const registerSchema = z
    .object({
        username: z.string(),
        email: z.string().email(),
        password: z
            .string()
            .min(maxCharLength, {message: 'Password is required'}),
        confirmPassword: z
            .string()
            .min(maxCharLength, {message: 'Password is required'}),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })
