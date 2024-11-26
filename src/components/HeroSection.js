import React from 'react'
import man from "../assets/man.jpeg";
import shoe from "../assets/shoes.jpeg";
import shirt from "../assets/shirt.jpeg";

export default function HeroSection() {
  return (
    <div className=' bg-[#222222]'>
        <div className=' flex text-white justify-around pt-[76px]'>
            <div className=' '>
            <p className='  text-[60px] font-medium md:text-[128px] sm:text-[90px]'>TIMBU</p>
            <p className='  text-[60px] font-medium md:text-[128px] sm:text-[90px] lg:hidden'>SHOP</p>
            </div>
            <div  className=' '>
            <img src={man} className='sm:h-[250px] sm:w-[250px] sm: md:w-[300px] md:h-[300px] w-[150px] h-[150px] rounded-full'/>
            </div>
            <div className=' w-[435px] pt-[60px] text-xl leading-9 hidden lg:block'>
            <p>Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service</p>
            <p className=' text-[56px] font-medium md:text-[128px] pt-[60px]'>SHOP</p>
            </div>
        </div>

        <div className=' flex justify-around pt-16 items-center'>
            <div className=' pl-11'>
            <img src={shoe} className=' rounded-full w-[260px] h-[260px] lg:block hidden'/>
            </div>
            <div className=' text-center pl-'>
            <button className=' bg-white text-black w-[300px] text-lg font-medium h-[50px] rounded-xl'>Explore Now</button>
            </div>
            <div className=' pt-16 '>
            <img src={shirt} className=' w-[223px] h-[223px] rounded-full lg:block hidden'/>
            </div>
        </div>
    </div>
  )
}
