import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md"

export default function Collection({image, category, rating, brand,item,price}) {
  return (
    <div className=' w-[435px] border border-[#C1C1C1] h-[480px] flex flex-col  rounded-2xl mr-3 items-center mb-2'>
        <div>
        <div className=' w-[403px] h-[270px] bg-[#F2F2F2] rounded-2xl m-2 '>
            <div className=' p-4 flex justify-between items-center '>
                <div className=' bg-white p-3 text-black rounded-full cursor-pointer'>
            <IoIosHeartEmpty />
            </div>
            <p className=' bg-white px-3 py-2 rounded-3xl text-sm'>In Stock</p>
            </div>
            <div className=' items-center flex justify-center max-w-sm'>
                <img src={image}/>
            </div>

        </div>



        <div className=' flex justify-between mx-2'>
            <div>
                <p className=' py-1 text-sm px-3 border rounded-3xl text-[#808080]'>{category}</p>
            </div>
            <div className=' flex items-center text-[#808080]'>
            <MdOutlineStarPurple500 className=' text-2xl text-[#FFD700]'/>
            <p>{rating}</p>
            </div>

        </div>
<div className=' pt-5 mx-2'>
    <p className=' text-lg font-semibold'>{item}</p>
    <p className='  text-[#808080]'>{brand}</p>
</div>

<div className=' mx-2 flex justify-between items-center mt-3'>
    <p className=' text-lg font-semibold'>{price}</p>
    <button className=' bg-black text-white px-4 py-5 rounded-2xl font-medium'>Add to Cart</button>
</div>

        </div>
    </div>
  )
}
