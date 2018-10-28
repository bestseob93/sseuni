import * as React from 'react';

import AboutContainer from 'containers/AboutContainer';

interface IAboutPageProps {
  scroller: number;
}

const AboutPage: React.StatelessComponent<IAboutPageProps> = ({ scroller }) => {
  return <AboutContainer scroller={scroller} />
}

export default AboutPage;
