import React from 'react';
import { Link } from 'react-router-dom';
import './album-list.css';
import '../grid.css';

const AlbumList = props => {
  const albums = props.albums.map(album => (
    <li className="Container-item" key={ album.id }>
      <Link
        to={`/album/${ album.id }`}
        className="AlbumList-item-link">
        <img
          src={ album.thumbnail }
          alt={ album.heading }
          width="150"
          height="150" />
        <div className="AlbumList-item-heading">{ album.heading }</div>
      </Link>
    </li>
  ));

  return (
    <div>
      <h3>Albums list</h3>
      <ul className="Container">{ albums }</ul>
    </div>
  );
};

export default AlbumList;
