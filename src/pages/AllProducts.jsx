import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import { ShopContext } from '../context/ShopContext'

export default function AllProducts() {

    const { products, addToCart } = useContext(ShopContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const location = useLocation()

    const categoryType = location.state.category

    const filteredResults = categoryType
        ? products?.filter(product => product.category === categoryType)
        : products

    const allProducts = filteredResults?.map((product, index) => {
        return (

            <div key={product.id} className="p-2 border-gray-300 border-2 rounded-2xl flex
                        flex-col justify-between">
                <Link to={`${product.id}`}>
                    <div className="flex flex-col justify-center gap-y-4
                                p-2">
                        <img className="rounded-xl size-72 self-center" src={product.image} alt="Product"></img>
                        <h1 className="h-10 md:h-20">{product.title}</h1>
                        <div className='flex justify-between mt-16 md:mt-0'>
                            <p className="pb-14">${Number(product.price).toFixed(2)}</p>
                            <p className="bg-green-300 px-4 py-2 h-8 flex justify-center items-center
                                    rounded-2xl">
                                {product.category}
                            </p>
                        </div>
                    </div>
                </Link >
                <button className='w-full rounded-2xl bg-green-300 hover:underline active:bg-green-400 py-3 px-6'
                    onClick={() => { addToCart(product.id) }}>
                    Add to Cart
                </button>
            </div >

        )
    })

    return (
        <div className='py-6'>
            <div className='grid md:grid-areas-allProducts p-4'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:pr-4 py-4 gap-4 order-2 md:order-1'>
                    {allProducts}
                </div>
                <SideMenu />
            </div>
        </div>
    )
}

