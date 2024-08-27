import "../../assets/css/home.css";

const Home = () => {
  return (
    <div>
      {/* main-heading */}
      <div className="main-heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>
                HORIZON <span>STUDIO</span>
              </h1>
              <p>LOS ANGELES,CA.</p>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="slider">
        <div className="container">
          <div className="row">
              <div className="slider-text">
                    <div className="inverted-comma">
                      <h1>"</h1>
                    </div>
                    <div className="text">
                      <p>Experience the excellence of health services with our
                        renowned specialists, comprehensive diagnostics and
                        collaborative care.</p>
                        <h4>M. Awais</h4>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
