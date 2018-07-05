import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';
import ImagesListItem from './ImagesListItem';

const ImagesList = ({
  data
}) => (
  <Row>
    {
      data.map((image, index) => (
        <Col
          key={index}
          sm='4'
          className='mb-3'
        >
          <ImagesListItem data={image} />
        </Col>
      ))
    }
  </Row>
);

ImagesList.propTypes = {
  data: PropTypes.array
};

export default ImagesList;