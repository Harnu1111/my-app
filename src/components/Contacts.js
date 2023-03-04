import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

 export const Contacts = () => {
  return (
    
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={
                  isVisible ? "animate__animated animate__zoomIn" : ""
                }
                src={contactImg}
                alt="Contact Us"
              />
            )}
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <h2>Get In Touch</h2>
                <form  action="https://formsubmit.co/49bf251ccc7f423496302772189eee34" method="POST" >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name='Name'
                        placeholder="First Name"
                        
                          
                        
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        name='Name'
                        placeholder="Last Name"
                       
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        name='Email'
                        placeholder="Email Address"
                       
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="tel"
                       name='phone No'
                        placeholder="Phone No."
                       
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                       name='Message'
                        placeholder="Message"
                       
                      ></textarea>
                      <button type="submit">
                        <span>Send</span>
                      </button>
                    </Col>
                 
                  </Row>
                </form>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

