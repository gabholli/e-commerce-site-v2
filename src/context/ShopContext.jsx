import React, { createContext, useEffect, useState } from 'react'

const ShopContext = createContext()

export default function ShopContextProvider(props) {

    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchAllProducts() {
            setLoading(true)
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                )
                const data = await response.json()
                setProducts(data)
                console.log(products)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fetchAllProducts()
    }, [])

    function getDefaultCart() {
        let cart = {}
        for (let i = 0; i < products.length + 1; i++) {
            cart[i] = 0
        }
        return cart
    }

    function addToCart(itemId) {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(itemId)
    }

    function removeFromCart(itemId) {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = { products, cartItems, addToCart, removeFromCart }

    console.log(cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export { ShopContext }