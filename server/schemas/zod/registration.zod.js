import {z} from 'zod'

const registrationSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
})

export default registrationSchema
