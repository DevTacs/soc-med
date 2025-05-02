import React from 'react'
import FieldSet from '../components/FieldSet'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import Links from '../components/Links'

export default function LoginPage() {
    return (
        <form className="w-[350px] flex flex-col p-4 px-8 mt-20 rounded-lg text-white shadow-sm shadow-white ">
            <h2 className="my-4 text-center text-2xl font-bold">Login</h2>

            <FieldSet title="Email" type="email" />
            <FieldSet title="Password" type="password" />
            <Checkbox text="Remember me" />
            <Button text={'Submit'} />

            <p className="text-sm my-2">
                Don't have an account?
                <Links path="/auth/register" children={'Register'} />
            </p>
        </form>
    )
}
