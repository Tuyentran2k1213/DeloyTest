import { useRef, forwardRef, useImperativeHandle } from 'react'

function Video({className}, ref) {

  const btnVideo = useRef();

  useImperativeHandle(ref, () => ({
    Play() {
      btnVideo.current.play();
    },
    Pause() {
        btnVideo.current.pause();
    }
  }))

  return (  
      <video ref={btnVideo} className='w-[80%] max-h-[600px] mx-auto rounded-lg' src="https://v16-webapp.tiktok.com/62a40b2b884e5cb758b83fba2e28da93/6233b4a1/video/tos/alisg/tos-alisg-pve-0037c001/879443661ce54beaac7a38d1319bfbc0/?a=1988&br=1868&bt=934&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThiZeiDXq&l=202203171622190102450002292439EF55&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amtpc2Y6ZmhxOzMzODczNEApNzVoNTNkOjs3Nzk4NmVlOGdoamIzcjRfaTJgLS1kMS1zczNhLjYxY2A2MmA2NTRjLjE6Yw%3D%3D&vl=&vr=" type='video/mp4' loop/>
  )
}

export default forwardRef(Video)

