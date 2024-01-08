import { useState } from 'react'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f'
import UilLinkh from '@iconscout/react-unicons/icons/uil-link-h'
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter'
import { Col, Row, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share'
import propTypes from 'prop-types'
import { BlogDetailsStyle } from '../Style'
import { Main } from '../../../styled'

// const { BlogCardData } = cardData;

function BlogDetails3({ data }) {
  console.log('data', data)
  const currentUrl = 'https://www.google.com/'

  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(currentUrl)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <>
      <Main>
        <Row justify="center">
          <Col lg={20}>
            <BlogDetailsStyle>
              <div className="ninjadash-blog-details">
                <div className="ninjadash-blog-featured-img">
                  <img
                    src={require('../../../../static/img/blogs/blog-details/blog-detail-main-3.jpg')}
                    alt="ninjadash Blog"
                    style={{ height: '30vw' }}
                  />
                </div>
                <div className="ninjadash-blog-content-box">
                  <div className="ninjadash-blog-content">
                    <h1 className="ninjadash-blog-title">{data?.title}</h1>
                    <ul className="ninjadash-blog-meta">
                      <li className="ninjadash-blog-meta__author">
                        <img src={require('../../../../static/img/tether.png')} alt="ninjadash blog author" />
                        <span className="ninjadash-blog-authorname">{data?.author}</span>
                      </li>
                      <li className="ninjadash-blog-meta__date">{data?.postDate}</li>
                      <li className="ninjadash-blog-meta__category">
                        <Link to="#">{data?.category}</Link>
                      </li>
                      <li className="ninjadash-blog-meta__read-time">6 mins read</li>
                    </ul>
                    <p>
                      Larry Fink, CEO of BlackRock recently said that &quot;The next generation for markets, the next
                      generation for securities, will be tokenization of securities.&quot;
                    </p>
                    <p>
                      Tether now offers Tokenization-as-a-service (TaaS), a financial innovation that allows
                      organizations to harness the power of blockchain technology to tokenize assets and commodities.
                      These digital assets are tethered to the value of tangible commodities such as gold, oil, or even
                      real estate.
                    </p>

                    <h2>Why would this be of interest to financial institutions? </h2>

                    <h3>Intrinsic Value</h3>
                    <p>
                      Commodity-backed tokens derive their value from tangible assets, ensuring that there is real-world
                      value supporting them. This intrinsic value adds a layer of security and trust, which is often
                      missing in purely digital cryptocurrencies.
                    </p>

                    <h3>Diversification</h3>
                    <p>
                      Investors can use commodity-backed tokens to diversify their portfolios. They provide exposure to
                      a range of commodities without the need to physically hold or manage these assets. This
                      diversification can help reduce risk and optimize investment strategies.
                    </p>

                    <h3>Liquidity</h3>
                    <p>
                      Commodity-backed tokens are highly liquid assets. They can be easily traded on various crypto
                      currency exchanges, providing investors with the flexibility to buy or sell at any time, enhancing
                      market accessibility, and improving price discovery.
                    </p>

                    <h3>Transparency</h3>
                    <p>
                      Blockchain technology ensures transparency in the issuance and management of commodity-backed
                      tokens. Transactions are recorded on an immutable ledger, allowing anyone to verify the
                      authenticity and ownership of these tokens. This transparency builds trust among users.
                    </p>

                    <h3>Accessibility</h3>
                    <p>
                      Commodity-backed tokens democratize access to traditional commodities. Individuals who may not
                      have had the means to invest in gold, for example, can now purchase fractions of gold-backed
                      tokens, enabling broader participation in commodity markets.
                    </p>

                    <h3>Reduced Costs</h3>
                    <p>
                      Traditional commodity trading can involve significant fees, storage costs, and administrative
                      overhead. Commodity-backed tokens eliminate many of these expenses, making it a cost-effective
                      option for both issuers and investors.
                    </p>

                    <h3>Borderless Transactions</h3>
                    <p>
                      Blockchain technology allows for frictionless cross-border transactions. Whether youre buying,
                      selling, or transferring commodity-backed tokens, you can do so seamlessly without the need for
                      intermediaries, currency conversions, or international banking hassles.
                    </p>

                    <h3>Regulatory Compliance</h3>
                    <p>
                      Tether strictly adheres to regulations in all applicable jurisdictions. This ensures that the
                      tokens are compliant with relevant financial regulations, providing a safe and regulated
                      investment avenue.
                    </p>

                    <p>
                      Commodity-backed tokens represent a bridge between the tangible world of commodities and the
                      digital realm of blockchain technology. They offer intrinsic value, diversification, liquidity,
                      transparency, and accessibility. These tokens are a powerful financial tool that caters to the
                      needs of both investors and issuers, revolutionizing the way we invest in and trade commodities.
                    </p>
                  </div>
                  <ul className="ninjadash-category-list">
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Tokenized</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Commodities</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Institutions</Link>
                    </li>
                  </ul>
                  <ul className="ninjadash-social-links">
                    <li>Share this article:</li>
                    <li>
                      <FacebookShareButton url={currentUrl}>
                        <Link to="#" className="ninjadash-facebook">
                          <UilFacebook />
                          <span>Share</span>
                        </Link>
                      </FacebookShareButton>
                    </li>
                    <li>
                      <TwitterShareButton url={currentUrl}>
                        <Link to="#" className="ninjadash-twitter">
                          <UilTwitter />
                          <span>Tweet</span>
                        </Link>
                      </TwitterShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton url={currentUrl} title={data.title || ''}>
                        <Link to="#" className="ninjadash-linkedin">
                          <UilLinkedin />
                          <span>Share</span>
                        </Link>
                      </LinkedinShareButton>
                    </li>
                    <li>
                      <Tooltip placement="right" title={isCopied ? 'Copied' : 'Copy'}>
                        <Link to="#" onClick={handleCopy} className="ninjadash-copy">
                          <UilLinkh />
                          <span>Copy</span>
                        </Link>
                      </Tooltip>
                    </li>
                  </ul>
                  {/* <div className="ninjadash-blog-author-box">
                    <div className="ninjadash-blog-author-img">
                      <img src={require(`../../../../static/img/users/1.png`)} alt="ninjadash Blog" />
                    </div>
                    <div className="ninjadash-blog-author-info">
                      <span>Written By</span>
                      <span className="ninjadash-blog-author-name">Charli Day</span>
                      <p>
                        Charli Day is a British writer and social media manager specializing in dynamic branding,
                        campaign strategy and content engagement.{' '}
                      </p>
                    </div>
                  </div> */}
                  <div className="ninjadash-share-links show">
                    <span>Share</span>
                    <ul>
                      <li>
                        <FacebookShareButton url={currentUrl}>
                          <Link to="#" className="ninjadash-facebook">
                            <UilFacebook />
                          </Link>
                        </FacebookShareButton>
                      </li>
                      <li>
                        <TwitterShareButton url={currentUrl}>
                          <Link to="#" className="ninjadash-twitter">
                            <UilTwitter />
                          </Link>
                        </TwitterShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton url={currentUrl} title={data.title || ''}>
                          <Link to="#" className="ninjadash-linkedin">
                            <UilLinkedin />
                          </Link>
                        </LinkedinShareButton>
                      </li>
                      <li>
                        <Tooltip placement="left" title={isCopied ? 'Copied' : 'Copy'}>
                          <Link to="#" onClick={handleCopy} className="ninjadash-link">
                            <UilLinkh />
                          </Link>
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </BlogDetailsStyle>
          </Col>
        </Row>
      </Main>
    </>
  )
}

BlogDetails3.propTypes = {
  data: propTypes.object,
}

export default BlogDetails3
