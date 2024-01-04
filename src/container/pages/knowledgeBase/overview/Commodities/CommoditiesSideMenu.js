/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useLayoutEffect, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import UilTimes from '@iconscout/react-unicons/icons/uil-times'
import UilAngleUp from '@iconscout/react-unicons/icons/uil-angle-up'
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down'
import UilAlignLeft from '@iconscout/react-unicons/icons/uil-align-left'
import UilAlignRight from '@iconscout/react-unicons/icons/uil-align-right'
import CommoditiesKnowledgeDetails from './CommoditiesKnowledgeDetails'
import GeneralKnowledgeTop from '../GeneralKnowledgeTop'
import { KnowledgebaseArticleWrap, SingleKnowledgeContent, SidebarNavWrap } from '../../style'
import { Button } from '../../../../../components/buttons/buttons'
import { Main } from '../../../../styled'
// import KnowledgeBaseTop from '../Knowledgebase/knowledgeTop';
import productsDetails from '../../../../../demoData/products-article.json'

function StablecoinSideMenu () {
  const [state, setState] = useState({
    responsive: 0,
    collapsed: false
  })
  const [data, setData] = useState()
  const [open, setOpen] = useState('menu1')
  const { responsive, collapsed } = state
  const { id } = useParams()

  useLayoutEffect(() => {
    function updateSize () {
      const width = window.innerWidth
      setState({ responsive: width })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const toggleCollapsed = () => {
    setState({
      ...state,
      collapsed: !collapsed
    })
  }

  const filterData = () => {
    const [result] = productsDetails.filter((e) => e.keyName === 'commodities')
    setData(result)
    // eslint-disable-next-line array-callback-return
    result.category.map((event, i) => {
      if (event.subCategoryName.includes(id)) {
        setOpen(`menu${i + 1}`)
      }
    })
  }

  useEffect(() => {
    filterData()
  }, [])

  const path = 'commodities-details'
  return (
    <>
      <Main>
        <GeneralKnowledgeTop />
        <KnowledgebaseArticleWrap>
          <div className="knowledgebase-article-container">
            <div className="ninjadash-paginaion">
              <ul>
                <li>
                  <Link className="active" to="/knowledgebase/stablecoin">
                    Doc Home
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Switch between accounts
                  </Link>
                </li>
                <li>
                  <Link className="active" to="#">
                    Introduction to Stablecoin
                  </Link>
                </li>
                <li>
                  <span>Stablecoin</span>
                </li>
              </ul>
              {responsive <= 991 && (
                <Button type="primary" className="knowledge-sidebar-trigger" onClick={toggleCollapsed}>
                  {collapsed ? <UilAlignLeft /> : <UilAlignRight />}
                </Button>
              )}
            </div>
            <SingleKnowledgeContent>
              {responsive > 991
                ? (
                <SidebarNavWrap>
                  <div className="knowledge-sidebar">
                    <h4 className="knowledge-sidebar__title">{data?.productName}</h4>
                    <ul>
                      {data &&
                        data.category.map((e, i) => {
                          return (
                            <li key={i}>
                              <Link
                                to={`/${path}/${e?.subCategoryName[0]}`}
                                onClick={() => setOpen(`menu${i + 1}`)}
                                className={open === `menu${i + 1}` ? 'active' : ''}
                              >
                                {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                                <span className="menu-text">{e.categoryName}</span>
                              </Link>
                              <ul className={open === `menu${i + 1}` ? 'submenu show' : 'submenu'}>
                                {e.subCategoryName.map((sub, key2) => {
                                  return (
                                    <li key={key2}>
                                      <Link to={`/${path}/${sub}`} className={id === sub ? 'active' : ''}>
                                        {sub}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                </SidebarNavWrap>
                  )
                : (
                <div className={collapsed ? 'knowledge-sidebar-wrap show' : 'knowledge-sidebar-wrap hide'}>
                  <SidebarNavWrap>
                    <div className="knowledge-sidebar">
                      <h4 className="knowledge-sidebar__title">
                        Stablecoin
                        <Button type="link" className="trigger-close" onClick={toggleCollapsed}>
                          <UilTimes />
                        </Button>
                      </h4>
                      <ul>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu1')} className={open === 'menu1' ? 'active' : ''}>
                            {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                            <span className="menu-text">Introduction to Stablecoin</span>
                          </Link>
                          <ul className={open === 'menu1' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#" className="active">
                                Switch between accounts
                              </Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu2')} className={open === 'menu2' ? 'active' : ''}>
                            {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                            <span className="menu-text">
                              Productivity tools for your Plugin admin & change password
                            </span>
                          </Link>
                          <ul className={open === 'menu2' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                            <li>
                              <Link to="#">Understand your actions in lorem</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu6')} className={open === 'menu6' ? 'active' : ''}>
                            {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                            <span className="menu-text">Profile Settings</span>
                          </Link>
                          <ul className={open === 'menu6' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu7')} className={open === 'menu7' ? 'active' : ''}>
                            {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                            <span className="menu-text">Listings Management</span>
                          </Link>
                          <ul className={open === 'menu7' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" onClick={() => setOpen('menu8')} className={open === 'menu8' ? 'active' : ''}>
                            {open === 'menu1' ? <UilAngleDown /> : <UilAngleUp />}
                            <span className="menu-text">Miscellaneous</span>
                          </Link>
                          <ul className={open === 'menu8' ? 'submenu show' : 'submenu'}>
                            <li>
                              <Link to="#">Switch between accounts</Link>
                            </li>
                            <li>
                              <Link to="#">Installing vendor marketplace lorem vendor marketplace </Link>
                            </li>
                            <li>
                              <Link to="#">Stop getting emails from lorem</Link>
                            </li>
                            <li>
                              <Link to="#">Threads to organize discussions</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </SidebarNavWrap>
                </div>
                  )}

              <CommoditiesKnowledgeDetails title={id} />
            </SingleKnowledgeContent>
          </div>
          <span
            role="button"
            tabIndex="0"
            onKeyPress={() => {}}
            className={collapsed ? 'sidebar-shade show' : 'sidebar-shade'}
            onClick={toggleCollapsed}
          />
        </KnowledgebaseArticleWrap>
      </Main>
    </>
  )
}

export default StablecoinSideMenu
