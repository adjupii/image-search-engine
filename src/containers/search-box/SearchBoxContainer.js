import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { searchForAlbum } from 'app/redux/actions/searchBox';
import { getImagesFromAlbums } from 'app/redux/selectors/albums';

import SearchForm from 'app/components/search-form/SearchForm';
import ImagesList from 'app/components/images/ImagesList';

const SearchBoxContainer = ({
  action,
  fetching,
  images
}) => (
  <div className='text-center'>
    <h2 className='mb-5'>Album Search</h2>
    <SearchForm action={action} />
    {
      fetching ?
        <div>Loading...</div> :
        images ?
          images.length ?
            <ImagesList data={images} /> :
            <div>No results on this album</div> :
          null
    }
  </div>
);

SearchBoxContainer.propTypes = {
  fetching: PropTypes.bool,
  images: PropTypes.array,
  action: PropTypes.func
};

const mapStateToProps = state => ({
  fetching: state.searchBox.fetching,
  images: getImagesFromAlbums(state)
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(searchForAlbum, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxContainer);