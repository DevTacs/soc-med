import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function UserRoute() {
    const auth = true

    return auth ? <Outlet /> : Navigate('/auth/login')
}
