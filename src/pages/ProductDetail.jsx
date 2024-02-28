import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ProductDetail() {

    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProductDetail() {
            setLoading(true)
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/1`
                )
                const data = await response.json()
                setProduct(data)
                console.log(product)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }
        fetchProductDetail()
    }, [])

    return (
        <div className='grid grid-areas-productDetail grid-cols-layout gap-x-24 gap-y-4'>
            <img className="grid-in-image"
                src={product.image}
                alt="Product">
            </img>
            <h1 className='grid-in-title'>{product.title}</h1>
            <p className='grid-in-price'>${product.price}</p>
            <p className='grid-in-desc'>{product.description}</p>
        </div>
    )
}
