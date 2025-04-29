import createError from 'http-errors'

const validate = (schema) => (err, req, res, next) => {
    const result = schema.safeParse(err)
    if (!result.success) {
        return next(createError(400, result.error))
    }
    next()
}

export default validate
