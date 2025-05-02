import User from '../models/user.model.js'

export const getUsers = async () => await User.find()
export const getUserById = async (id) => await User.findById(id)
export const getUserByEmail = async (email) => await User.findOne({email})
export const getUserByUsername = async (username) =>
    await User.findOne({username})
export const insertUser = async (user) => await User.create(user)
export const updateUserById = async (userID) =>
    await User.findByIdAndUpdate(userID)
export const deleteUserById = async (userID) =>
    await User.findByIdAndDelete(userID)
