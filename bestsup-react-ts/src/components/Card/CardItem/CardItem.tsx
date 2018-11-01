import * as React from 'react';

import './CardItem.css';

const CardItem: React.StatelessComponent<{}> = () => {
  return (
    <li className="card-item">
      <article className="post">
        <div className="post-attribution">
          <div className="author-avatar">
            <img className="img-avatar" />
          </div>
          <div className="author-name">
            <span>이환섭</span>
          </div>
        </div>
        <div className="post-thumb-wrap">
          <img 
            alt="image"
            className="img-thumb"
            src="https://cdn-images-1.medium.com/max/2000/1*ZARHKtn8NaeAAwUe2i9kWA.png"
          />
        </div>
        <h1 className="post-title">React Redux-Saga</h1>
        <div className="post-date">
          <p>2018-11-01</p>
        </div>
      </article>
    </li>
  );
};

export default CardItem;
