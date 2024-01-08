// import UilFile from '@iconscout/react-unicons/icons/uil-file-alt';
// import { UilThumbsUp } from '@iconscout/react-unicons';
// import UilHeart from '@iconscout/react-unicons/icons/uil-heart-sign';
import propTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'

import { BlogCardStyleWrap } from './Style'
import BlogDetail1 from '../../static/img/blogs/blog-details/blog-detail-main-1.jpg'
import BlogDetail2 from '../../static/img/blogs/blog-details/blog-detail-main-2.jpg'
import BlogDetail3 from '../../static/img/blogs/blog-details/blog-detail-main-3.jpg'
import BlogDetail4 from '../../static/img/blogs/blog-details/blog-details-4-1.jpg'

function BlogCard({ item, theme }) {
  const image = [
    {
      id: 1,
      img: BlogDetail1,
    },
    {
      id: 2,
      img: BlogDetail2,
    },
    {
      id: 3,
      img: BlogDetail3,
    },
    {
      id: 4,
      img: BlogDetail4,
    },
  ]
  // const [isFav, setIsFav] = useState(item.isFavourite);
  // const [like, setLike] = useState(item.favouriteBy);
  // const [view, setView] = useState(item.viewedBy);

  // const handleLikeClick = () => {
  //   setIsFav(!isFav);
  //   setLike(isFav ? like - 1 : like + 1);
  // };

  // const handleViewClick = () => {
  //   setView((item.viewedBy += 1));
  // };

  // const intToString = (num) => {
  //   num = num.toString().replace(/[^0-9.]/g, '');
  //   if (num < 1000) {
  //     return num;
  //   }
  //   const si = [
  //     { v: 1e3, s: 'K' },
  //     { v: 1e6, s: 'M' },
  //     { v: 1e9, s: 'B' },
  //     { v: 1e12, s: 'T' },
  //     { v: 1e15, s: 'P' },
  //     { v: 1e18, s: 'E' },
  //   ];
  //   // eslint-disable-next-line no-shadow
  //   const index = si.findIndex((item) => num >= item.v);
  //   return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s;
  // };

  return (
    <BlogCardStyleWrap>
      <figure className="ninjadash-blog">
        <div className="ninjadash-blog-thumb">
          <img className="ninjadash-blog__image" src={image[item.id - 1].img} alt="ninjadash Blog" />
        </div>
        <figcaption>
          {theme === 'style-1' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-1">
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">{item.postDate}</span>
            </div>
          ) : theme === 'style-2' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-2">
              <span className="ninjadash-blog-meta__single ninjadash-category-meta">{item.category}</span>
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">{item.postDate}</span>
            </div>
          ) : theme === 'style-3' ? (
            <div className="ninjadash-blog-meta ninjadash-blog-meta-theme-3">
              <span className="ninjadash-blog-meta__single ninjadash-date-meta">{item.postDate}</span>
              <span className="ninjadash-blog-meta__single ninjadash-category-meta">{item?.category}</span>
              <span className="ninjadash-blog-meta__single ninjadash-time-meta">6 mins read</span>
            </div>
          ) : (
            ''
          )}
          <h2 className="ninjadash-blog__title">
            <Tooltip placement="topLeft" title={item.title}>
              <Link to={`/blog-details/${item.title}`}>
                {item?.title.length > 15 ? `${item.title.substring(0, 25)}...` : item?.title}
              </Link>
            </Tooltip>
          </h2>
          <p className="ninjadash-blog__text">
            {item?.content.length > 15 ? `${item?.content.substring(0, 100)}...` : item?.content}
          </p>
          <div className="ninjadash-blog__bottom">
            <div className="ninjadash-blog__author">
              <img src={require('../../static/img/tether.png')} alt="ninjadash blog author" style={{ width: '20%' }} />
              <span className="ninjadash-blog__author-name">{item?.author}</span>
            </div>

            {/* <ul className="ninjadash-blog__meta">
              <li className="ninjadash-blog__meta--item">
                eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <span className="like" onClick={handleLikeClick}>
                  <UilThumbsUp color={isFav ? '#53AE94' : ''} />
                  <span>{intToString(like)}</span>
                </span>
              </li>
              <li className="ninjadash-blog__meta--item">
                <span className="view">
                  <UilFile />
                  <span>{intToString(view)}</span>
                </span>
              </li>
            </ul> */}
          </div>
        </figcaption>
      </figure>
    </BlogCardStyleWrap>
  )
}

BlogCard.propTypes = {
  item: propTypes.object,
  theme: propTypes.string,
}

BlogCard.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    category: 'Web Development',
    img: '1.png',
    author: 'Machel Bold',
    authorImg: '1.png',
    postDate: '15 March 2021',
    favouriteBy: '15k',
    viewedBy: '20k',
    isFavourit: false,
  },
  theme: 'style-2',
}

export default BlogCard
