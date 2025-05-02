import React from 'react'

export const AuthContext = React.createContext()

export default function AuthProvider({children}) {
    const [user, setUser] = React.useState(null)
    const [auth, setAuth] = React.useState(false)
    const [loading, setLoading] = React.useState(true)

    const handleLogin = async () => console.log('login')
    const handleRegister = async () => console.log('register')
    const handleLogout = async () => console.log('logout')

    const values = {
        user,
        setUser,
        auth,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}
