import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const DynamicComponent = () => {
  const { theme } = useContext(ThemeContext);
  return <p>The theme is: {theme}</p>;
};

export default DynamicComponent;
