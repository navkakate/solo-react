import React from 'react';
import Popup from '../popup/popup';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, activePhoto: null };
  }

  showPopup() {
    this.setState({ showPopup: true, activePhoto: this.props.photo });
  }

  closePopup(event) {
    event.stopPropagation();
    this.setState({ showPopup: false, activePhoto: null });
  }

  render() {
    const { photo } = this.props;
    return (
      <div onClick={ () => this.showPopup() }>
        <img
          src={ photo.thumbnailUrl }
          alt={ photo.title }
          className="Container-thumb"
          width="150"
          height="150"/>
        <div>{ photo.title }</div>
        { this.state.showPopup ?
          <Popup photo={this.state.activePhoto} closePopup={(event) => this.closePopup(event)}></Popup> :
          null }
      </div>
    );
  };
}

export default Photo;
