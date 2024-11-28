import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

export default function ProductDetail() {

    const { addToCart } = useContext(ShopContext)

    const { productId } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchProductDetail() {
            setLoading(true)
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${productId}`
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
    }, [productId])

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center">
                <h1 className=" text-3xl mb-8 text-center mt-8">There was an error loading this page...</h1>
                <Link to="/" className="bg-green-300 px-4 py-2 rounded text-xl hover:underline">
                    Return to home
                </Link>
            </div>
        )
    }

    return (
        <div className='grid grid-areas-productDetailMobile md:grid-areas-productDetailMedium md:grid-cols-layoutMedium 
        grid-cols-layoutMobile gap-x-24 gap-y-4 border-gray-300 border-2 rounded-2xl p-4 mx-2'>
            <img className="grid-in-image place-self-center size-64 object-scale-down"
                src={product.image}
                alt="Product">
            </img>
            <h1 className='self-end text-center grid-in-title font-extrabold'>{product.title}</h1>
            <p className='self-center text-center grid-in-price'>${Number(product.price).toFixed(2)}</p>
            <p className='grid-in-desc text-center'>{product.description}</p>
            <button className='grid-in-button rounded-2xl bg-green-300 hover:underline active:bg-green-400 py-3 px-6 md:w-56'
                onClick={() => {
                    addToCart(product.id)
                    toast.success("Item added to cart!")
                }}>
                Add to Cart
            </button>
        </div>
    )
}
