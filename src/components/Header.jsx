import React, { useContext } from 'react'

function Header() {

    return (
        <>
            <div className='flex justify-between flex-col gap-y-6 md-gap-0 md:flex-row md:px-16 items-center
                mt-2 mb-8'>
                <div>
                    <h1 className='text-5xl'>React Shop</h1>
                </div>
                <div className='flex gap-10'>
                    <h1>Login</h1>
                    <h1>Cart</h1>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header