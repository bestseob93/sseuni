import * as React  from 'react';

import './PageTemplate.css';

interface IProps {
  children: React.ReactNode,
};

const PageTemplate: React.StatelessComponent<IProps> = ({ children }) => {
  return (
    <main className="container">
      {children}
    </main>
  );
};

export default PageTemplate;
