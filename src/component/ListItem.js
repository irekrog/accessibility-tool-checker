import React from 'react';

import '../css/list-item.css';

const ERROR = 'Error',
      POTENTIAL_PROBLEM = 'Potential Problem',
      LIKELY_PROBLEM = 'Likely Problem';

const ListItem = ({ results, values }) => {
  console.log(results);
  console.log(values);
  const listItem = results.filter(item => {
    return (
      (item.resultType === ERROR && values.includes(ERROR)) ||
      (item.resultType === POTENTIAL_PROBLEM && values.includes(POTENTIAL_PROBLEM)) ||
      (item.resultType === LIKELY_PROBLEM && values.includes(LIKELY_PROBLEM))
    )
  }).map((item, index) => {
    return <li key={index} className={item.resultType === 'Error' ? 'red' : 'yellow'}>
        <pre>
          <code>{`Line ${item.lineNum}:Column ${item.columnNum}`}</code>
          <br/>
          <code>{item.errorSourceCode}</code>
        </pre>
      <p dangerouslySetInnerHTML={{__html: item.repair}}/>
      <p dangerouslySetInnerHTML={{__html: item.decisionFail}}/>
      <a href={item.errorMsg.url} target="_blank" rel="noopener">{item.errorMsg.url}</a>
    </li>
  });

  return <ul className="list-item">{listItem}</ul>
};

export default ListItem;
