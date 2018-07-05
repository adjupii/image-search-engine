import React from 'react';

import { Container } from 'reactstrap';
import SearchBox from 'app/containers/search-box/SearchBoxContainer';

const App = () => {
  return (
    <Container className='mt-5'>
      <SearchBox />
    </Container>
  )
};

export default App;