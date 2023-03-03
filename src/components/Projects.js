import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project-img3.png";
import react1 from "../assets/img/react1.png";
import react2 from "../assets/img/react2.png";
import html1 from "../assets/img/HTML1.png";
import html2 from "../assets/img/HTML2.png";
import html3 from "../assets/img/HTML3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Over the past two years of my Coding career, I have taken on
                    several projects throught personal works, tutorials and
                    practice designs. All the works featured on this site are
                    coded by me although some are influenced by tutorials. I can
                    assure anyone going through this page that im more than
                    competent to execute and project that falls within my skill
                    set. Thank you for your consideration.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">API APPS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">REACT APPS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">HTML & CSS</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://harnu-food-recipe.netlify.app/">
                                <img src={projImg1} alt="" />
                                <div className="proj-txtx">
                                  <h4>Food Recipe</h4>
                                  <span>
                                    App to Search for meal with Ingredients
                                  </span>
                                  <i>Designed using Api from FoodMeal Api</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://harnu-jokes.netlify.app/">
                                <img src={projImg2} alt="" />
                                <div className="proj-txtx">
                                  <h4>Joke Generator</h4>
                                  <span>App to generate Jokes</span>
                                  <i>Designed using API from </i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={react1} alt="" />
                                <div className="proj-txtx">
                                  <h4>E-Commerce</h4>
                                  <span>fully responsive Ecommerce app</span>
                                  <i>Designed using React js and SyncFusion</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={react1} alt="" />
                                <div className="proj-txtx">
                                  <h4>E-Commerce</h4>
                                  <span>fully responsive Ecommerce app</span>
                                  <i>Designed using React js and SyncFusion</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={react1} alt="" />
                                <div className="proj-txtx">
                                  <h4>E-Commerce</h4>
                                  <span>fully responsive Ecommerce app</span>
                                  <i>Designed using React js and SyncFusion</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={react1} alt="" />
                                <div className="proj-txtx">
                                  <h4>E-Commerce</h4>
                                  <span>fully responsive Ecommerce app</span>
                                  <i>Designed using React js and SyncFusion</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={react1} alt="" />
                                <div className="proj-txtx">
                                  <h4>E-Commerce</h4>
                                  <span>fully responsive Ecommerce app</span>
                                  <i>Designed using React js and SyncFusion</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://academify.netlify.app/">
                                <img src={react2} alt="" />
                                <div className="proj-txtx">
                                  <h4>Academify</h4>
                                  <span>
                                    App for free past questions for High School
                                    Students
                                  </span>
                                  <i>Designed with React Js and pure CSS</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="/">
                                <img src={projImg3} alt="" />
                                <div className="proj-txtx">
                                  <h4>Coming Soon</h4>
                                  <span>in the works</span>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://harnu-youtube.netlify.app/">
                                <img src={html1} alt="" />
                                <div className="proj-txtx">
                                  <h4>Youtube </h4>
                                  <span>Cloning youtube interface</span>
                                  <i>Designed using HTML & CSS</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={html2} alt="" />
                                <div className="proj-txtx">
                                  <h4>Twitter</h4>
                                  <span>Cloned Twitter interface</span>
                                  <i>Designed using HTML & CSS</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a href="https://shop-with-harnu.netlify.app/">
                                <img src={html3} alt="" />
                                <div className="proj-txtx">
                                  <h4>GMail</h4>
                                  <span>Cloned GMail interface</span>
                                  <i>Designed using HTML & CSS</i>
                                </div>
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
