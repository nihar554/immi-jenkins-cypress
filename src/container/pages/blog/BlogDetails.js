import { Row } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogDetails1 from './DetailsPages/BlogDetails1'
import BlogDetails2 from './DetailsPages/BlogDetails2'
import BlogDetails3 from './DetailsPages/BlogDetails3'
import BlogDetails4 from './DetailsPages/BlogDetails4'
import { Main } from '../../styled'
import cardData from '../../../demoData/sampleCards.json'

const { BlogCardData } = cardData

function BlogDetails () {
  const { id } = useParams()
  console.log('id', id)
  const [data, setData] = useState({})
  const filterData = () => {
    const [result] = BlogCardData.filter((e) => e.title === id)
    console.log('result', result)
    setData(result)
  }
  useEffect(() => {
    filterData()
  }, [id])

  return (
    <>
      <Main>
        <Row justify="center">
          {data?.id === 1 ? <BlogDetails1 data={data} /> : null}
          {data?.id === 2 ? <BlogDetails2 data={data} /> : null}
          {data?.id === 3 ? <BlogDetails3 data={data} /> : null}
          {data?.id === 4 ? <BlogDetails4 data={data} /> : null}
        </Row>
      </Main>
    </>
  )
}

export default BlogDetails
