import * as React from 'react';
import CardItem from 'components/Card/CardItem';

import './CardList.css';

const CardList: React.StatelessComponent<{}> = () => {
  return (
    <ul className="card-list">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </ul>
  );
};

export default CardList;
