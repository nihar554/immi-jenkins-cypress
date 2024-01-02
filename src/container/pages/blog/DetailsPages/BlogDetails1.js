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

function BlogDetails1({ data }) {
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
                    src={require(`../../../../static/img/blogs/blog-details/blog-detail-main-1.jpg`)}
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
                      Tokenization-as-a-Service (TaaS) is a revolutionary concept that holds the potential to reshape
                      the financial landscape. Designed to meet the needs of financial institutions, nation states, and
                      stablecoin issuers, TaaS offers a comprehensive suite of services to facilitate the tokenization
                      of assets. This approach enables a multitude of potential use cases, ranging from dollar-pegged
                      stable coins to gold-pegged and other asset backed tokens.
                    </p>
                    <h2>What is Tokenization-as-a-Service?</h2>
                    <p>
                    Tether offers Tokenization-as-a-Service (TaaS), a financial innovation that allows
                      organizations to harness the power of blockchain technology to tokenize assets and commodities.
                      Designed with the specific needs of financial institutions, nation states, and stable coin issuers
                      in mind, TaaS offers a range of services to facilitate asset tokenization:
                    </p>
                    <p>
                      Asset Representation: TaaS enables organizations to create digital tokens on the blockchain
                      representing real-world assets. This enables token development that adheres to regulatory
                      requirements, ensuring compliance and trust.
                    </p>

                    <p>
                      White Label Solution: TaaS provides a white-label solution, where the client&apos;s branding takes
                      center stage. Users interact with the client&apos;s platform, ensuring a seamless experience for
                      the client&apos;s brand
                    </p>

                    <p>
                      Blockchain Technology: Leveraging blockchain technology, TaaS is designed with a view to enable
                      security, transparency, and immutability of tokenized assets.
                    </p>

                    <p>
                      Regulatory Compliance: The Tether TaaS platform complies with relevant financial regulations,
                      within the framework of the jurisdictions it operates in.
                    </p>

                    <h2>Benefits of Tokenization</h2>
                    <p>Tokenization can offer advantages to issuers and users.</p>
                    <p>
                      Asset Liquidity: Tokenization enables traditionally illiquid assets into easily tradable digital
                      tokens, unlocking liquidity and diversification opportunities.
                    </p>
                    <p>
                      Fractional Ownership: Tokenization opens the possibility that assets can be divisible into smaller
                      units, broadening access for a wider range of investors.
                    </p>
                    <p>
                      Efficiency: Blockchain technology can be used to streamline administrative processes, reducing
                      costs and improving operational efficiency.
                    </p>
                    <p>
                      Global Accessibility: Tokenized assets are accessible to investors worldwide, eliminating
                      geographical barriers and expanding market opportunities.
                    </p>
                    <p>
                      Reduced Middlemen: Tokenization reduces the need for intermediaries, cutting fees and enhancing
                      transparency in the investment process.
                    </p>

                    <h2>About Tether</h2>
                    <p>
                      Tether is the oldest, largest and most-trusted issuer of stable coins, with over $83 billion AUM.
                      The company was founded by a group of Bitcoin enthusiasts and early adopters, passionate about
                      facilitating the use of fiat currencies in a digital manner. In 2014, the company launched its
                      blockchain-enabled platform aimed at disrupting the conventional financial system with a more
                      modern approach to money.
                    </p>
                    <p>
                      Tokenization-as-a-Service by Tether is a pivotal innovation that empowers financial institutions,
                      nation states, and stable coin issuers to tap into the transformative potential of blockchain
                      technology. Through asset tokenization, TaaS offers liquidity, efficiency, and global
                      accessibility. With its white-label solution, it ensures a personalized experience for users.
                    </p>
                  </div>
                  <ul className="ninjadash-category-list">
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Tether</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Tokenization</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Design</Link>
                    </li>
                    <li className="ninjadash-category-list__item">
                      <Link to="#">Prototype</Link>
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

BlogDetails1.propTypes = {
  data: propTypes.object,
};

export default BlogDetails1;
