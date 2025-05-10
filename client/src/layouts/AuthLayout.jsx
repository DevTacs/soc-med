import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import ThemeController from '../components/ThemeController'

export default function AuthLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header>
                <ThemeController />
            </Header>
            <div className="flex flex-row justify-around items-center h-[70%]">
                <div className="flex-[.4]">
                    <h2 className=" text-4xl font-bold">
                        Connect. Share. Discover.
                    </h2>
                    <p className="text-lg mt-8 mb-4">
                        Welcome to [App Name], your new favorite social space to
                        stay connected with friends, express yourself, and
                        explore what matters most. Whether you’re sharing your
                        moments, discovering trends, or building your
                        community—[App Name] is where your story begins.
                    </p>
                    <button className="btn btn-accent">Accent</button>
                </div>
                <div className="flex-[.3] self-center ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
