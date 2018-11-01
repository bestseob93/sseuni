import * as React  from 'react';

import './PageTemplate.css';

interface IProps {
  children: React.ReactNode,
};

const PageTemplate: React.StatelessComponent<IProps> = ({ children }) => {
  return (
    <div className="page-tempalte">
      {children}
    </div>
  );
};

export default PageTemplate;
