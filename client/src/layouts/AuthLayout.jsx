import {Navigate, Outlet} from 'react-router-dom'

export default function AuthLayout() {
    const auth = false

    return !auth ? <Outlet /> : Navigate('/user')
}
