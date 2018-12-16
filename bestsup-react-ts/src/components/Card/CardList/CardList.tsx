import * as React from 'react';
import CardItem from 'components/Card/CardItem';
import { BlogData } from 'ducks/blog.duck';
import { List } from 'immutable';

import './CardList.css';

interface ICardListProps {
  datas: List<BlogData>;
}

const CardList: React.StatelessComponent<ICardListProps> = ({ datas }) => {
  console.log(datas);
  const cardItemList = datas.map(
    (data, index) => data ? (
      <CardItem
        key={index}
        title={data.title}
        previewContent={data.previewContent}
        content={data.content}
        attachment={data.attachment}
        createdAt={data.createdAt}
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
