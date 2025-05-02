import React from 'react'

export default function Checkbox({text}) {
    return (
        <fieldset className="fieldset mt-2">
            <label className="label text-white">
                <input type="checkbox" defaultChecked className="checkbox" />
                {text}
            </label>
        </fieldset>
    )
}
