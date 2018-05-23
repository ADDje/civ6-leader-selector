import React from 'react';
import bgvideo from '../assets/images/vidbg.mp4';

const BGVid = (props) =>
<div className="BGVid">
  {
    props.vidbg ?
    <video id="background-video" loop autoPlay>
      <source src={bgvideo} type="video/mp4" />
      <source src={bgvideo} type="video/ogg" />
    </video> : ''
  }
</div>

export default BGVid;
