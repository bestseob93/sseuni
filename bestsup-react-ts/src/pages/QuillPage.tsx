import * as React from 'react';

import PageTemplate from 'components/Templates';
import QuillContainer from 'containers/QuillContainer';

const QuillPage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <QuillContainer />
    </PageTemplate>
  );
}

export default QuillPage;
