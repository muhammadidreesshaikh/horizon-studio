import "../../assets/css/home.css";

import image1 from "../../assets/img/feature-card1.webp";
import image2 from "../../assets/img/feature-card2.webp";
import image3 from "../../assets/img/spaces-img1.webp";
import image4 from "../../assets/img/spaces-img2.webp";
import image5 from "../../assets/img/sustainably-img2.webp";
import image6 from "../../assets/img/sustainably-img1.webp";

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

      {/* banner-first */}
      <div className="banner-first">
        <div className="container">
          <div className="row">
            <div className="banner-text">
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
                      <a href="#" className="custom-btn">
                        See Our Products
                      </a>
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

      <hr className="divider-gap" />

      {/* sec-spaces */}
      <div className="sec-spaces">
        <div className="container-space">
          <div className="row">
            <div className="col-3">
              <div className="dot-wrapper">
                <span>.</span>
                <h6>Spaces, Solutions.</h6>
              </div>
            </div>

            <div className="col-9">
              <div className="name-head">
                <div className="row">
                  <div className="col-10">
                    <div className="intro-head">
                      <h1>Spaces Redefined</h1>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="number-wrapper">
                      <span>1C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spaces-inner">
              <div className="row">
                <div className="col-8">
                  <div className="left-img">
                    <img src={image3} class="image" />
                  </div>
                </div>

                <div className="col-4">
                  <div className="right-img">
                    <img src={image4} class="image" />
                    <p>
                      Crafting Your Unique Vision. Horizon Studio's
                      Architecture, Interiors, and Sustainability services
                      redefine spaces with innovation and elegance.
                    </p>

                    <div className="list-design">
                      <ol>
                        <li>
                          <a href="#">Sustainability Design</a>
                        </li>
                        <li>
                          <a href="#">Architectural Design</a>
                        </li>
                        <li>
                          <a href="#">Interior Design</a>
                        </li>
                      </ol>

                      <div className="spaces-btn">
                        <a href="#" className="custom-btn">
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider-gap" />

      {/* sec-sustainably */}
      <div className="sec-sustainably">
        <div className="container-space">
          <div className="row">
            <div className="col-3">
              <div className="dot-wrapper">
                <span>.</span>
                <h6>Eco-Conscious Brilliance</h6>
              </div>
            </div>

            <div className="col-9">
              <div className="name-head">
                <div className="row">
                  <div className="col-10">
                    <div className="intro-head">
                      <h1>Sustainably Yours</h1>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="number-wrapper">
                      <span>1D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sustainably-inner">
              <div className="row">
                <div className="col-4">
                  <div className="right-img">
                    <img src={image5} class="image" />
                    <p>
                      Here, sustainability isn't a choice; it's a signature of
                      refined living. Immerse yourself in a realm where
                      eco-friendly materials, innovative solutions, and
                      breathtaking designs converge to create spaces that stand
                      as a testament to both luxury and environmental
                      stewardship.
                    </p>
                  </div>
                </div>

                <div className="col-8">
                  <div className="left-img">
                    <img src={image6} class="image" />
                  </div>
                </div>

                <div className="number-bar">
                  <div className="row">
                    <div className="col-4">
                      <div className="num-inner">
                        <h1>20</h1>
                        <p>Eco-Friendly Buildings Completed.</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="num-inner">
                        <h1>50</h1>
                        <p>Trees Planted per Project.</p>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="num-inner">
                        <h1>16</h1>
                        <p>Green Roofs on 12 Structures.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner-second */}
      <div className="banner-second">
        <div className="container">
          <div className="row">
            <div className="banner-text">
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
    </div>
  );
};

export default Home;
