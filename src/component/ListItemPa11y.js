import React from 'react';

import '../css/list-item.css';

const ListItemPa11y = ({ pa11y }) => {
  const listItem = pa11y.map((item, index) => {
    return <li key={index} className={item.type === 'error' ? 'red' : 'yellow'}>
      <p><code>{item.context}</code></p>
      <p><code>{item.selector}</code></p>
      <p>{item.message}</p>
      <p>{item.code};</p>
    </li>;
  });

  return <ul className="list-item">
    {listItem}
  </ul>;
};

export default ListItemPa11y;
