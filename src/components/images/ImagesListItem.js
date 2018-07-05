import React from 'react';
import PropTypes from 'prop-types';

const ImagesListItem = ({
  data
}) => (
  <img
    className='mw-100'
    src={data.link}
    alt='#'
  />
);

ImagesListItem.propTypes = {
  data: PropTypes.object
};

export default ImagesListItem;