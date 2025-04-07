import React from 'react';

const StaticComponent = React.memo(() => {
  console.log('StaticComponent rendered');
  return <p>I should not re-render on theme change</p>;
});

export default StaticComponent;
