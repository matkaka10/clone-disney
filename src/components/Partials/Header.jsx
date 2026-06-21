import React, {useState} from 'react'
import logo from '../../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
// Nav handled inside HeaderItem; no direct Link import needed here


const Header = () => {
  const [toggle, setToggle] = (useState(false))
  const [searchBar, setSearchbar] = (useState(false))
    const menu=[
    {
      name:'HOME',
      icon:HiHome,
      navLink:'/'
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass,
      navLink:'/search'
    },
    {
      name:'WATCHLIST',
      icon:HiPlus,
      navLink:'/watchlist'
    },
    {
      name:'ORIGINALS',
      icon:HiStar,
      navLink:'/originals'
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle,
      navLink:'/movies'
    },
    {
      name:'Series',
      icon:HiTv,
      navLink:'/series'
    }
  ]
  return (
    <div className ='
    flex 
    items-center 
    justify-between
    '>
      <div className='
      flex 
      gap-8 
      items-center 
      p-4'>
          <img 
          src={logo} 
          className='
          w-[50px] 
          md:w-[100px] 
          object-cover
          ' />
          <div 
          className='
          hidden 
          md:flex 
          gap-8
          '>
            {menu.map((item)=>(
              <HeaderItem  
              key={item.name} 
              name={item.name} 
              Icon={item.icon}
              navLink={item.icon === 'SEARCH' ? null : item.navLink} 
                onClick= {
                  item.name === 'SEARCH' 
                  ? () => setSearchbar((prev) => !prev)
                  : undefined
                }
              />
            ))}
          </div>
          <div className='
                flex 
                md:hidden 
                gap-5
                '>
            {menu.map((item,index)=>index<3&&(
              <HeaderItem  
                key={item.name} 
                name={''} 
                Icon={item.icon}
                navLink={item.name === 'SEARCH' ? null : item.navLink} 
                  onClick= {
                    item.name === 'SEARCH'
                    ? () => setSearchbar((prev) => !prev)
                    :undefined
                  }
                />
            ))}
            <div 
              className='md:hidden' 
              onClick={()=> setToggle(!toggle)}>
                <HeaderItem 
                name={''} 
                Icon={HiDotsVertical}
                navLink={null} />
                {toggle? <div className='
                              absolute 
                              mt-3 
                              bg-[#121212]
                              border-[1px] 
                              border-gray-700 
                              p-3 
                              px-5 
                              py-4 
                              rounded-lg
                              z-10
                              '>
                  {menu.map((item, index)=>index>2&&(
                    <HeaderItem  
                    key={item.name}
                    name={item.name} 
                    Icon={item.icon}
                    navLink={item.navLink} />
                  ))}
              </div> : null}
             
            </div>
          </div>
      </div>
       <div className=''>
                  {searchBar && (
                    <input className='
                            w-52 rounded-md bg-gray-800 px-4 py-2 text-white outline-none'
                    type='text'
                    placeholder='Cari Apa?'
                    autoFocus
                    />

                  )}
      </div>
      <img src={null} 
        className='w-[40px] rounded-full'
      />
    </div>
  )
}

export default Header