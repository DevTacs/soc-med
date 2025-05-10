import axios from '../utils/axiosUtil'

const url = import.meta.env.VITE_API_URL

export const login = async (userData) => {
    const {data} = await axios.post(`${url}/auth/login`, userData)
    return data
}

export const register = async (userData) => {
    const {data} = await axios.post(`${url}/auth/register`, userData)
    return data
}

export const logout = async () => {
    const {data} = await axios.post(`${url}/auth/logout`)
    return data
}
