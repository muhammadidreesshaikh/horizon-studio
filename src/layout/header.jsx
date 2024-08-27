import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css'

const Header = () => {

  const [toggleMenu, SetToggleMenu] = useState(false);

  const toggle = () => {
    SetToggleMenu(!toggleMenu);
  }

  return (
    <div>
      <div className="top-bar">
        <div className="toggleMenu" onClick={() => toggle()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>

        <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                  <div className="logo">
                      <a href="/homepage">Horizon Studio</a>
                  </div>
              </div>

              <div className="col-12 col-md-8 col-lg-9">
                <div className="nav-bar">
                  <ul>
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/studio">Studio</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    {/* <div className='header-btn'>
                      <a href='/login' className='small-btn-blue'>Login</a>
                    </div> */}
                  </ul>
                </div>
              </div>

              {/* mobile side-menu */}
              <div className="mobile-nav">
                <div id="mySidenav" className={`sidenav ${toggleMenu ? 'active' : ''}`}>
                  <ul>
                  <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/studio">Studio</Link></li>
                    <li><Link to="/services">Services</Link></li>
                  </ul>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
