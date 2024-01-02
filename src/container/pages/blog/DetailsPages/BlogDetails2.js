import { useState } from 'react';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilLinkh from '@iconscout/react-unicons/icons/uil-link-h';
import UilLinkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import { Col, Row, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import propTypes from 'prop-types';
import { BlogDetailsStyle } from '../Style';
import { Main } from '../../../styled';

// const { BlogCardData } = cardData;

function BlogDetails2({ data }) {
  console.log('data', data);

  const currentUrl = 'https://www.google.com/';

  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(currentUrl);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <Main>
        <Row justify="center">
          <Col lg={20}>
            <BlogDetailsStyle>
              <div className="ninjadash-blog-details">
                <div className="ninjadash-blog-featured-img">
                  <img
                    src={require(`../../../../static/img/blogs/blog-details/blog-detail-main-2.jpg`)}
                    alt="ninjadash Blog"
                    style={{ height: '30vw' }}
                  />
                </div>
                <div className="ninjadash-blog-content-box">
                  <div className="ninjadash-blog-content">
                    <h1 className="ninjadash-blog-title">{data?.title}?</h1>
                    <ul className="ninjadash-blog-meta">
                      <li className="ninjadash-blog-meta__author">
                        <img src={require(`../../../../static/img/tether.png`)} alt="ninjadash blog author" />
                        <span className="ninjadash-blog-authorname">{data?.author}</span>
                      </li>
                      <li className="ninjadash-blog-meta__date">{data?.postDate}</li>
                      <li className="ninjadash-blog-meta__category">
                        <Link to="#">{data?.category}</Link>
                      </li>
                      <li className="ninjadash-blog-meta__read-time">6 mins read</li>
                    </ul>
                    <p>
                      Stablecoins are tokenized assets on the blockchain that are pegged to the US dollar or other
                      national currency. These tokens provide a bridge between the crypto currency world and the
                      stability of traditional money, offering potential benefits for financial institutions, nation
                      states, and individuals alike.
                    </p>
                    <p>
                      The most popular and widely used stablecoin is US Dollar Tether, which has about 83 billion in
                      existence.
                    </p>
                    <h2>Individuals</h2>
                    <p>
                      Stablecoins offer potential advantages for individuals seeking stability and convenience in their
                      financial transactions:
                    </p>
                    <p>
                      Everyday Payments: Stablecoins serve as a reliable medium of exchange for everyday purchases and
                      transactions, offering the speed of blockchain technology without the price volatility.
                    </p>
                    <p>
                      Value Preservation: Individuals can use stable coins as a stable store of value to preserve their
                      wealth during market fluctuations, ensuring their financial security.
                    </p>
                    <p>
                      Remittances: Sending money across borders becomes more accessible and affordable with stablecoins,
                      providing individuals with a cost-effective alternative to traditional remittance services.
                    </p>

                    <h2>Financial Institutions</h2>
                    <p>
                      Institutions bear the responsibility of optimizing portfolios to maximize returns while minimizing
                      risk. Stablecoins can play a role in these endeavors.
                    </p>
                    <p>
                      Risk Mitigation: Stablecoins can provide a stable and reliable store of value within a portfolio,
                      allowing institutions to mitigate risk during periods of market volatility.
                    </p>
                    <p>
                      Liquidity Management: Financial institutions have the capability to move in and out of stablecoins
                      to manage liquidity efficiently, especially when navigating rapidly changing market conditions.
                    </p>
                    <p>
                      Cross-Border Investment: Stablecoins facilitate international investment by eliminating the need
                      for complex currency conversions and reducing transaction costs.
                    </p>

                    <h2>Nation States</h2>
                    <p>
                      Nation states have a crucial role in the stability and efficiency of their financial systems.
                      Stablecoins are one of the vehicles that may provide support to their financial infrastructure.
                      These have the potential to be used in several ways.
                    </p>
                    <p>
                      Economic Stability: Stablecoins can provide a more stable and reliable form of digital currency,
                      as opposed to more volatile cryptocurrencies. This can be utilized as part of a program to
                      contribute to economic stability within a country.
                    </p>
                    <p>
                      Financial Inclusion: These digital assets can be utilized as part of programs to increase
                      financial inclusion by providing citizens with access to secure and efficient digital payment
                      solutions, even in remote areas.
                    </p>
                    <p>
                      Government Operations: Nation states have the potential capability to leverage stablecoins for
                      various government operations. This may include welfare disbursements and tax collection, wit the
                      goals of streamlining processes and reducing administrative costs.
                    </p>

                    <h2>About Tether</h2>
                    <p>
                      Tether is the oldest, largest and most-trusted issue of stable coins, with over $83 billion AUM.
                      The company was founded by a group of Bitcoin enthusiasts and early adopters, passionate about
                      facilitating the use of fiat currencies in a digital manner. In 2014, the company launched its
                      blockchain-enabled platform aimed at disrupting the conventional financial system with a more
                      modern approach to money.
                    </p>
                  </div>
                  <ul className="ninjadash-category-list">
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Tether</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Stablecoin</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Tether</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Crypto</Link>
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
  );
}

BlogDetails2.propTypes = {
  data: propTypes.object,
};

export default BlogDetails2;
