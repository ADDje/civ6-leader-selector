import React from 'react';

const NavButton = (props) =>
<button onClick={props.onClick} className={'NavButtonBorder' + (props.active ? ' NavActive' : ' NavInactive')}>
  <div className="NavButton">
    {
      props.active ?
      <div className="NavButtonShadows">
        <div className="NavButtonShadowLeft"></div>
        <div className="NavButtonShadowRight"></div>
        <div className="NavButtonShadowBottom"></div>
      </div> :
      <div className="NavButtonShadows">
        <div className="NavButtonHover"></div>
        <div className="NavButtonActive"></div>
        <div className="NavButtonShadowTop"></div>
      </div>
    }
    <div className="NavButtonInnerBorder">
      <div className="NavButtonInner">
        {
          props.active ?
          <div className="NavButtonIcon NBIL">
            <div className="NavButtonIconInner"></div>
          </div>
          : ''
        }
        <div className="NavButtonText">
          {props.text}
        </div>
        {
          props.active ?
          <div className="NavButtonIcon NBIR">
            <div className="NavButtonIconInner"></div>
          </div>
          : ''
        }
      </div>
    </div>
  </div>
</button>

export default NavButton;
