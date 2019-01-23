import * as React from 'react';

import PageTemplate from 'components/Templates';
import QuillEditor from 'containers/QuillEditorContainer';

const QuillPage: React.StatelessComponent<{}> = () => {
  return (
    <PageTemplate>
      <QuillEditor />
    </PageTemplate>
  );
}

export default QuillPage;
