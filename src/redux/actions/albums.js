import { SET_ALBUMS } from 'app/redux/constants/albums';

export const setAlbums = albums => ({
  type: SET_ALBUMS,
  payload: albums
});