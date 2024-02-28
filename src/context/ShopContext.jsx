import React, { createContext, useEffect, useState } from 'react'

const ShopContext = createContext()

export default function ShopContextProvider({ children }) {

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
        for (let i = 0; i < products.length; i++) {
            cart[i] = 0
        }
        return cart
    }

    function addToCart(itemId) {
        setCartItems(prev => ({ ...prev, [itemId]: (prev[itemId] + 1) || 1 }))
        console.log(cartItems)
    }

    function removeFromCart(itemId) {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    function getTotalCartPrice() {
        let totalPrice = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item))
                totalPrice += itemInfo.price * cartItems[item]
            }
        }
        return Number(totalPrice).toFixed(2)

    }

    function getItemTotalQuantity(cartItems) {
        let sum = Object.values(cartItems)
            .reduce((a, b) => a + b, 0)
        return sum
    }

    function checkArrayHasValue(array) {
        let hasValue = array.some(value => value !== undefined &&
            value !== null && value !== "")
        return hasValue
    }

    const contextValue = { products, cartItems, addToCart, removeFromCart, getTotalCartPrice, getItemTotalQuantity, checkArrayHasValue }


    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContext }