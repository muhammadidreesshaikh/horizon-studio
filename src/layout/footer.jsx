import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row footer-inner">
            <div className="col-12 col-md-3 col-lg-4">
              <h1>Horizon Studio</h1>
              <p>Every day thousands of people enter the gates of Health Checkup (HC) with someone close to them in need of medical attention.</p>

              <div className='footer-btn mt-4'>
                <a href='/about-us' className='small-btn-red'>Read More</a>
              </div>

              <div className="social-icons">
                <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook-f"/></a>
                <a href="#"><i className=""></i></a>
                <a href="#"><i className=""></i></a>
                <a href="#"><i className=""></i></a>
                <a href="#"><i className=""></i></a>
                <a href="#"><i className=""></i></a>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <h3>Quick Links</h3>
              <ul>
                  <li><Link to="/homepage">Home</Link></li>
                  <li><Link to="/studio">Studio</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/vision-mission">Vision & Mission</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
            <h3>Information</h3>
              <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
            <h3>Contact Us</h3>
              <ul>
                <li><a href="#">+92 313 7240111</a></li>
                <li><a href="#">24/7 Services</a></li>
                <li><a href="#">info@healthcheckup.com</a></li>
                <li><a href="#">021-111-OMI-111</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>2024 Health Checkup. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
