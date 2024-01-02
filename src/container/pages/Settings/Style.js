import styled from 'styled-components';

const HeadContainer = styled.div`
  padding: 0px 170px 20px;
  @media only screen and (max-width: 1199px) {
    padding: 0px 15px;
  }
  margin-top: 4rem;
  .product-single-info .fillup-btn {
    background: ${({ theme }) => theme[theme.mainContent]['main-primary-color']};
  }
  .ant-row {
    margin-top: 2rem;
    margin-bottom: 2rem;
    h3 {
      margin-bottom: 1.5rem;
    }
  }
  .product-single-description {
    padding-top: 0.5rem;
    h3 {
      margin-bottom: 0px;
    }
  }
  .product-single-info {
    padding-top: 0.5rem;
  }
`;

const ProjectCard = styled.div`
  padding: 0px 170px 20px;
  @media only screen and (max-width: 1199px) {
    padding: 0px 15px;
  }
  .project-top {
    padding: 30px 30px 0px;
  }
  .edit {
    margin-bottom: 12px;
  }

  .ninjadash-top-banner__title {
    margin-bottom: 1.5rem;
  }
  .project-title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    h1 {
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: -2px;
      a {
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 11px !important;
      }
      a,
      .ant-tag {
        margin: 2px;
      }
      .ant-tag {
        text-transform: uppercase;
        font-size: 10px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        line-height: 18px;
        background: red;
        color: #fff;
        border: 0 none;
        &.early {
          background: ${({ theme }) => theme['primary-color']};
        }
        &.progress {
          background: #ff4d4f;
        }
        &.late {
          background: ${({ theme }) => theme['warning-color']};
        }
        &.complete {
          background: ${({ theme }) => theme['success-color']};
        }
      }
    }
    .ant-dropdown-trigger {
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      svg {
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      }
    }
  }
  .project-desc {
    margin: 7px 0 25px 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .project-timing {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    div {
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
      &:last-child {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
      }
      span,
      strong {
        display: block;
      }
      span {
        font-size: 12px;
        margin-bottom: 2px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      strong {
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
  }
  .project-progress {
    p {
      margin: 2px 0 0 0;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      font-size: 12px;
    }
    .ant-progress-text {
      font-size: 12px;
      font-weight: 500;
    }
  }
  .ant-progress {
    &.ant-progress-status-success {
      .ant-progress-text {
        svg {
          color: ${({ theme }) => theme['success-color']};
        }
      }
    }
  }
  .project-assignees {
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    margin-top: 17px;
    padding-top: 16px;

    p {
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    ul {
      margin: -3px;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        list-style: none;
        padding: 3px;
        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
`;
const NotificationWrapper = styled.div`
  padding: 0px 170px 20px;
  @media only screen and (max-width: 1199px) {
    padding: 0px 15px;
  }

  margin-bottom: 2rem;
  h3 {
    margin-bottom: 1.5rem;
  }
  .notification-box-single {
    .ant-card {
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    > .ant-card {
      .ant-card-body {
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
      }
    }
    .notification-header {
      margin-top: -8px;
      .notification-header__text {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
      .btn-toggle {
        font-size: 13px;
        color: ${({ theme }) => theme['info-color']};
      }
    }
    .notification-body {
      box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
      .ant-card {
        margin-bottom: 0 !important;
      }
      .ant-card-body {
        padding: 5px 0 !important;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 10px;
      }
      nav {
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          padding: 15px 25px !important;
          @media only screen and (max-width: 575px) {
            padding: 15px 20px !important;
          }
          &:not(:last-child) {
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
          }
        }
      }
    }
    .notification-list-single {
      .notification-list-single__title {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 2px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      p {
        margin-bottom: 3px;
        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      }
    }
  }
`;

export { HeadContainer, ProjectCard, NotificationWrapper };
