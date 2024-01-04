import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import { ArticleTabContentWrap } from '../style'
import productsDetails from '../../../../demoData/products-article.json'

function ArticleCommodities () {
  const [data, setData] = useState({})
  const filterData = () => {
    const [result] = productsDetails.filter((e) => e.keyName === 'commodities')
    setData(result)
  }
  useEffect(() => {
    filterData()
  }, [])
  const path = 'commodities-details'
  return (
    <ArticleTabContentWrap>
      <div className="ninjadash-article-tab-content">
        <Row>
          {data &&
            data.category?.map((e, key) => {
              return (
                <Col md={8} sm={12} xs={24} key={key}>
                  <div className="ninjadash-article-tab-signle">
                    <h2 className="ninjadash-article-tab-signle__title">{e.categoryName}</h2>
                    <ul className="ninjadash-article-tab-signle__list">
                      {e.subCategoryName.map((s, key2) => {
                        return (
                          <li key={key2}>
                            <NavLink to={`/${path}/${s}`}>{s}</NavLink>
                          </li>
                        )
                      })}
                    </ul>
                    <Link to={`/${path}/${e?.subCategoryName[0]}`} className="btn-link">
                      See more <ArrowRightOutlined />
                    </Link>
                  </div>
                </Col>
              )
            })}
        </Row>
      </div>
    </ArticleTabContentWrap>
  )
}

export default ArticleCommodities
