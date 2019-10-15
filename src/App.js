import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AlbumList from './album-list/album-list';
import PhotoList from './photo-list/photo-list';
import fetchPhotos from './services/fetch-service';
import { getAlbumsForDisplay, getSelectedAlbum } from './services/gallery-service';

const PHOTO_LIMIT = 300;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [], photos: [] };
  }

  async componentDidMount() {
    try {
      const photosAll = await fetchPhotos();
      const photos = photosAll.slice(0, PHOTO_LIMIT);
      const albums = getAlbumsForDisplay(photos);
      this.setState({ albums, photos });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google photos</h1>
        </header>
        <BrowserRouter>
          <div>
          <Route
            path='/' exact
            render={(props) => <AlbumList {...props} albums={this.state.albums} />}
          />
          <Route
            path='/album/:albumId'
            render={ props => {
              const photos = getSelectedAlbum(this.state.photos, props.match.params.albumId);
              return (<PhotoList {...props} photos={ photos } />);
            }}
          />
          </div>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
