import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
  return (
    <section className='banner' id='home'>
       <Container >
        <Row className='align-items-center'>
            <Col xs={12} md={6} Xl={7}>
            <span className='tagline'>Welcome to my Portfolio</span>
            <h1>('Hi I'm Anuoluwapo)<span className='wrap'>web developer</span></h1>
            <p> Web development is more than a work, its a culture for people who relates the computer and understand the language to speak with them. Speaking of languages, I'm fluent in Reactjs, javaScript, Html & Css. I'm a fluent web developer and my primary field is frontend development. Lastly, Web OS should be a real thing </p>
            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}  /></button>
            </Col>
            <Col xs={12} md={6} Xl={7}>
              <img src={headerImg} alt="Header Img" />
            </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Banner