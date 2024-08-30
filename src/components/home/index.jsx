import "../../assets/css/home.css";

import image1 from "../../assets/img/feature-card1.webp";
import image2 from "../../assets/img/feature-card2.webp";

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
                <p>
                  Experience the excellence of health services with our renowned
                  specialists, comprehensive diagnostics and collaborative care.
                </p>
                <h4>M. Awais</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sec-intro */}
      <div className="sec-intro">
        <div className="container-space">
          <div className="row">
            <div className="col-3">
              <div className="dot-wrapper">
                <span>.</span>
                <h6>Introduction</h6>
              </div>
            </div>

            <div className="col-9">
              <div className="name-head">
                <div className="row">
                  <div className="col-10">
                    <div className="intro-head">
                      <h1>
                        Horizon Studio is an architectural firm based in Los
                        Angeles, co-founded by Italian-born Alessandro Rossi and
                        American native Olivia Bennett.
                      </h1>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="number-wrapper">
                      <span>1A</span>
                    </div>
                  </div>

                  <hr className="my-4 text-white" />

                  <div className="col-8">
                    <div className="small-text">
                      <p>
                        The studio, established in 2010, epitomizes progressive
                        and inspirational architectural design. With a global
                        vision, Horizon Studio transcends borders, seamlessly
                        integrating diverse cultural influences into its
                        projects.
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="btn-about">
                      <a href="#">More about us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured-project */}
      <div className="sec-featured">
        <div className="container-space">
          <div className="row">
            <div className="col-3">
              <div className="number-wrapper">
                <span>1B</span>
              </div>
            </div>

            <div className="col-9">
              <div className="name-head">
                <div className="row">
                  <div className="col-9">
                    <div className="intro-head">
                      <h1>Featured Project</h1>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="featured-btn">
                      <a href="#">See Our Products</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="featured-img">
              <div className="row">
                <div className="col-4">
                  <div className="featured-card">
                    <img src={image1} class="image" />
                    <div class="middle">
                      <a href="#" className="text">
                        See Projects
                      </a>
                    </div>
                    <h3>Verdant Metropolis Residence</h3>
                    <p>Residential/2023</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="featured-card">
                    <img src={image2} class="image" />
                    <div class="middle">
                      <a href="#" className="text">
                        See Projects
                      </a>
                    </div>
                    <h3>Lumière Gallery & Cultural Exchange</h3>
                    <p>Residential/2023</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="featured-card">
                    <img src={image1} class="image" />
                    <div class="middle">
                      <a href="#" className="text">
                        See Projects
                      </a>
                    </div>
                    <h3>Nordic Harmony Residences</h3>
                    <p>Residential/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
