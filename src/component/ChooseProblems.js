import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import '../css/checkbox-wrapper.css';

const ChooseProblems = (props) => {
  const { values, handleCheckbox } = props;
  return <CheckboxGroup className="checkbox-wrapper" name="problems" value={values} onChange={handleCheckbox}>
      <label><Checkbox value="Error"/>Errors</label>
      <label><Checkbox value="Likely Problem"/>Likely problems</label>
      <label><Checkbox value="Potential Problem"/>Potential problems</label>
    </CheckboxGroup>
};

export default ChooseProblems;

