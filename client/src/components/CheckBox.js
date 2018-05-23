import React from 'react';

const CheckBox = (props) =>
<label className="CheckBoxLabel">
  <input checked={props.checked} onChange={props.onChange} name={props.name} disabled={props.disabled} type="checkbox" />
  <div className="InputBox">
    <div className="InputBoxLabel">
      <div className="InputBoxLabelText">
        {props.text}
      </div>
    </div>
    <div className="InputBoxType">
      <div className="CheckBox"></div>
    </div>
  </div>
</label>

export default CheckBox;
