import React from 'react';
import { Link } from 'react-router-dom';
import Photo from '../photo/photo';
import './photo-list.css';
import '../grid.css';

const PhotoList = (props) => {
  const photos = props.photos;

  if(!photos || !photos.length) {
    return <div>Loading...</div>;
  }

  const photosToShow = photos.map((photo, index) => {
    return (
      <li key={ index } className="Container-item" >
        <Photo photo={ photo }></Photo>
      </li>);
  });

  return (
    <div>
      <h3><Link to="/">Back to the album list</Link></h3>
      <ul className="Container">{ photosToShow }</ul>
    </div>
  );
};

export default PhotoList;
