import { Col, Row } from 'antd'
import { BlogDetailsStyle } from './Style'
import { Cards } from '../../../components/cards/frame/cards-frame'
import { Main } from '../../styled'

function Career () {
  return (
    <>
      <Main>
        <Row justify="center">
          <Col lg={20}>
            <BlogDetailsStyle>
              <Cards headless>
                <div className="ninjadash-blog-details">
                  <div className="ninjadash-blog-content-box">
                    <div className="ninjadash-blog-content">
                      <h1 className="ninjadash-blog-title">Career</h1>
                      <p>Welcome to Tether&apos; career page</p>
                      <p>We are looking for talented people to join our team.</p>
                      <p>
                        Over the last few years, stablecoins have promoted economic growth, reduced poverty, and
                        improved financial stability by transforming the way money moves. Tether is on a mission to help
                        institutions bring stablecoins and other assets to the blockchain to transform money as we know
                        it.
                      </p>
                      <p>
                        Tether offers a comprehensive suite of services to facilitate the tokenization of assets by
                        institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </Cards>
            </BlogDetailsStyle>
          </Col>
        </Row>
      </Main>
    </>
  )
}

export default Career
