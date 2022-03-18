import VideoHeader from './VideoHeader'
import Video from './Video'
import VideoContent from './VideoContent'

export default function VideoComponent({ className }) {
  return (
    <div className={`snap-start py-14 flex border-b-2 border-gray-300 flex-col ${className}`}>
      <VideoHeader/>
      <div className='flex flex-row justify-end lg:justify-center'>
      <Video/>
      <VideoContent/>
      </div>
    </div>
  )
}
