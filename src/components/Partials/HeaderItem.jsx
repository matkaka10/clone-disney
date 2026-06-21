import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = ({ name, Icon, navLink, onClick }) => {
  const content =  (
    <>
      <div 
      onClick={onClick}
          className='
          text-white 
          flex 
          items-center 
          gap-3 
          text-[18px] 
          font-semibold 
          cursor-pointer 
          hover:underline 
          underline-offset-8 
          mb-2'>
          <Icon/>
          {name && <h2>{name}</h2>}
      </div>
    </>
    
  )
  return navLink ?  <Link to={navLink}>{content}</Link> : content
}

export default HeaderItem