import React, { useContext } from 'react'
import { storeContext } from '../context/StoreContext'

const Dashboard = () => {

    const {selectedProducts} = useContext(storeContext)
    console.log(selectedProducts);

  return (
    <div className='grid grid-cols-1  lg:grid-cols-3'>
        <div className='border border-green-500 mt-20 mx-5 p-5 space-y-5'>
            <div className='text-center font-bold text-4xl text-green-400'>
                <h1>Today:</h1>
            </div>
            <div className='text-2xl flex flex-col sm:flex-row text-center justify-center  space-y-3 sm:space-y-0 sm:justify-between  sm:flex-nowrap'>
                <p>product buy: {selectedProducts.length}</p>
                <p>total price: {selectedProducts.reduce((total, product) => total + parseInt(product.price), 0)}$</p>
            </div>
        </div>

        <div className='border border-green-500 mt-20 mx-5 p-5 space-y-5'>
            <div className='text-center font-bold text-4xl text-green-400'>
                <h1>weekly:</h1>
            </div>
            <div className='text-2xl flex flex-col sm:flex-row text-center justify-center  space-y-3 sm:space-y-0 sm:justify-between flex-wrap sm:flex-nowrap'>
                <p>product buy: {selectedProducts.length}</p>
                <p>total price: {selectedProducts.reduce((total, product) => total + parseInt(product.price), 0)}$</p>
            </div>
        </div>

        <div className='border border-green-500 mt-20 mx-5 p-5 space-y-5'>
            <div className='text-center font-bold text-4xl text-green-400'>
                <h1>monthy:</h1>
            </div>
            <div className='text-2xl flex flex-col sm:flex-row text-center justify-center  space-y-3 sm:space-y-0 sm:justify-between flex-wrap sm:flex-nowrap'>
                <p>product buy: {selectedProducts.length}</p>
                <p>total price: {selectedProducts.reduce((total, product) => total + parseInt(product.price), 0)}$</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard