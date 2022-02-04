import React, { useRef, useEffect } from 'react'

const VideoGrid = (props) => {
  const { peer } = props
  const videoRef = useRef()

  useEffect(() => {
    peer.on('stream', (stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    })
  })

  return (
    <video
      style={{
        width: '50%',
        height: '100%',
        borderRadius: '15px',
        backgroundColor: 'black',
      }}
      playsInline
      autoPlay={true}
      ref={videoRef}
    />
  )
}

export default VideoGrid
