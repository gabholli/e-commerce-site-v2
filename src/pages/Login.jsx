import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AuthRequired from "./AuthRequired"
import { loginUser } from "../components/Apis"

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("Loggedin", true)
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

    function logOut() {
        localStorage.clear()
    }

    return (
        <div className="">
            {
                location.state?.message &&
                <h1>{location.state.message}</h1>
            }
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    autoComplete="current-email"
                    value={loginFormData.email}
                    required
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={loginFormData.password}
                    required
                />
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => logOut()}>Log out</button>
        </div>
    )

}