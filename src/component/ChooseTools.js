import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import '../css/checkbox-wrapper.css';

const ChooseTools = ({ values, handleCheckboxTools }) => {
  console.log(values);
  return <CheckboxGroup className="checkbox-wrapper" name="tools" value={values} onChange={handleCheckboxTools}>
    <label><Checkbox value="achecker"/>achecker</label>
    <label><Checkbox value="pa11y"/>pa11y</label>
  </CheckboxGroup>
};

export default ChooseTools;

