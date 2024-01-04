import { Link, useLocation } from 'react-router-dom'
import { TetheFooterStyle } from '../../../layout/Style'
import tetherIcons from '../../../static/img/icons/tetherlogo.png'

function PoweredBy () {
  const { pathname } = useLocation()

  return (
    <TetheFooterStyle style={pathname === '/terms' ? { position: 'fixed', bottom: 0 } : { position: 'static' }}>
      <div className="admin-footer__links">
        <span className="lable">Powered by</span>
        <Link to="https://tether.to/en/" target="_blank">
          <img src={tetherIcons} alt="" />
        </Link>
      </div>
    </TetheFooterStyle>
  )
}

export default PoweredBy
