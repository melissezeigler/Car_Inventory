import React from 'react'
import Background from '../assets/images/hotwheelsbg.jpg'

function Home() {
  return (
    <div 
        style={{ backgroundImage: `url( ${ Background })` }} 
        className='flex flex-grow justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>Welcome to the Cars Inventotry</h3>
            </div>
    </div>
  )
}

export default Home