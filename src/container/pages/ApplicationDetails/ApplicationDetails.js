/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { Spin, Row, Col, Table } from 'antd'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { ContainerStyle, ApplicationDetailsWrapper, MainStyle } from './Style'
import { DataService } from '../../../config/dataService/dataService'
import { Button } from '../../../components/buttons/buttons'
import ReissueModal from '../../../components/modal/ReissueModal'
import SubmitModal from '../../../components/modal/SubmitModal'
import { RightBlockStyle } from '../style'
import PoweredBy from '../Landing/PowerdBy'

// const { TabPane } = Tabs;
export default function ApplicationDetails() {
  const { t } = useTranslation()
  const location = useLocation()
  const [details, setDetails] = useState({})
  const [paydetails, setPaydetails] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [isResident, setIsResident] = useState('Buy Resident Card');
  const [paymentType, setPaymentType] = useState('bitcoin')
  const [invoiceCreatable, setInvoiceCreatable] = useState(false)
  const [isReissue, setIsReissue] = useState(false)
  const [reissueInvoice, setReissueInvoice] = useState()
  const [loading, setLoading] = useState(true)
  const [countryName, setCountryName] = useState('')
  // setReissueInvoice();

  const getUserPaymentDetails = () => {
    if (location && location?.state && location?.state?.isAdmin && location?.state?.uid) {
      DataService.get(`/userApplications/uid/${location?.state?.uid}`)
        .then((res) => {
          DataService.get(`/bitfinex/getUserPayments/${res.data.userId}`).then((resPayments) => {
            if (resPayments.data.length === 0) {
              setInvoiceCreatable(true)
            } else {
              setInvoiceCreatable(false)
            }
            const tempPay = []
            resPayments.data.map((item) => {
              tempPay.push({
                ...item,
                invoiceID: item?.invoiceData[0].invoiceID,
              })
              return tempPay
            })
            setPaydetails(tempPay)
          })
          setLoading(false)
          setDetails(res.data)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      DataService.get('/userApplications/user?sort=createdAt&order=-1&limit=1')
        .then((res) => {
          DataService.post('/bitfinex/getUserPayments').then((resPayments) => {
            if (resPayments.data.length === 0) {
              setInvoiceCreatable(true)
            } else {
              setInvoiceCreatable(false)
            }
            const tempPay = []
            resPayments.data.map((item) => {
              tempPay.push({
                ...item,
                invoiceID: item?.invoiceData[0].invoiceID,
              })
              return tempPay
            })
            setPaydetails(tempPay)
            setLoading(false)
            setDetails(res.data[0])
          })
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    setLoading(true)
    getUserPaymentDetails()
  }, [])

  useEffect(() => {
    if (details && details.resid_country) {
      DataService.get(`/country/code/${details.resid_country}`)
        .then((res) => {
          setCountryName(res.data.name)
        })
        .catch(() => {})
    }
  }, [details])

  const paymentColumns = [
    {
      title: 'Action',
      dataIndex: 'status',
      key: 'status',
      render: (item, record) =>
        item === 'EXPIRED' ? (
          <Button
            type="primary"
            onClick={() => {
              setIsReissue(true)
              setReissueInvoice(record)
            }}
          >
            Generate New Payment Link
          </Button>
        ) : (
          <a
            target="_blank"
            href={record?.invoiceData[0].invoiceURL}
            rel="noreferrer"
            style={{ display: record.status === 'COMPLETED' ? 'none' : 'block' }}
          >
            Payment Link
          </a>
        ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Payment Date',
      dataIndex: 't',
      key: 't',
      render: (item) => moment(item).format('MM-DD-YYYY | hh:mm:ss'),
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentType',
      key: 'paymentType',
    },
  ]

  const verifiedColumns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Document Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'File Name',
      dataIndex: 'filename',
      key: 'filename',
    },
    {
      title: 'Uploaded At',
      dataIndex: 'upload_at',
      key: 'upload_at',
      render: () => moment().format('MM-DD-YYYY | hh:mm:ss'),
    },
    {
      title: 'Active',
      dataIndex: 'active',
      key: 'active',
      render: (text) => (text ? 'Yes' : 'No'),
    },
  ]

  const filteredData = details?.documents?.filter((record) => {
    if (record.type === 'passport' || record.type === 'proof_of_res') {
      return record
    }
  })

  if (loading) {
    return (
      <div className="spin">
        <Spin />
      </div>
    )
  }

  return (
    <ContainerStyle>
      <MainStyle>
        <div className="left-container">
          <div className="left-main">
            <h1 className="left-heading">
              YOUR <br />
              {t('APPLICATION')} <br /> OVERVIEW
            </h1>
          </div>
        </div>
        <div className="right-container">
          <div className="right-main">
            <Row justify="center">
              <Col xxl={20} xl={20} md={22} sm={18} xs={24}>
                <RightBlockStyle>
                  <div className="main">
                    <div className="ninjadash-authentication-top">
                      <ApplicationDetailsWrapper>
                        <h5 className="heading5">General information</h5>
                        <div className="status-block">
                          <p>
                            Application Type:
                            <span className="individual">{details?.type_account}</span>
                          </p>
                          <p>
                            E-Mail:
                            <span className="individual" style={{ textTransform: 'none' }}>
                              {details?.email}
                            </span>
                          </p>
                        </div>
                        <div className="status-block">
                          <p>
                            Mobile Number:
                            <span className="individual">{details?.phone}</span>
                          </p>
                          <p>
                            Status:
                            <span>{details?.applicationStatus.toUpperCase() || 'N/A'}</span>
                          </p>
                        </div>
                        <div className="application-id">
                          Application ID: <span className="status-text">{details?.applicationId || 'N/A'}</span>
                        </div>
                        <h5 className="heading5">Payment Details</h5>
                        <Table
                          dataSource={paydetails}
                          columns={paymentColumns}
                          loading={loading}
                          className="table-responsive"
                          pagination={false}
                        />
                        {invoiceCreatable && (
                          <Button type="primary" onClick={() => setIsModalOpen(true)}>
                            {t('Submit Payment')}
                          </Button>
                        )}
                        <h5 className="heading5">Basic Details</h5>
                        <div className="status-block">
                          <p>
                            Building Name:
                            <span className="individual">{`${details?.resid_building_name}`}</span>
                          </p>
                          <p>
                            Street:
                            <span className="individual">{details?.resid_street}</span>
                          </p>
                        </div>
                        <div className="status-block">
                          <p>
                            ZIP Code:
                            <span className="individual">{details?.resid_zipcode}</span>
                          </p>
                          <p>
                            City:
                            <span className="individual">{details?.resid_city}</span>
                          </p>
                        </div>
                        <div className="status-block">
                          <p>
                            State:
                            <span className="individual">{details?.resid_state}</span>
                          </p>
                          <p>
                            Country:
                            <span className="individual">{countryName}</span>
                          </p>
                        </div>
                        <h5 className="heading5">Submitted Documents</h5>
                        <Table
                          className="table-responsive"
                          pagination={false}
                          dataSource={filteredData}
                          columns={verifiedColumns}
                          loading={loading}
                        />
                      </ApplicationDetailsWrapper>
                    </div>
                  </div>
                </RightBlockStyle>
              </Col>
            </Row>
          </div>
          <ReissueModal isReissue={isReissue} setIsReissue={setIsReissue} invoiceData={reissueInvoice} />
          <SubmitModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            paymentType={paymentType}
            setPaymentType={setPaymentType}
            details={details}
            getUserPaymentDetails={getUserPaymentDetails}
          />
        </div>
      </MainStyle>
      <div className="bottom" />
      <PoweredBy />
    </ContainerStyle>
  )
}
