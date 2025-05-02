import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function AuthRoute() {
    const auth = false

    return !auth ? <Outlet /> : Navigate('/user')
}
