import Styled from 'styled-components';

const BuildFutureWrapper = Styled.div`
  background-color: #0000ff3d;
  margin-top: 12px;
  /* VideoBackground.css */
  .video-background {
    &::-webkit-media-controls {
        display:none !important;
    }

    &::-webkit-media-controls-start-playback-button {
        display: none!important;
        -webkit-appearance: none;
    }
    position: relative;
    width: 100%;
    padding: 80px 0px;

    /* Center the content */
    display: flex;
    align-items: center;
    justify-content: center;

    /* Ensure the video covers the entire container */
    overflow: hidden;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Place the video behind other content */
  }
  .center {
    text-align: center;
    h1 {
      color: ${({ theme }) => theme[theme.mainContent]['white-text']};
      font-size: 89px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: -40px;
      @media (max-width: 900px) {
        margin-bottom: -10px;
        font-size: 45px;
        font-weight: 700;
      }
    }
    .descripion {
      margin-top: 3rem;
      color: white;
      font-size: 18px;
      @media (max-width: 900px) {
        padding-right: 15px;
        padding-left: 15px;    
        text-align: center;
      }
    }
    button {
      width: 174px;
      height: 35px;
      font-size: 14px;
      margin-top: 1rem;
      border-radius: 0;
      color: #041E5F;
    }
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      h1 {
        margin-bottom: -10px;
        font-size: 45px;
        font-weight: 700;
      }
      p {
        padding-right: 15px;
        padding-left: 15px;    
        text-align: center;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      h1 {
        font-size: 5rem;
        margin-bottom: -30px;
      }
      p {
        padding-right: 7%;
        padding-left: 7%;
      }
    }
  }
`;

export { BuildFutureWrapper };
