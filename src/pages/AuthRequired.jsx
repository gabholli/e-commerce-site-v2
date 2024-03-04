import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
    const authenticated = localStorage.getItem("Loggedin")

    if (!authenticated) {
        return (
            <Navigate
                to="/login"
                state={{ message: "You are logged out" }}
            />)
    }
    return <Outlet />
}