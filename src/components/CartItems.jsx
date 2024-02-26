import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

export default function CartItems() {

    const { products, cartItems, removeFromCart } = useContext(ShopContext)

    const cartProducts = products?.map(product => {
        if (cartItems[product.id] > 0) {
            return (
                <div key={product.id}>
                    <img src={product.image}></img>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <button>
                        {cartItems[product.id]}
                    </button>
                    <p>{product.price * cartItems[product.id]}</p>
                    <p onClick={() => { removeFromCart() }}>X</p>
                </div>
            )
        }
    })

    return (
        <div>
            <div>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>

            </div>
        </div>
    )
}