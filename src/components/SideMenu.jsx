import React from 'react'
import { Link } from "react-router-dom"

export default function SideMenu() {
    return (
        <div className='md:w-1/3 py-4 order-1 md:order-2'>
            <nav className='lg:w-52 md:w-80 p-4 pt-4 flex flex-col justify-center 
                items-center md:items-start gap-4 rounded-2xl border-gray-300 border-2'>
                <h1 className='underline'>Categories</h1>
                <ul className='list-none flex flex-col gap-1 text-center md:text-left'>
                    <Link
                        to="/"
                        state={{ category: "" }}
                        className='hover:underline'
                    >
                        <li>
                            All
                        </li>
                    </Link>
                    <Link
                        to="/"
                        state={{ category: "electronics" }}
                        className='hover:underline'
                    >
                        <li>
                            Electronics
                        </li>
                    </Link>
                    <Link
                        to="/"
                        state={{ category: "jewelery" }}
                        className='hover:underline'
                    >
                        <li>
                            Jewelery
                        </li>
                    </Link>
                    <Link
                        to="/"
                        state={{ category: "men's clothing" }}
                        className='hover:underline'
                    >
                        <li>
                            Men's Clothing
                        </li>
                    </Link>
                    <Link
                        to="/"
                        state={{ category: "women's clothing" }}
                        className='hover:underline'
                    >
                        <li>
                            Women's Clothing
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

