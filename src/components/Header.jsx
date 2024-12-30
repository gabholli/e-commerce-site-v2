import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ShopContext } from '../context/ShopContext'

function Header() {

    const { getItemTotalQuantity, cartItems } = useContext(ShopContext)

    function logOut() {
        if (localStorage.getItem("Loggedin")) {
            localStorage.setItem("Cart Items", JSON.stringify({}))
            localStorage.removeItem("Loggedin")
            window.location.reload(true)
        }
    }

    return (
        <>
            <header className='flex justify-between flex-col gap-y-6 md-gap-0 md:flex-row md:px-16 items-center
                mt-2 mb-8'>
                <div>
                    <h1 className='text-5xl'>React Shop</h1>
                </div>
                <div className='flex md:gap-12 gap-2'>
                    <Link
                        className='hover:underline'
                        to="/"
                        state={{ category: "" }}>
                        Products
                    </Link>
                    <Link
                        className='hover:underline'
                        to="login">
                        Login
                    </Link>
                    <Link
                        className='hover:underline'
                        onClick={logOut}
                        to="login"
                        state={{ logoutMessage: "You are logged out" }}
                    >
                        Log Out
                    </Link>
                    <Link
                        className='flex gap-x-2 hover:underline'
                        to="cart">
                        Cart
                        <span>
                            ({getItemTotalQuantity(cartItems)})
                        </span>
                    </Link>
                </div>
            </header>
            <hr />
        </>
    )
}

export default Header