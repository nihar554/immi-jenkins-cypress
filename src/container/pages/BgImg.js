import emailBg from '../../static/img/email-bg.png';
import headerRight from '../../static/img/header-right.png';
import headerLeft from '../../static/img/imi-logo.png';

function BgImg() {
  return (
    <>
      <img src={emailBg} alt="" />
      <img src={headerRight} alt="" />
      <img src={headerLeft} alt="" />
    </>
  );
}

export default BgImg;
