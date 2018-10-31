import * as React from 'react';

import './CardItem.css';

const CardItem: React.StatelessComponent<{}> = () => {
  return (
    <li className="card-item">
      <article className="post">
        <div className="post-image">
          image
        </div>
        <h1 className="post-title">title</h1>
        <div>
          <span className="post-author">author</span><span className="post-date">date</span>
        </div>
      </article>
    </li>
  );
};

export default CardItem;
