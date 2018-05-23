import React from 'react';

const DropDown = (props) =>
<select className="DropDown">
  <div className="InputBox">
    <div className="InputBoxLabel">
      <div className="InputBoxLabelText">

      </div>
    </div>
    <div className="InputBoxType">
      <div className="DropDownArrow"></div>
    </div>
  </div>
  {props.children}
</select>

export default DropDown;
