import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section className="project-area" id="portfolio">
        <div className="container text-light">
          <div className="project-title pb-5">
            <h1 className="text-uppercase title-h1">Portfolio</h1>
          </div>

          <div className="row grid">
            <div className="col-lg-4 col-md-6 col-sm-12 element-item ">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/E-com.png"
                  >
                    <img
                      src="./img/portfolio/E-com.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">
                    Friction E-com React Project
                  </h4>
                  <span className="text-secondary">
                    <a
                      className="text-secondary"
                      href="https://github.com/arbabhsiddiqui/e-com"
                    >
                      Git Url{" "}
                    </a>
                    ,
                    <a
                      className="text-secondary"
                      href="https://alonewarriorproj1.netlify.app/"
                    >
                      Site Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item ">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/Portfolio.png"
                  >
                    <img
                      src="./img/portfolio/Portfolio.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Designer Portfolio Project</h4>
                  <span className="text-secondary">
                    <a className="text-secondary">Private file</a>,
                    <a
                      className="text-secondary"
                      href="https://27shivam.netlify.app/"
                    >
                      Site Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item t">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/card-template-3.png"
                  >
                    <img
                      src="./img/portfolio/card-template-3.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Card Template</h4>
                  <span>
                    <a
                      className="text-secondary"
                      href="https://codepen.io/ArbabHussain/full/OJMQKZO"
                    >
                      CodePen Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item ">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/new-layout.png"
                  >
                    <img
                      src="./img/portfolio/new-layout.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Card Template 2</h4>
                  <span>
                    <a
                      className="text-secondary"
                      href="https://codepen.io/ArbabHussain/full/qBbJxOM"
                    >
                      CodePen Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item t">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/login-form.png"
                  >
                    <img
                      src="./img/portfolio/login-form.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Login Form Template </h4>
                  <span>
                    <a
                      className="text-secondary"
                      href="https://codepen.io/ArbabHussain/full/vYLeddB"
                    >
                      CodePen Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item ">
              <div className="our-project">
                <div className="img">
                  <a
                    className="test-popup-link"
                    href="./img/portfolio/simple-color-palette-layout.png"
                  >
                    <img
                      src="./img/portfolio/simple-color-palette-layout.png"
                      alt="portfolio-1"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">color palette </h4>
                  <span>
                    <a
                      className="text-secondary"
                      href="https://codepen.io/ArbabHussain/full/WNrXaxv"
                    >
                      CodePen Url
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
