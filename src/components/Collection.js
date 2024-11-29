import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import bag from '../assets/bag.png'

export default function Collection() {
  return (
    <div className=' w-[392px] border border-[#C1C1C1] h-[480px] flex flex-col  rounded-2xl mr-3'>
        <div className=' w-[342px] h-[270px] bg-[#F2F2F2] rounded-2xl m-2 '>
            <div className=' p-4 flex justify-between items-center '>
                <div className=' bg-white p-3 text-black rounded-full cursor-pointer'>
            <IoIosHeartEmpty />
            </div>
            <p className=' bg-white px-3 py-2 rounded-3xl text-sm'>In Stock</p>
            </div>
            <div className=' items-center flex justify-center '>
                <img src={bag}/>
            </div>

        </div>



        <div className=' flex justify-between mx-2'>
            <div>
                <p className=' py-1 text-sm px-3 border rounded-3xl text-[#808080]'>Women</p>
            </div>
            <div>

            </div>

        </div>
    </div>
  )
}
