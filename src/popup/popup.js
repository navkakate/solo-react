import React from 'react';
import './popup.css';

const Popup = (props) => {
  return (
    <div className="popup" onClick={props.closePopup}>
      <div className="popup-inner">
        <img src={props.photo.url} alt={props.photo.title}/>
      </div>
    </div>
  );
}

export default Popup;