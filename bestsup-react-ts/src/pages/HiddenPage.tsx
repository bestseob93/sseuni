import * as React from 'react';

import PageTemplate from 'components/Templates';
import HiddenContainer from 'containers/HiddenContainer';

const HomePage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <HiddenContainer />
    </PageTemplate>
  );
}

export default HomePage;
