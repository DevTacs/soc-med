import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import GuestLayout from '../layouts/GuestLayout'
import UserLayout from '../layouts/UserLayout'
import NotFoundPage from '../pages/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },

    {
        path: '/',
        element: <GuestLayout />,
    },
    {
        path: '/user',
        element: <UserLayout />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])

export default router
