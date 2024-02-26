import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ProductDetail() {

    const { productId } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     async function fetchProductDetail() {
    //         setLoading(true)
    //         try {
    //             const response = await fetch(
    //                 `https://api.escuelajs.co/api/v1/products/${productId}`
    //             )
    //             const data = await response.json()
    //         } catch (e) {
    //             setError(e)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchProductDetail()
    // }, [productId])

    return (
        <div>ProductDetail</div>
    )
}
