import React, { useState } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { KnowledgebaseTopWrap } from '../../style'
import ProductData from '../../../../../demoData/products-article.json'

function KnowledgeBaseTop() {
  const navigate = useNavigate()

  const [state, setState] = useState({
    produts: 'All Products',
  })
  const handleProdutsOnchange = (value) => {
    setState((prevState) => {
      return { ...prevState, produts: value }
    })
    navigate(value)
  }

  // const handleProdutsSearchOnchange = (event) => {
  //   const { value } = event.target;
  //   setState((prevState) => {
  //     return { ...prevState, search: value };
  //   });
  // };

  const [searchQuery, setSearchQuery] = useState('')

  const handleProdutsSearch = () => {
    // if (state.produts !== 'All Products') {
    //   // eslint-disable-next-line no-import-assign
    //   ProductData = ProductData.filter((e) => e.keyName === state.produts);
    // }
    // Perform the search
    const result = ProductData.reduce((acc, item) => {
      if (acc) {
        // If a match is already found, keep the result and exit the loop.
        return acc
      }

      const queryLower = searchQuery.trim().toLowerCase()

      if (item.productName.toLowerCase().includes(queryLower)) {
        return { productName: item.productName }
      }
      const matchingCategory = item.category.find((cat) => {
        return cat.categoryName.toLowerCase().includes(queryLower)
      })

      if (matchingCategory) {
        return { categoryName: matchingCategory.categoryName, productName: item.productName }
      }
      const matchingSubCategory = item.category.reduce((subAcc, cat) => {
        if (subAcc) {
          return subAcc // If a match is already found, keep the result and exit the loop.
        }
        const subCategory = cat.subCategoryName.find((subCat) => subCat.toLowerCase().includes(queryLower))
        return subCategory ? { subCategoryName: subCategory, productName: item.productName } : null
      }, null)

      return matchingSubCategory
    }, null)

    // setSearchResults(result);
    console.log(result)
    if (result?.productName === 'Stablecoin' && result?.subCategoryName) {
      navigate(`/stablecoin-details/${result.subCategoryName}`)
    } else if (result?.productName === 'Commodities' && result?.subCategoryName) {
      navigate(`/commodities-details/${result.subCategoryName}`)
    }
  }

  return (
    <KnowledgebaseTopWrap>
      <div className="ninjadash-knowledgetop">
        <h2 className="ninjadash-knowledgetop__title">Hi, How can we help?</h2>
        <div className="ninjadash-knowledgetop__search--form">
          <Form name="login" layout="vertical">
            <div className="ninjadash-knowledgetop__formInner">
              <Form.Item>
                <Select defaultValue={state?.produts} name="produts" onChange={handleProdutsOnchange}>
                  <Select.Option value="stablecoin">Stablecoin</Select.Option>
                  <Select.Option value="commodities">Commodities</Select.Option>
                  <Select.Option value="senatus">Senatus</Select.Option>
                  <Select.Option value="assetissuance">Asset issuance</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="ninjadash-search-input">
                <Input
                  placeholder="Search anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <Button className="btn-search" onClick={handleProdutsSearch} type="primary" size="large">
                  Search
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="ninjadash-knowledgetop__popular--topics">
          <ul>
            <li>
              <span className="popular-topics-title">Popular topics:</span>
            </li>
            <li>
              <Link to="#">Message formatting</Link>
            </li>
            <li>
              <Link to="#">Notifications</Link>
            </li>
            <li>
              <Link to="#">Change password</Link>
            </li>
          </ul>
        </div>
      </div>
    </KnowledgebaseTopWrap>
  )
}

export default KnowledgeBaseTop
