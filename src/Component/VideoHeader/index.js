import { FaMusic } from 'react-icons/fa'
import Btn from './Btn'
import './style.scss'

export default function VideoHeader() {
  return (
    <div className="header flex flex-row justify-around">
      <div className="flex flex-row my-5">
      <img className="h-14 w-14 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg" alt="noImg" />
      <div className="ml-3">
        <a href="#"><b className="hover:underline">anmlscute</b>Min buồn ngủ🥱</a>
        <p>huhu</p>
        <a href="#" className='flex hover:underline font-bold'><FaMusic
        className='align-middle mr-2 mt-1'/>nhạc nền - ttrnngne</a>
      </div>
      </div>
      <Btn/>
    </div>
  )
}
// h-[30px] border-rose-500 border hover:bg-rose-50 text-sm px-7 mt-5 text-rose-500 font-bold rounded


// h-[30px] border-gray-300 border hover:bg-gray-100 hover:border-2 text-sm px-7 mt-5 font-bold rounded
