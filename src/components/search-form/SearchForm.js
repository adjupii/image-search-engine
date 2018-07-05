import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Input } from 'reactstrap';

class SearchForm extends Component {
  state = {
    value: ''
  };

  search = () => {
    const { action } = this.props;
    const { value } = this.state;

    action(value);
  };

  onChange = (e) => {
    const value = e.target.value;

    this.setState({ value });
  };

  render() {
    return (
      <Form
        inline
        className='justify-content-center mb-3'
      >
        <Input
          type='text'
          className='mr-sm-3'
          name='search'
          placeholder='Search'
          onChange={this.onChange}
        />
        <Button
          outline
          onClick={this.search}
        >
          Search
        </Button>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  action: PropTypes.func
};

export default SearchForm;