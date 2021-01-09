import React from 'react';
import './customHeader.scss';

interface ICustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<ICustomHeaderProps> = ({ title }) => {
  return (
    <div className="customHeader__headerContainer">
      <div className="customHeader__title">{title}</div>
      <div className="customHeader__underline" />
    </div>
  );
};

export default CustomHeader;
