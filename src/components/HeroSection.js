import React from 'react'
import hero1 from '../images/hero1.jpg'
const HeroSection = () => {
    return (
        <div className='relative w-full h-screen flex items-center justify-center'>
            <img src={hero1} alt='hero-image' className='w-full max-w-[800px] md:max-w-[1000px] lg:max-w-[1600px] h-3/4 object-cover'/>
            
                <h1 className='absolute text-orange-500 text-3xl font-bold lg:text-5xl'>EDUSUPPLY</h1>
                <button className="absolute bottom-[20%] bg-orange-500 text-white px-6 py-2 text-lg font-semibold rounded-lg hover:bg-orange-600 transition">SHOP NOW</button>
        </div>
            
    )
}

export default HeroSection