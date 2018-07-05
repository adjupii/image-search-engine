import { getAlbum } from 'app/api/imgur/index';

import { SEARCH_BOX_FETCHING } from 'app/redux/constants/searchBox';

import { setAlbums } from 'app/redux/actions/albums';

const searchBoxFetching = isFetching => ({
  type: SEARCH_BOX_FETCHING,
  payload: isFetching
});

export const searchForAlbum = album => dispatch => {
  dispatch(searchBoxFetching(true));

  return (
    getAlbum(album)
    .then(res => {
      dispatch(searchBoxFetching(false));

      dispatch(setAlbums(res))
    })
    .catch(err => {
      dispatch(searchBoxFetching(false));
    })
  )
};