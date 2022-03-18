import { FaCommentDots, FaShare } from 'react-icons/fa'
import LikeBtn from './LikeBtn'

export default function VideoContent() {
  return (
    <div className='flex flex-col justify-end'>
        <div className='mb-7 text-center'>
        <LikeBtn/>
        <p>fsesfd</p>
        </div>
        <div className='mb-7 text-center'>
        <button className='bg-gray-100 hover:bg-gray-200 p-4 rounded-full ease-linear duration-300'>
          <FaCommentDots className='text-xl'/>
        </button>
        <p>fsesfd</p>
        </div>
        <div className='text-center'>
        <button className='bg-gray-100 hover:bg-gray-200 p-4 rounded-full ease-linear duration-300'>
          <FaShare className='text-xl'/>
        </button>
        <p>fsesfd</p>
        </div>
    </div>
  )
}
