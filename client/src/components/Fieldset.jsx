import React from 'react'

export default function FieldSet({title, type}) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{title}</legend>
            <input
                type={type}
                className="input bg-white text-black"
                placeholder={`Enter your ${title}`}
            />
        </fieldset>
    )
}
