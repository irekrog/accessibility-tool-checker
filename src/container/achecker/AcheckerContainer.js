import React from 'react';
import ListItemAchecker from '../../component/ListItemAchecker';
import GeneralInformation from '../../component/GeneralInformation';
import ChooseProblems from '../../component/ChooseProblems';

const AcheckerContainer = ({ summary, results, values, tools, handleCheckbox }) => {
  if (tools.includes('achecker')) {
    return <div>
      <GeneralInformation summary={summary}/>
      <ChooseProblems handleCheckbox={handleCheckbox} values={values} />
      <ListItemAchecker results={results} values={values}/>
    </div>
  }
  else {
    return null;
  }

};

export default AcheckerContainer;


