import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function GuestRoute() {
    const auth = false

    return !auth ? <Outlet /> : Navigate('/user')
}
