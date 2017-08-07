import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import '../css/checkbox-wrapper.css';

const ChooseProblems = ({values, handleCheckbox, summary}) => {
  const {errors, likelyProblems, potentialProblems} = summary;
  return <CheckboxGroup className="checkbox-wrapper" name="problems" value={values} onChange={handleCheckbox}>
    <div className="checkbox">
      <Checkbox value="Error" id="checkbox-problem-1"/>
      <label htmlFor="checkbox-problem-1">Errors ({errors})</label>
    </div>
    <div className="checkbox">
      <Checkbox value="Likely Problem" id="checkbox-problem-2"/>
      <label htmlFor="checkbox-problem-2">Likely problems ({likelyProblems})</label>
    </div>
    <div className="checkbox">
      <Checkbox value="Potential Problem" id="checkbox-problem-3"/>
      <label htmlFor="checkbox-problem-3">Potential problems ({potentialProblems})</label>
    </div>
  </CheckboxGroup>;
};

export default ChooseProblems;
