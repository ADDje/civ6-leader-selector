import React from 'react';

function Modal(Component) {
  return class extends React.Component {
    render() {
      return (
        <div className="Modal" style={{height:this.props.height, width:this.props.width}}>
          <div className="ModalBox">
            <div className="ModalHeader">
              <div className="TitleText">{this.props.title}</div>
            </div>
            <div className="ModalSplitter"></div>
            <div className="ModalBody">
              <Component {...this.props} />
            </div>
          </div>
          <div className="ModalBorder"></div>
        </div>
      );
    }
  };
}

export default Modal;
