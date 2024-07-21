import React from 'react'

function CardVideoSection() {
  return (
    <div>
      <h1 className='text-5xl font-bold my-10 text-center'>There's an Ola ride for everyone</h1>
      <div>
        <video autoPlay controls muted loop style={{ padding:'10px 120px' ,width:'100%', height:'100%'}} src='https://videos.pexels.com/video-files/7875596/7875596-hd_1920_1080_30fps.mp4'></video>
      </div>

    </div>
  )
}

export default CardVideoSection