import * as React from 'react';

import PageTemplate from 'components/Templates';
import WritePostContainer from 'containers/WritePostContainer';

const WritePage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <WritePostContainer />
    </PageTemplate>
  );
}

export default WritePage;
