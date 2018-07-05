export const getAlbumsWithImages = albums => albums.filter(album => album.images);

export const getImagesFromAlbums = albums => {
  return albums.reduce((images, album) => {
    return [...images, ...album.images];
  }, []);
};