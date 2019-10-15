export function getAlbumsForDisplay(photos) {
  const albumsCount = {};
  const albums = []
  for(let i = 0; i < photos.length; i++) {
    if(!albumsCount[photos[i].albumId]) {
      albumsCount[photos[i].albumId] = photos[i].albumId;
      albums.push({
        id: photos[i].albumId,
        heading: `Album ${photos[i].albumId}`,
        thumbnail: photos[i].thumbnailUrl,
      });
    }
  }
  return albums;
}

export function getSelectedAlbum(photos, albumId) {
  return photos
    .filter(photo => Number(photo.albumId) === Number(albumId));
}
