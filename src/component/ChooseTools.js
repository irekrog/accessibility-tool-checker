import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import '../css/checkbox-wrapper.css';
import '../css/checkbox.css';

const ChooseTools = ({ values, handleCheckboxTools }) => (
  <CheckboxGroup className="checkbox-wrapper" name="tools" value={values} onChange={handleCheckboxTools}>
    <div className="checkbox">
      <Checkbox id="checkbox-tool-1" value="achecker"/>
      <label htmlFor="checkbox-tool-1">achecker</label>
    </div>
    <div className="checkbox">
      <Checkbox id="checkbox-tool-2" value="pa11y"/>
      <label htmlFor="checkbox-tool-2">pa11y</label>
    </div>

  </CheckboxGroup>
);

export default ChooseTools;

