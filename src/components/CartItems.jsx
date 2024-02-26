import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function CartItems() {

    const { products, cartItems, removeFromCart } = useContext(ShopContext)

    const cartProducts = products?.map(product => {
        if (cartItems[product.id] > 0) {
            return (
                <div key={product.id} className='grid md:grid-cols-6 md:px-12 lg:px-48 justify-items-center
                    gap-x-10 items-center mb-16'>
                    <img src={product.image} className='size-24'></img>
                    <p className=''>{product.title}</p>
                    <p>${product.price}</p>
                    <button>
                        {cartItems[product.id]}
                    </button>
                    <p>{product.price * cartItems[product.id]}</p>
                    <button onClick={() => { removeFromCart(product.id) }}>X</button>
                </div>
            )
        }
    })

    return (
        <div>
            <div className='grid md:grid-cols-6 md:px-12 lg:px-44 justify-items-center gap-x-10'>
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
            </div>
        </div>
    )
}