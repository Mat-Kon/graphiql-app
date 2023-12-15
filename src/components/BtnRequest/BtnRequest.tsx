import React from 'react';

interface Props {
  name: string;
  className: string;
}

const BtnRequest: React.FC<Props> = ({ name, className }) => {
  return <button className={className}>{name}</button>;
};

export default BtnRequest;
