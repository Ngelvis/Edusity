import React, { useRef } from 'react'
import './Video.css'
import videoPlay from '../../assets/video.mp4'

const Video = ({playState, setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlayState(false);
    }
  }

  return (
    <div className={`videoPlayer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={videoPlay} autoPlay muted controls></video>
    </div>
  )
}

export default Video