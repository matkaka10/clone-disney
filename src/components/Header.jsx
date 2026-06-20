import React, {useState} from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'


const Header = () => {
  const [toggle, setToggle] = (useState(false))
  const menu=[
    {
      name:'HOME',
      icon:HiHome,
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass,
    },
    {
      name:'WATCHLIST',
      icon:HiPlus,
    },
    {
      name:'ORIGINALS',
      icon:HiStar,
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle,
    },
    {
      name:'Series',
      icon:HiTv,
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
              <HeaderItem  key={item.name} name={item.name} Icon={item.icon} />
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
                name={''} Icon={item.icon} />
            ))}
            <div 
              className='md:hidden' 
              onClick={()=> setToggle(!toggle)}>
                <HeaderItem name={''} Icon={HiDotsVertical} />
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
                              '>
                  {menu.map((item, index)=>index>2&&(
                    <HeaderItem  name={item.name} Icon={item.icon} />
                  ))}
              </div> : null}
            </div>
          </div>
      </div>
      <img src="https://www.magnific.com/icon/cat_8158469#fromView=keyword&page=1&position=16&uuid=9f639347-b00a-4aba-80d0-2f672023daaa"
        className='w-[40px] rounded-full'
      />
    </div>
  )
}

export default Header