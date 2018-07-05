import { SET_ALBUMS } from 'app/redux/constants/albums';

const albums = (state = null, { type, payload }) => {
  switch (type) {
    case SET_ALBUMS:
      return payload;

    default:
      return state;
  }
};

export default albums;