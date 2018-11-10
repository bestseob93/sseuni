import * as React from 'react';

import './CardItem.css';

interface ICardItemProps {
  title?: string,
  content?: string,
  attachment?: string,
  createdAt?: number,
}

const CardItem: React.StatelessComponent<ICardItemProps> = ({
  title,
  content,
  attachment,
  createdAt,
}) => {
  console.log(title);
  console.log(attachment);
  return (
    <li className="card-item">
      <article className="post">
        <div className="post-attribution">
          <div className="author-avatar">
            <img
              alt="avatar"
              className="img-avatar"
              src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p200x200/17862834_1258688320851648_3905539345754178613_n.jpg?_nc_cat=109&_nc_ht=scontent-icn1-1.xx&oh=7b9544e9859fc7b76bde84baad076137&oe=5C878732"
            />
          </div>
          <div className="author-name">
            <span>bestsup93</span>
          </div>
          <div className="post-share">
            Share
          </div>
        </div>
        <div className="post-thumb-wrap">
          <img 
            alt="image"
            className="img-thumb"
            src={attachment}
          />
        </div>
        <h1 className="post-title">{title}</h1>
        <p className="post-date">{createdAt}</p>
        <p className="post-body">
          {content}
        </p>
      </article>
    </li>
  );
};

export default CardItem;
