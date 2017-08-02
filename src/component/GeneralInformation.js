import React from 'react';

import '../css/general-information.css';

const GeneralInformation = ({summary}) => {
  const { errors, likelyProblems, potentialProblems } = summary;
  return <div className="general-information-wrapper">
    <p>Errors: {errors}</p>
    <p>Likely problems: {likelyProblems}</p>
    <p>Potential problems: {potentialProblems}</p>
  </div>
};

export default GeneralInformation;
