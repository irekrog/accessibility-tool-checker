import React from 'react';
import PropTypes from 'prop-types';

import '../css/search-input.css';

const SearchInput = props => (
  <div className="input-wrapper">
    <input placeholder="Enter URL..." onChange={props.handleInput}/>
    <button onClick={props.sendRequest}>Check</button>
  </div>
);

SearchInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired
};

export default SearchInput;
