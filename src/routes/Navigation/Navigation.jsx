import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// Styles
import '././navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Navigation;