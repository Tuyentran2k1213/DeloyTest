import { useState, memo, useEffect, useRef } from 'react'
import { BsHeartFill } from 'react-icons/bs'

function LikeBtn() {
    const like = useRef()
    const [heart, setHeart] = useState(false);
    const [element, setElement] = useState('bg-gray-100 hover:bg-gray-200');
    
    const handleClick = () => {
        setHeart(!heart);
    }

    useEffect(() => {
        like.current.classList.toggle('text-rose-600', heart);
    }, [heart])

  return (
    <>
    <button ref={like} onClick={handleClick} className='bg-gray-100 hover:bg-gray-200 p-4 rounded-full ease-linear duration-200'>
          <BsHeartFill className='text-xl'/>
        </button>
    </>
  )
}
export default memo(LikeBtn);


