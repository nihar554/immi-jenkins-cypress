import styled from 'styled-components'

const ViewStatusWraper = styled.div`
  .assets-detail-paragraph-head {
    font-size: 14px;
    line-height: 10px;
    color: rgb(47, 50, 65) !important;
    font-style: normal;
    font-weight: 500;
    text-align: left !important;
  }
  .assets-detail-paragraph-text {
    font-size: 14px;
    line-height: 10px;
    font-style: normal;
    font-weight: 500;
    color: rgb(147, 147, 147) !important;
    text-align: left !important;
  }

  table {
    width: 100%;
    text-align: center;
  }

  .ant-input {
    border: 1px solid #e3e6ef !important;
    text-align: left !important;
  }
  .ant-input::placeholder {
    text-align: left !important;
  }
`

const OverviewDataStyleWrap = styled.div`
  &.card-mesh-wrap {
    justify-content: space-between;
    margin-bottom: 25px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    @media only screen and (max-width: 991px) {
      flex-wrap: wrap;
    }
    .ninjadash-overview-card-single {
      flex: 0 0 auto;
      margin-bottom: 0;
      @media only screen and (max-width: 991px) {
        flex: 0 0 50%;
      }
      @media only screen and (max-width: 575px) {
        flex: 0 0 100%;
      }
    }
  }
`

export { ViewStatusWraper, OverviewDataStyleWrap }
