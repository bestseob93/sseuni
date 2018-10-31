import * as React  from 'react';

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
