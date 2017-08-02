import React from 'react';

const HtmlSource = ({sourceHtml}) => {
  return <div>
    <pre>
      <code>{sourceHtml}</code>
    </pre>
  </div>
};

export default HtmlSource;
