import React, { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'

function Btn() {

    const [follow, setFollow] = useState(false);
    const [name, setName] = useState({
        name: 'h-[30px] border-rose-500 border hover:bg-rose-50 text-sm px-7 mt-5 text-rose-500 font-bold rounded',
        title: 'Follow'
    })

    const handleClick = () => {
        setFollow(!follow);
    }
    
    useEffect(() => {
        if(follow) {
            setName({
                name: 'border-gray-300 hover:bg-gray-100 hover:border-2',
                title: 'Following'
            })
        } else {
            setName({
                name: 'border-rose-500 hover:bg-rose-50 text-rose-500',
                title: 'Follow'
            })
        }
    }, [follow])

  return (
    <>
    <button onClick={handleClick} className={`font-bold mt-5 rounded px-7 h-[30px] border text-sm ${name.name}`}>
      {name.title}
      </button>
    </>
  )
}

export default memo(Btn)