import { createSelector } from 'reselect'

import {
  getAlbumsWithImages,
  getImagesFromAlbums as getImages
} from 'app/helpers/albums';

const getAlbums = state => state.albums;

export const getImagesFromAlbums = createSelector(
  getAlbums,
  albums => {
    if (!albums) {
      return albums;
    }

    const albumsWithImages = albums.length ? getAlbumsWithImages(albums) : [];

    return albumsWithImages.length ? getImages(albumsWithImages) : [];
  }
);