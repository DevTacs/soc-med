import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

export default function AuthLayout() {
    return (
        <>
            <div className="flex flex-col h-screen bg-slate-600">
                <Header />
                <div className="flex flex-row justify-around items-center h-[70%]">
                    <div className="flex-[.4] text-white">
                        <h2 className="text-white text-4xl font-bold">
                            Connect. Share. Discover.
                        </h2>
                        <p className="text-lg mt-8 mb-4">
                            Welcome to [App Name], your new favorite social
                            space to stay connected with friends, express
                            yourself, and explore what matters most. Whether
                            you’re sharing your moments, discovering trends, or
                            building your community—[App Name] is where your
                            story begins.
                        </p>
                        <button className="btn btn-accent">
                            Login as Guest
                        </button>
                    </div>
                    <div className="flex-[.3] self-center ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
