import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

import { loadPage } from "../actions/pageActions";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const { loading, pageData, error } = page;

  useEffect(() => {
    dispatch(loadPage());
  }, [dispatch]);

  console.log(pageData);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <main className="site-main">
      {/* <!--  ======================= Start Banner Area =======================  --> */}
      <section id="home" className="site-banner">
        <Container>
          <Row>
            <Col md={12} lg={6} className="banner-image">
              <Image
                src="uploads/img/banner/launda.svg"
                alt="banner-img"
                className="img-fluid"
              />
            </Col>
            <Col md={12} lg={6} className="site-title">
              <h3 className="title-text"></h3>
              <h1 className="title-text text-uppercase"></h1>
              <h1 className="title-text text-uppercase text-green">
                {/* {pageData.heading} */}
                Arbab Hussain
              </h1>
              <h4 className="title-text text-uppercase">
                Full Stack Developer
              </h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <a
                    href="#portfolio"
                    className="btn button primary-button mr-4 text-uppercase"
                  >
                    View Portfolio
                  </a>
                  <a
                    href="./arbabCv.pdf"
                    className="btn button secondary-button text-uppercase"
                  >
                    Download cv
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!--  ======================= End Banner Area =======================  --> */}

      {/* <!--  ========================= About Area ==========================  --> */}

      <section id="about" className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 about-title text-light">
              <h2 className="text-uppercase pt-5">
                <span>Let me</span>
                <span>introduce</span>
                <span>myself</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  I am a Full Stack Web Developer learning & working to build a
                  successful life. I like coding and simultaneously learning
                  about new technologies to keep myself updated in this big tech
                  world. Not taking too much of your time, here's my work
                  portfolio.
                </p>
              </div>
              <a
                href="./arbabCv.pdf"
                className="btn button primary-button text-uppercase"
              >
                Download cv
              </a>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image mt-1">
                <Image src="uploads/img/laptop.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  ========================= End About Area ==========================  --> */}

      {/* <!--  ======================= Project Area =============================  --> */}

      {/* <!--  ======================= End Project Area =============================  --> */}
    </main>
  );
};

export default HomeScreen;
