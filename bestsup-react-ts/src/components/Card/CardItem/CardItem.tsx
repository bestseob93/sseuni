import * as React from 'react';
import { Link } from 'react-router-dom';
import { IBlogEntity } from 'models';
import { convertedDate } from 'helpers/converTo';
import './CardItem.css';


const CardItem: React.StatelessComponent<IBlogEntity> = ({
  id,
  title,
  previewContent,
  content,
  attachment,
  createdAt,
}) => {
  const replaceToUnderbar = (str?: string): string => {
    if (!str) {
      return '';
    }
    return encodeURIComponent(str).replace(/%20/gi, '_');
  }
  return (
    <li className="card__item">
      <article className="post">
        <div className="post__attribution">
          <a href="https://www.facebook.com/peaceSnap" target="_blank">
            <div className="post__author">
              <img
                alt="avatar"
                className="post__avatar"
                src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p200x200/17862834_1258688320851648_3905539345754178613_n.jpg?_nc_cat=109&_nc_ht=scontent-icn1-1.xx&oh=7b9544e9859fc7b76bde84baad076137&oe=5C878732"
              />
            </div>
            <div className="author__name">
              <span>bestsup93</span>
            </div>
          </a> 
          <div className="post__share_button">
            Share
          </div>
        </div>
        <Link to={`/post/${replaceToUnderbar(title)}-${id}`}>
          <div className="post__thumbnail_wrap">
            <img
              alt="image"
              className="post__thumbnail"
              src={attachment}
            />
          </div>
          <h1 className="post__title">{title}</h1>
          <p className="post__date">{convertedDate(createdAt)}</p>
          <p className="post__preview">
            {previewContent}
          </p>
        </Link>
      </article>
    </li>
  );
};

export default CardItem;
