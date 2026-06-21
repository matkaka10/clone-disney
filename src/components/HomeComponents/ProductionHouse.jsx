import React from 'react'
import disney from '../../assets/Images/disney.png'
import marvel from '../../assets/Images/marvel.png'
import pixar from '../../assets/Images/pixar.png'
import starwars from '../../assets/Images/starwar.png'
import natgeo from '../../assets/Images/nationalG.png'

import disneyVideo from '../../assets/Videos/disney.mp4'
import marvelVideo from '../../assets/Videos/marvel.mp4'
import pixarVideo from '../../assets/Videos/pixar.mp4'
import starwarsVideo from '../../assets/Videos/star-wars.mp4'
import natgeoVideo from '../../assets/Videos/nationalG.mp4'

function ProductionHouse() {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyVideo
        },
        {
            id:2,
            image:marvel,
            video:marvelVideo
        },
        {
            id:3,
            image:pixar,
            video:pixarVideo
        },
        {
            id:4,
            image:starwars,
            video:starwarsVideo
        },
        {
            id:5,
            image:natgeo,
            video:natgeoVideo
        }
    ]
  return (
    <div className='flex gap-2 md:gap-2 p-1 px-3 md:px-16'>
        {productionHouseList.map((item, index)=>( 
           <div
      key={index}
      className="
        group
        relative
        flex-1
        aspect-video
        overflow-hidden
        rounded-lg
        cursor-pointer
        transition-all
        duration-300
        ease-in-out
        hover:scale-105
        hover:z-20
        
      "
    >
      {/* Video: tersembunyi saat normal, muncul ketika hover */}
      <video
        src={item.video}
        autoPlay
        loop
        playsInline
        muted
        className="
          absolute
          inset-0
          z-0
          w-full
          h-full
          object-cover
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          hover:z-20
          delay-300
        "
      />

      {/* Background abu-abu: tampil saat normal, hilang ketika hover */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gray-800
          transition-opacity
          duration-500
          group-hover:opacity-0
        "
      />

      {/* Logo tetap berada di atas */}
      <img
        src={item.image}
        alt={item.name || "Production House"}
        className="
          relative
          z-20
          w-full
          h-full
          object-contain
          p-6
          pointer-events-none
          transition-transform
            duration-300
            ease-in-out
            group-hover:scale-110
          delay-300
        "
      />
    </div>

        ))}
    </div>
  )
}

export default ProductionHouse