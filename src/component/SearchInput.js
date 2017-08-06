import React from 'react';
import PropTypes from 'prop-types';

import '../css/search-input.css';

const SearchInput = props => {
 return <div className="input-wrapper">
    <input placeholder="Enter URL..." onChange={props.handleInput}/>
    <button disabled={!(props.values.length && props.correctLink)} onClick={props.sendRequest}>Check</button>
  </div>
};

SearchInput.propTypes = {
  values: PropTypes.array.isRequired,
  handleInput: PropTypes.func.isRequired,
  sendRequest: PropTypes.func.isRequired
};

export default SearchInput;
