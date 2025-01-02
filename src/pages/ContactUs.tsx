import React from "react";
import image1 from '../assets/unplash image1.jpg';
import "../styles/ContactUs.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";


function ContactUs(){
    const { ref, inView } = useInView({
        threshold: 0.1, 
      });
    return(
        <div className="contact-page">
        <Container className="text-center">
          <h2 className="heading">Reach Out to Us</h2>
          <p className="subheading">
            Alternatively, you can reach us by filling out the contact form below.
          </p>
          <Form className="contact-form">
            <Row className="mb-3">
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="First Name *"
                  className="form-input"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Last Name *"
                  className="form-input"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  className="form-input"
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="email"
                  placeholder="Email *"
                  className="form-input"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Message *"
                  rows={4}
                  className="form-input"
                />
              </Col>
            </Row>
            <Button className="submit-btn mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <br></br>

        <div className="contact-us-section">
      <div className="contact-text-container" ref={ref}>
        <div className={`contact-text ${inView ? "slide-in" : ""}`}>
          <h2>Plant care questions? Order issues?</h2>
          <p>
            There are a few ways you can get in touch with us.
          </p>
          <br></br>
          <address>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <br></br>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <br></br>
            <p>Mon - Fri: 7am - 10pm</p>
            <p>Saturday: 8am - 10pm</p>
            <p>Sunday: 8am - 11pm</p>
          </address>
        </div>
      </div>
      <div className="background-image">
     
        <img
          src={image1}
          alt="Plant Store Background"
        />
      </div>
    </div>


      </div>
    )
}
export default ContactUs;
