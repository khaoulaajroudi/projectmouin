import React from 'react';
import Navbarr from './Navbarr';
import video from './videos/pearl.mp4';

const Occasion = () => {
  return (
    <div>
    <Navbarr />
    <div className='video'>
    <video  className='vid' src={video}  autoPlay loop muted ></video>
</div>
    </div>
  );
}

export default Occasion;
