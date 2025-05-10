import {zodResolver} from '@hookform/resolvers/zod'
import React from 'react'
import {useForm} from 'react-hook-form'
import {registerSchema} from '../schemas/authSchema'

export default function useRegisterForm() {
    return useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
}
