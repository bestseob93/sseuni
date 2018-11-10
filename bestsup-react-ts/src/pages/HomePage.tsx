import * as React from 'react';

import PageTemplate from 'components/Templates';
import CardContainer from 'containers/CardContainer';

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <CardContainer />
    </PageTemplate>
  );
}

export default HomePage;
