import React from 'react';

const PlayerName = (props) =>
<div className="PlayerName">
  <div className="PlayerNameInner">
    <div className="PlayerNameBar">
      <div className="PlayerNameText">
        {props.name}
      </div>
      {
        props.host ?
        <div className="PlayerNameHost">
          <div className="PlayerNameHostInner">
            <img alt="" src={require('../assets/images/crown.svg')} />
          </div>
        </div> :
        ''
      }
      <div className="PlayerNameStatus">
        {props.host ? 'Host' : 'Player'}
      </div>
      <div className="PlayerNameLight">
        <img alt="" src={require('../assets/images/greenlight.png')} />
      </div>
    </div>
  </div>
</div>

export default PlayerName;
