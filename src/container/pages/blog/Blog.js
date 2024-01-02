import React from 'react';
import { Row, Col } from 'antd';
import { BannerStyle } from './Style';
import BlogCard from '../../../components/cards/BlogCard';
import { Main } from '../../styled';
import cardData from '../../../demoData/sampleCards.json';

const { BlogCardData } = cardData;

function BlogOne() {
  return (
    <>
      <Main>
        <BannerStyle>
          <Row gutter={25} className="mt-sm-10">
            {BlogCardData.map((blog) => {
              return (
                <Col key={blog.id} xl={8} sm={12} xs={24}>
                  <BlogCard item={blog} />
                </Col>
              );
            })}
          </Row>
        </BannerStyle>
      </Main>
    </>
  );
}

export default BlogOne;
