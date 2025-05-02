import React from 'react'
import {Link} from 'react-router-dom'

export default function Links({path, children}) {
    return (
        <Link to={path} className="link link-accent ml-1">
            {children}
        </Link>
    )
}
