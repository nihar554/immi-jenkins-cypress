/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-debugger */
/* eslint-disable react/self-closing-comp */
import React, { Suspense, useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row, Skeleton, Spin, Table, Tabs, Select, Input, Form, message } from 'antd';
import { FormOutlined, EyeOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { OverviewDataStyleWrap, ViewStatusWraper } from './Style';
import { PageHeader } from '../../../components/page-headers/page-headers';
import EditModal from '../../../components/modal/EditModal';
import { DataService } from '../../../config/dataService/dataService';
import { Cards } from '../../../components/cards/frame/cards-frame';
import OverviewCard from '../../../components/cards/OverviewCard';

const { TextArea } = Input;

export default function Admin() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allApplicationDetails, setAllApplicationDetails] = useState([]);
  const [totalApplications, setTotalApplications] = useState({});
  const [totalNewApplication, setTotalNewApplication] = useState({});
  const [totalPayment, setTotalPayment] = useState({});
  const [selelectedRow, setSelelectedRow] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [sortedInfo, setSortedInfo] = useState({});

  const handleEditPopup = (record) => {
    setIsModalOpen(true);
    DataService.get(`/userApplications/uid/${record.uid}`)
      .then((res) => {
        setLoading(false);
        setSelelectedRow({ ...res.data, _id: record._id });
      })
      .catch(() => {
        setLoading(false);
      });
    // setSelelectedRow(record);
  };

  const navigateToExplorer = () => {
    const link = `${process.env.REACT_APP_ADMIN_PANEL_URL}`;
    window.open(link, '_blank');
  };

  const fetchData = (endpoint, setData) => {
    setLoading(true);
    DataService.get(`/userApplications/${endpoint}`)
      .then(({ data: { docs, totalDocs } }) => {
        const modifiedDocs = docs.map((doc, index) => {
          return { ...doc, key: index.toString() };
        });
        setData({ ...allApplicationDetails, docs: modifiedDocs, totalDocs });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const fetchCouts = (endpoint, setData) => {
    setLoading(true);
    DataService.get(`/userApplications/${endpoint}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const getUsersApplicationDetails = () => {
    fetchData(`?sort=createdAt&order=-1&limit=${limit}&page=${pageNumber}`, setAllApplicationDetails);
  };

  // Fetch total applications
  const getTotalApplications = () => {
    fetchCouts('getTotalApplications', setTotalApplications);
  };

  // Fetch total payment
  const getTotalPayment = () => {
    fetchCouts('getTotalPayment', setTotalPayment);
  };

  // Fetch total new applications
  const getTotalNewApplication = () => {
    fetchCouts('getTotalNewApplication', setTotalNewApplication);
  };

  useEffect(() => {
    getTotalApplications();
    getTotalPayment();
    getTotalNewApplication();
  }, []);

  const [applicationPaymentVlaue, setApplicationPaymentVlaue] = useState();

  const handleApplicationPaymentChange = (value) => {
    setApplicationPaymentVlaue(value);
    fetchData(
      `?sort=createdAt&order=-1&limit=${limit}&page=${pageNumber}&paymentStatus=${value}`,
      setAllApplicationDetails,
    );
  };

  useEffect(() => {
    if (applicationPaymentVlaue) {
      handleApplicationPaymentChange(applicationPaymentVlaue);
    } else {
      getUsersApplicationDetails();
    }
  }, [pageNumber, limit]);

  const paginationConfig = {
    pageSize: limit,
    current: pageNumber,
    total: allApplicationDetails.totalDocs,
    showSizeChanger: true,
    onChange: (current, size) => {
      setPageNumber(current);
      setLimit(size);
    },
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a?.name?.localeCompare(b?.name),
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a?.email?.localeCompare(b?.email),
    },
    {
      title: 'Application Payment',
      dataIndex: 'applicationPaymentStatus',
      key: 'paymentStatus',
      render: (item, record) => <div>{record?.paymentStatus ? record?.paymentStatus : 'PENDING'}</div>,
      sorter: (a, b) => a?.paymentStatus?.localeCompare(b?.paymentStatus),
    },
    {
      title: 'KYC Application ID',
      dataIndex: 'applicationId',
      key: 'applicationId',
      sorter: (a, b) => a?.applicationId?.localeCompare(b?.applicationId),
      render: (item, record) => <div>{record?.applicationId ? record?.applicationId : 'NOT SUBMITTED'}</div>,
    },
    {
      title: 'KYC User',
      dataIndex: 'uid',
      key: 'uid',
      render: (uid) => (
        <div>
          {uid ? (
            <Link to={`${process.env.REACT_APP_KYC_USER_URL}${uid}`} target="_blank">
              {uid}
            </Link>
          ) : (
            <span>NOT SUBMITTED</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.uid - b.uid,
    },
    {
      title: 'KYC Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a?.name?.localeCompare(b?.name),
      render: (item, record) => <div>{record?.status ? record?.status.toUpperCase() : 'NOT SUBMITTED'}</div>,
    },
    {
      title: 'Passport Payment',
      dataIndex: 'status',
      key: 'status',
      render: (item, record) => (
        <div>
          {record?.paymentDetails?.paymentType &&
          record?.paymentDetails?.TransactionId &&
          record?.paymentDetails?.residentType ? (
            <Button
              onClick={() => {
                setIsViewModalOpen(true);
                setSelelectedRow(record);
              }}
            >
              View
            </Button>
          ) : (
            <span>{record?.passportPaymentStatus || 'PENDING'}</span>
          )}
        </div>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (item, record) => (
        <div>
          <FormOutlined
            className="icon"
            onClick={() => handleEditPopup(record)}
            style={{ display: record?.status === 'verified' ? 'inline' : 'none' }}
          />
          <EyeOutlined
            style={{
              paddingLeft: '10px',
            }}
            className="icon"
            onClick={() => navigate('/user-application-details', { state: { isAdmin: true, uid: record?.uid } })}
          />
        </div>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const SupportOverview = [
    {
      id: 1,
      type: 'primary',
      icon: 'users-alt.svg',
      label: 'Total Applications',
      total: totalApplications?.totalApplications,
      suffix: '',
      prefix: '',
      statusRate: totalApplications?.percentageIncrease,
      dataPeriod: 'Since last month',
    },
    {
      id: 2,
      type: 'success',
      icon: 'dollar-circle.svg',
      label: 'Total Payments in USD',
      total: totalPayment?.totalPayment,
      suffix: '',
      prefix: '',
      statusRate: totalPayment?.percentageIncrease,
      dataPeriod: 'Since last month',
    },
    {
      id: 3,
      type: 'warning',
      icon: 'user.svg',
      label: 'New Applications',
      total: totalNewApplication?.applicationsThisMonth,
      suffix: '',
      prefix: '',
      statusRate: totalNewApplication?.percentageIncrease,
      dataPeriod: 'Since last month',
    },
  ];

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Immigration',
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [sendEmailModelIsOpen, setSendEmailModelIsOpen] = useState(false);
  const [emailLoader, setEmailLoader] = useState(false);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    preserveSelectedRowKeys: true,
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [emailBody, setEmailBody] = useState({
    subject: '',
    message: '',
  });

  const updateEmailBody = (e) => {
    setEmailBody({ ...emailBody, [e.target.name]: e.target.value });
  };

  const notifyUsers = () => {
    setEmailBody({ subject: '', message: '' });
    setSendEmailModelIsOpen(true);
  };

  const sendNotificationToUsers = async () => {
    try {
      setEmailLoader(true);
      // const selectedData = selectedRowKeys.map((key) => allApplicationDetails?.docs[key]?.userId);
      DataService.post('/userApplications/sendNotifications', {
        userIds: selectedRowKeys,
        subject: emailBody.subject,
        message: emailBody.message,
      }).then((res) => {
        if (res) {
          setSelectedRowKeys([]);
          setEmailLoader(false);
          setSendEmailModelIsOpen(false);
          form.resetFields();
          message.success(t('admin_send_email_notification_message_success'));
        }
      });
    } catch (error) {
      console.log(error);
      message.error(t(error.response.data.errors.msg));
    }
  };

  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Immigration : Payment Details" routes={PageRoutes} />
      <div style={{ padding: '0px 32px 90px 32px' }}>
        <Suspense
          fallback={
            <Cards headless>
              <Skeleton active />
            </Cards>
          }
        >
          <OverviewDataStyleWrap>
            <Row gutter={25}>
              {SupportOverview.map((item, i) => {
                return (
                  <Col xxl={6} sm={6} xs={24} key={i}>
                    <OverviewCard className="ninjadash-overview-card-support" data={item} bottomStatus contentFirst />
                  </Col>
                );
              })}
            </Row>
          </OverviewDataStyleWrap>
        </Suspense>
        <Tabs
          defaultActiveKey="1"
          onChange={(activeKey) => {
            getUsersApplicationDetails();
            if (activeKey === '2') {
              setSelectedRowKeys([]);
              setApplicationPaymentVlaue(undefined);
            }
          }}
          items={[
            {
              label: 'Applications',
              key: '1',
              children: (
                <Card
                  title=""
                  border
                  extra={
                    <Button
                      style={{ cursor: 'pointer' }}
                      type="info"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToExplorer();
                      }}
                    >
                      → View in Admin Panel
                    </Button>
                  }
                >
                  {loading ? (
                    <div className="spin">
                      <Spin />
                    </div>
                  ) : (
                    <Table
                      className="table-responsive"
                      pagination={paginationConfig}
                      dataSource={allApplicationDetails.docs}
                      columns={columns}
                      onChange={onChange}
                      sortDirections={['ascend', 'descend', 'ascend']}
                    />
                  )}
                </Card>
              ),
            },
            {
              label: 'Email',
              key: '2',
              children: (
                <Card
                  title=""
                  border
                  extra={
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      {selectedRowKeys.length > 0 && (
                        <Button
                          style={{ cursor: 'pointer', height: '38px', backgroundColor: '#0042A8', color: 'white' }}
                          type="submit"
                          onClick={notifyUsers}
                        >
                          Send Notification
                        </Button>
                      )}
                      <Select
                        placeholder="Application Payment"
                        onChange={handleApplicationPaymentChange}
                        value={applicationPaymentVlaue}
                        options={[
                          { value: 'PENDING', label: 'PENDING' },
                          { value: 'CREATED', label: 'CREATED' },
                          { value: 'COMPLETED', label: 'COMPLETED' },
                          { value: 'EXPIRED', label: 'EXPIRED' },
                        ]}
                      />
                    </div>
                  }
                >
                  {loading ? (
                    <div className="spin">
                      <Spin />
                    </div>
                  ) : (
                    <Table
                      className="table-responsive"
                      rowSelection={rowSelection}
                      pagination={paginationConfig}
                      dataSource={allApplicationDetails.docs}
                      columns={columns}
                      onChange={onChange}
                      sortDirections={['ascend', 'descend', 'ascend']}
                      rowKey={(record) => record.userId}
                    />
                  )}
                </Card>
              ),
            },
          ]}
          type="card"
          size="large"
        />
        {/* <Card
          title="Applications"
          border
          extra={
            <Button
              style={{ cursor: 'pointer' }}
              type="info"
              onClick={(e) => {
                e.preventDefault();
                navigateToExplorer();
              }}
            >
              → View in Admin Panel
            </Button>
          }
        >
          {loading ? (
            <div className="spin">
              <Spin />
            </div>
          ) : (
            <Table
              className="table-responsive"
              pagination={paginationConfig}
              dataSource={allApplicationDetails.docs}
              columns={columns}
              onChange={onChange}
              sortDirections={['ascend', 'descend', 'ascend']}
            />
          )}
        </Card> */}
        <EditModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selelectedRow={selelectedRow}
          getUsersApplicationDetails={getUsersApplicationDetails}
        />
        <Modal
          width="30%"
          title="View"
          open={isViewModalOpen}
          footer={null}
          onCancel={() => {
            setIsViewModalOpen(false);
          }}
        >
          <ViewStatusWraper>
            {/* <div className="d-flex justify-content-center"> */}
            <div className="d-flex" style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
              <div className="assets-detail-dashboard-content">
                <p className="assets-detail-paragraph-head">Resident Type</p>
                <p className="assets-detail-paragraph-text">{selelectedRow?.paymentDetails?.residentType}</p>
              </div>
              <div className="assets-detail-dashboard-content">
                <p className="assets-detail-paragraph-head">Payment Type</p>
                <p className="assets-detail-paragraph-text">{selelectedRow?.paymentDetails?.paymentType}</p>
              </div>
              <div className="assets-detail-dashboard-content">
                <p className="assets-detail-paragraph-head">Transaction Id</p>
                <p className="assets-detail-paragraph-text">{selelectedRow?.paymentDetails?.TransactionId}</p>
              </div>
            </div>
            {/* </div> */}
          </ViewStatusWraper>
        </Modal>
        <Modal
          width="30%"
          title="Send Notification To Users"
          open={sendEmailModelIsOpen}
          footer={null}
          onCancel={() => {
            setSendEmailModelIsOpen(false);
          }}
          destroyOnClose
        >
          <ViewStatusWraper>
            <Form form={form} name="forgotPass" onFinish={sendNotificationToUsers} layout="vertical" className="main">
              <div className="d-flex" style={{ flexDirection: 'column' }}></div>
              <Form.Item
                name="subject"
                rules={[{ required: true, message: t('admin_send_email_notification_email_required') }]}
              >
                <Input
                  name="subject"
                  placeholder={t('admin_send_email_notification_email_input_label')}
                  onChange={updateEmailBody}
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: t('admin_send_email_notification_message_required') }]}
              >
                <TextArea
                  name="message"
                  rows={4}
                  placeholder={t('admin_send_email_notification_message_input_label')}
                  onChange={updateEmailBody}
                />
              </Form.Item>
              {/* <div>
                <label>Enter Message</label>
                <textarea
                  rows={10}
                  // value={emailBody.message}
                  style={{
                    marginBottom: '20px',
                    width: '100%',
                    border: '1px solid #E3E6EF',
                    outline: 'none',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    borderRadius: '4px',
                  }}
                  name="message"
                  className="hover:border-blue-500"
                  onChange={updateEmailBody}
                />
              </div> */}
              <Form.Item className="recaptcha-signup-block">
                <div
                  className="d-flex"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Button
                    className="btn-create"
                    htmlType="submit"
                    type="primary"
                    style={{
                      backgroundColor: emailLoader ? 'white' : '#0042A8',
                      color: emailLoader ? 'black' : 'white',
                    }}
                  >
                    {emailLoader ? (
                      <div className="spin">
                        <Spin />
                      </div>
                    ) : (
                      'Send Notification'
                    )}
                  </Button>
                </div>
              </Form.Item>
              {/* <div
                className="d-flex"
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Button
                  style={{
                    cursor: 'pointer',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: emailLoader ? 'white' : '#0042A8',
                    color: emailLoader ? 'black' : 'white',
                  }}
                  type="submit"
                  // onClick={sendNotificationToUsers}
                >
                  {emailLoader ? (
                    <div className="spin">
                      <Spin />
                    </div>
                  ) : (
                    'Send Notification'
                  )}
                </Button>
              </div> */}
            </Form>
          </ViewStatusWraper>
        </Modal>
      </div>
    </>
  );
}
