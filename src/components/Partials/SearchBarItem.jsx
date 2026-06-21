import React from 'react'
import { useState } from 'react'

const SearchBarItem = ({onSearch}) => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!keyword.trim()) return

    onSearch(keyword)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
                    <input className='
                            w-[482px] 
                            rounded-md 
                            bg-gray-800 
                            px-4 
                            py-2 
                            ml-[150px]
                            text-white 
                            outline-none'
                            type='text'
                            placeholder='Ca?'
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                            autoFocus
                    />
      </form>
    </div>
  )
}

export default SearchBarItem