import Play from './Play';
import { IoPlay, IoPause } from 'react-icons/io5'
import { useRef, useState, memo } from 'react'

function video({className}) {
    const btnVideo = useRef();

    const [play, setPlay] = useState(false);

    const handleClick = () => {
      if(play){
        btnVideo.current.Pause();
      } else {
        btnVideo.current.Play();
      }
      setPlay(!play);
    }

    const handlePlay = (element) => {

      const Status = play ? IoPause : IoPlay;

      return (
        <Status className={element}/>
      )
    }

  return (
    <div className={`video relative ${className}`}>
    <Play ref={btnVideo}/>
    <button onClick={handleClick} className='absolute bottom-7 left-14'>{handlePlay('text-2xl text-white')}</button>
    </div>
  )
}

export default memo(video);