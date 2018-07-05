import { combineReducers } from 'redux';

import albums from 'app/redux/reducers/albums';
import searchBox from 'app/redux/reducers/searchBox';

const rootReducer = combineReducers({
  albums,
  searchBox
});

export default rootReducer;