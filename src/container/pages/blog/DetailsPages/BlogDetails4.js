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

function BlogDetails4 ({ data }) {
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
                    src={require('../../../../static/img/blogs/blog-details/blog-details-4-1.jpg')}
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
                      The world has been grappling with escalating geopolitical tensions, and recent developments have
                      intensified the level of uncertainty in global affairs. This has prompted investors to seek refuge
                      in safe-haven assets that can shield their wealth from the unpredictable fluctuations of financial
                      markets.
                    </p>
                    <p>
                      For centuries, gold has held its position as the ultimate safe-haven asset, drawing investors to
                      its lustrous embrace during times of economic turbulence. Its reputation as a hedge against
                      inflation, currency devaluation, and economic instability has made it a go-to choice for
                      preserving wealth. Consequently, the demand for gold typically surges during periods of
                      geopolitical uncertainty, with investors turning to this precious metal to diversify their
                      portfolios and mitigate risk.
                    </p>
                    <p>
                      Given the current state of heightened geopolitical tensions worldwide, it comes as no surprise
                      that investors are turning to gold as a protective shield against further turbulence. What even
                      more noteworthy is the substantial increase in gold investments by institutional players.
                    </p>

                    <h3>Central Banks Demonstrating Strong Appetite for Gold</h3>
                    <p>
                      Central banks have historically been the custodians of monetary stability and long-term wealth
                      preservation. Their consistent accumulation of gold reserves underscores their unwavering
                      confidence in gold ability to maintain its value over time.
                    </p>
                    <p>
                      As we look ahead, its evident that gold will continue to play a crucial role in the
                      diversification strategies of central banks, offering a solid foundation for their portfolios and
                      ensuring sustained financial stability.
                    </p>
                    <img
                      src={require('../../../../static/img/blogs/blog-details/blog-details-4-2.jpg')}
                      alt="ninjadash Blog"
                    />
                    <p>
                      Central banks interest in gold has been steadily growing in recent years, with 2022 marking a
                      historic high in gold purchases. Impressively, central banks have remained net buyers of gold for
                      13 consecutive years. This steadfast trend underscores the deep-seated trust central banks place
                      in gold as a dependable, long-term store of value.
                    </p>
                    <p>
                      In 2022, central banks significantly bolstered their gold holdings, more than doubling their total
                      purchases from the previous year. Yet again, gold`s appeal to central banks lies in its proven
                      capacity to act as a safeguard against inflation, currency fluctuations, and global uncertainties.
                    </p>

                    <h3>Beyond Central Banks: Nation States are Joining the Gold Rush</h3>
                    <p>
                      The world leading economies have long recognized gold strategic importance and have been amassing
                      reserves for decades. For instance, the United States boasts the largest gold reserves globally,
                      exceeding 8,100 metric tons, representing approximately 78% of its foreign reserves. Similarly,
                      Germany, Italy, and France rank among the top ten gold-holding nations worldwide.
                    </p>
                    <img
                      src={require('../../../../static/img/blogs/blog-details/blog-details-4-3.jpg')}
                      alt="ninjadash Blog"
                    />
                    <p>
                      China, a prominent global player, has been actively bolstering its gold reserves in recent years,
                      witnessing an increase from 1,054 metric tons in 2015 to 1,948 metric tons by 2021.
                    </p>
                    <p>
                      Russia, too, plays a significant role in the international gold market, having added 312 metric
                      tons to its reserves in 2021. This move elevated its total gold holdings to 2,299 metric tons,
                      securing its position as the fifth-largest gold-holding nation globally.
                    </p>
                    <p>
                      These major nations persistent efforts to augment their gold reserves underscore golds enduring
                      value as a strategic asset. Gold reputation as a store of value remains alluring, particularly in
                      times of economic ambiguity and geopolitical strains.
                    </p>
                    <p>
                      The attractiveness of gold to major nations is poised to grow even further in the years to come,
                      as countries recognize the benefits of holding a tangible asset that serves as a dependable and
                      enduring store of value.
                    </p>
                  </div>
                  <ul className="ninjadash-category-list">
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Central Banks</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Gold</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Institutional</Link>
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

BlogDetails4.propTypes = {
  data: propTypes.object
}

export default BlogDetails4
