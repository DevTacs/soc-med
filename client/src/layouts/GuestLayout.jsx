import React from 'react'

export default function GuestLayout() {
    const auth = false

    return !auth ? <Outlet /> : Navigate('/user')
}
