import React from 'react';
import ListItemAchecker from '../../component/ListItemAchecker';
import ChooseProblems from '../../component/ChooseProblems';

const AcheckerContainer = ({ summary, results, values, tools, handleCheckbox }) => {
  if (tools.includes('achecker')) {
    return <div>
      <ChooseProblems handleCheckbox={handleCheckbox} values={values} summary={summary} />
      <ListItemAchecker results={results} values={values}/>
    </div>;
  } else {
    return null;
  }
};

export default AcheckerContainer;

