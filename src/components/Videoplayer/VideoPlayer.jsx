import React from 'react'
import './VideoPlayer.css';

function VideoPlayer() {
  return (
    <div className='videoplayer'>
        <video src={video}></video>
    </div>
  )
}

export default VideoPlayer