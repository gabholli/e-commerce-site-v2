import React from "react"
import { Link } from "react-router"

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center
            gap-y-8 px-2 absolute top-0 bottom-0 left-0 right-0 m:auto">
            <h1 className="text-center text-3xl">
                Sorry, the page you were looking for was not found
            </h1>
            <Link to="/" className="bg-green-300 px-4 py-2 rounded text-xl hover:underline">
                Return to home
            </Link>
        </div>
    )
}