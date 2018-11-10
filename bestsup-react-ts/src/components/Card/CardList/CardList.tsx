import * as React from 'react';
import CardItem from 'components/Card/CardItem';
import { BlogData } from 'ducks/blog.duck';
import { List } from 'immutable';

import './CardList.css';

interface ICardListProps {
  datas: List<BlogData>;
}

const CardList: React.StatelessComponent<ICardListProps> = ({ datas }) => {
  const cardItemList = datas.map(
    (data, index) => data ? (
      <CardItem
        key={index}
      />
    ) : null
  );
  return (
    <ul className="card-list">
      {cardItemList}
    </ul>
  );
};

export default CardList;
