import { SEARCH_BOX_FETCHING } from 'app/redux/constants/searchBox';

const initialState = {
  fetching: false
};

const searchBox = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_BOX_FETCHING:
      return {
        ...state,
        fetching: payload
      };

    default:
      return state;
  }
};

export default searchBox;