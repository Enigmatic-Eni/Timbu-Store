import React from 'react'
import navigation from '../assets/navigation.png'
import Collection from './Collection'


export default function LatestCollections() {
  return (
    <div className=' pt-20 px-20'>
        <div className=' flex justify-between items-center'>
        <div className=' text-2xl font-semibold'>Latest Collections</div>
        <div className=' hidden md:block'>
            <img src={navigation} className=' w-[80px]'/>
        </div>
        </div>
        <div className=' flex mt-12'>
<Collection  />
<Collection/>
<Collection/>
</div>

        </div>
  )
}
