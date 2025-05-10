import React from 'react'

export default function ErrorLabel({error}) {
    return error && <p className="text-error">{error}</p>
}
