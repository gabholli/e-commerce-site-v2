import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
    return (
        <div className='min-h-screen py-6 font-arial flex flex-col text-xl
            md:text-xl lg:text-sm xl:text-lg'>
            <Header />
            <main className='m-auto'>
                <Outlet />
            </main>
        </div>
    )
}

