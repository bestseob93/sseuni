import * as React from 'react';

import PageTemplate from 'components/Templates/PageTemplate';
import CardList from 'components/Card/CardList';

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <CardList />
    </PageTemplate>
  );
}

export default HomePage;
