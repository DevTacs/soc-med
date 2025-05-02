import React from 'react'

export default function UserLayout() {
    const auth = true

    return auth ? <Outlet /> : Navigate('/auth/login')
}
