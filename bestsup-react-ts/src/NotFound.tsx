import * as React from 'react';
import './NotFound.css';

const NotFound: React.StatelessComponent<{}> = () => {
  return (
    <section className="not-found">
      <article className="desc">
        <h1>404</h1>
        <p>ERROR</p>
      </article>
      <article>
        <img src="http://i62.tinypic.com/vovg1x.png" alt="Funny Face"/>
      </article>
  </section>
  );
}

export default NotFound;
