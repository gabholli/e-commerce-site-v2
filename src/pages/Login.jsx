import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AuthRequired from "./AuthRequired"
import { loginUser } from "../components/Apis"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ username: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                if (data.token) {
                    localStorage.setItem("Loggedin", true)
                }
                navigate("/")
            })
            .catch(err => {
                setError(err)
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }



    return (
        <div className="">
            {
                location.state?.message &&
                <h1 className="text-center text-red-800 font-extrabold">{location.state.message}</h1>
            }
            {
                location.state?.logoutMessage &&
                <h1 className="text-center text-red-800 font-extrabold">{location.state.logoutMessage}</h1>
            }
            {
                error?.message &&
                <h1 className="text-center text-red-800 font-extrabold">No user with those credentials found!</h1>
            }
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 p-8">
                <h1 className="text-center">Sign in to your account(Test credentials provided):</h1>

                <input
                    className="border-2 border-gray-300 rounded-2xl indent-4"
                    name="username"
                    onChange={handleChange}
                    type="text"
                    placeholder="donero"
                    autoComplete="current-username"
                    value={loginFormData.username}
                    required
                />
                <input
                    className="border-2 border-gray-300 rounded-2xl indent-4"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="ewedon"
                    autoComplete="current-password"
                    value={loginFormData.password}
                    required
                />
                <button
                    className="py-2 px-4 bg-green-300 rounded-2xl"
                    type="submit"
                >Log in
                </button>
            </form>
        </div>
    )

}