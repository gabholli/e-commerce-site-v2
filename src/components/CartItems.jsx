import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function CartItems() {

    const { products, cartItems, removeFromCart, getTotalCartPrice } = useContext(ShopContext)

    const cartProducts = products?.map(product => {
        if (cartItems[product.id] > 0) {
            return (
                <>
                    <div key={product.id} className='grid md:grid-cols-6 px-4 md:px-12 lg:px-44 justify-items-center
                    gap-y-3 md:gap-x-10 items-center mb-16'>
                        <img src={product.image} className='size-24'></img>
                        <p className='text-center'>{product.title}</p>
                        <p className='md:hidden font-extrabold'>Price:</p>
                        <p>${product.price}</p>
                        <p className='md:hidden font-extrabold'>Quantity:</p>
                        <p>
                            {cartItems[product.id]}
                        </p>
                        <p className='md:hidden font-extrabold'>Total Item Price:</p>
                        <p>${product.price * cartItems[product.id]}</p>
                        <button
                            className='bg-green-300 px-4 py-2 rounded-2xl'
                            onClick={() => { removeFromCart(product.id) }}>Delete</button>

                    </div>
                    <hr className='border-gray-100 border-2 mb-12' />

                </>
            )
        }
    })

    return (
        <div>
            <div>
                <h1 className='text-center text-4xl py-10'>Cart</h1>
                <div className='grid md:grid-cols-6 md:px-12 md:pb-14 lg:px-44 justify-items-center gap-x-10 max-[767px]:hidden
                font-extrabold'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div className='mt-16'>
                    {cartProducts}
                    <div className='flex flex-col justify-center items-center gap-y-2'>
                        <p className='font-extrabold'>Total Price:</p>
                        <p>${getTotalCartPrice()}</p>
                        <button className='bg-green-300 px-4 py-2 rounded-2xl'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}