import React from 'react'
import navigation from '../assets/navigation.png'
import Collection from './Collection'
import bag from "../assets/bag.png"
import shoe from "../assets/pinkshoe.png"
import gown from "../assets/150577_BROWN_9 2.png"


export default function LatestCollections() {
  const collections = [
    {id: 1,
      image: bag,
      category: "Women",
      rating: "2k+ rating",
      item: 'French Kiss Bag',
      brand: "ALDO",
      price: "$500"
    },
    {id: 2,
      image: shoe,
      category: "Kids",
       rating: "1k+ rating",
       item: "Burberry shine",
       brand: "FENDI",
       price: "$150"
    },
    {id: 3,
      image: gown,
category: "Women",
 rating: "5k+ rating",
 item: "Alvero Gown",
 brand: "DIVINE",
 price: "$300"
    }
  ]

  
  return (
    <div className=' pt-20 px-20'>
        <div className=' flex justify-between items-center'>
        <div className=' text-2xl font-semibold'>Latest Collections</div>
        <div className=' hidden md:block'>
            <img src={navigation} className=' w-[80px]'/>
        </div>
        </div>
        <div className=' flex mt-12'>
          {collections.map((coll)=>(
<Collection key={coll.id} image={coll.image} category={coll.category} item={coll.item} brand={coll.brand} rating={coll.rating} price={coll.price}/>
          ))}
</div>

        </div>
  )
}
