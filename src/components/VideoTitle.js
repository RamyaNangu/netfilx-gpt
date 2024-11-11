import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-t from-black'>
     <h1 className='text-6xl font-bold'>{title}</h1>
     <p className='py-6 text-lg w-1/4'>{overview}</p>
     <div className=''>
      <button className='bg-white p-4 px-6 text-black text-lg mx-2 rounded-lg hover:bg-opacity-80'>▶️Play</button>
      <button className='bg-gray-400 p-4 px-6 text-black text-lg mx-2 rounded-lg'>!More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle
