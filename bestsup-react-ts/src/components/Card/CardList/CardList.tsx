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
        title={data.get('title')}
        content={data.get('content')}
        attachment={data.get('attachment')}
        createdAt={data.get('createdAt')}
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
