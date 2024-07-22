import * as React from 'react';

interface ContainerProps {
  theme: string;
}

const component: React.FC<ContainerProps> = (props) => {
  return (
    <div>
      <h1>Oh boy a component</h1>
    </div>
  );
};

export default component;
