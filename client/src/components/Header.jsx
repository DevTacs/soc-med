import React from 'react'

export default function Header({children}) {
    return (
        <header className="flex flex-rows justify-around items-center py-4 bg-slate-600 text-white">
            <h2 className="flex-[.4] text-2xl font-bold">Title</h2>
            <nav className="flex-[.3] ">{children}</nav>
        </header>
    )
}
