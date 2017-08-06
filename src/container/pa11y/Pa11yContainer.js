import React from 'react';
import ListItemPa11y from '../../component/ListItemPa11y';

const Pa11yContainer  = ({ pa11y, tools }) => {
  if (tools.includes('pa11y')) {
    return <div>
      <ListItemPa11y pa11y={pa11y} />
    </div>
  }
  else {
    return null;
  }
};

export default Pa11yContainer;
