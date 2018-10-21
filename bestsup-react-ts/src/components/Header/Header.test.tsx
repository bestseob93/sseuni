import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';

it('헤더 렌더 성공', () => {
  const header = document.createElement('header');
  ReactDOM.render(<Header />, header);
  ReactDOM.unmountComponentAtNode(header);
});
