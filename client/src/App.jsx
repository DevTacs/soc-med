import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                name: 'Login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                name: 'Register',
                element: <RegisterPage />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
