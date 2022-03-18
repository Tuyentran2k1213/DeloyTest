import React from 'react'
import './App.css'
import VideoComponent from './Component'


export default function App() {
  return (
    <div className='snap-y snap-mandatory	overflow-scroll h-screen'>
      <div className="container h-auto mx-auto px-40 flex flex-col justify-around">
      <VideoComponent/>
      <VideoComponent/>
      <VideoComponent/>
      <VideoComponent/>
      </div>
    </div>
  )
}