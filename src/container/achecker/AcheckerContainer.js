import React from 'react';
import ListItem from '../../component/ListItem';
import GeneralInformation from '../../component/GeneralInformation';

const AcheckerContainer = ({ summary, results, values }) => {
  console.log(values);
  return <div>
    <GeneralInformation summary={summary}/>
    <ListItem results={results} values={values}/>
  </div>
};

export default AcheckerContainer;


