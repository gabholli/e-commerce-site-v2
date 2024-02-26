import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import { ShopContext } from '../context/ShopContext'

export default function AllProducts() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { products, addToCart } = useContext(ShopContext)

    console.log(products)

    const allProducts = products?.map((product, index) => {
        return (
            <>
                <div key={product.id} className="p-2 border-gray-300 border-2 rounded-2xl flex
                        flex-col justify-between">
                    <Link to={`${product.id}`}>
                        <div className="flex flex-col justify-center gap-y-4
                                p-2">
                            <img className="rounded-xl size-72" src={product.image}></img>
                            <h1>{product.title}</h1>
                            <p>${product.price}</p>
                        </div>
                    </Link >
                    <button className='w-full bg-green-300 py-3 px-6'
                        onClick={() => { addToCart(product.id) }}>
                        Add to Cart
                    </button>
                </div >
            </>
        )
    })

    return (
        <div className='py-6'>
            <div className='flex items-center justify-center flex-col
                md:items-start md:pl-16'>
                <input className="border-2 border-gray-300 indent-2"
                    type="text"
                    placeholder="search">

                </input>
            </div>
            <div className='flex flex-col md:flex-row p-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:pr-4 py-4 gap-4 order-2 md:order-1'>
                    {allProducts}
                </div>
                <SideMenu />
            </div>
        </div>
    )
}

