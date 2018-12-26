import * as React from 'react';

import PageTemplate from 'components/Templates';
import TikiTakaContainer from 'containers/TikiTakaContainer';

const WritePage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <TikiTakaContainer />
    </PageTemplate>
  );
}

export default WritePage;
