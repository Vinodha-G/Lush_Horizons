import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import plantimage from '../assets/ourproducts-image/product-plant.jpg';
import plantseed from '../assets/ourproducts-image/product-seed.jpg';
import planttool from '../assets/ourproducts-image/product-tool.jpg';

function Productcard() {
  return (
    <CardGroup style={{ gap: "20px", padding: "50px", borderRadius: "10px" }}>

      <Card style={{ borderRadius: "10px" }} >
        <Card.Img variant="top" src={plantimage} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Plants</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusamus?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="/plants" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>


      <Card style={{ borderRadius: "10px" }}>
        <Card.Img variant="top" src={plantseed} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Seeds</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quidem?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="/seeds" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>

      <Card style={{ borderRadius: "10px" }}>
        <Card.Img variant="top" src={planttool} style={{ borderRadius: "10px" }} />
        <Card.Body>
          <Card.Title>Tools</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nam.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href="/tools" className="card-button" style={{
            display: "inline-block", padding: "10px 16px",
            margin: "16px",
            backgroundColor: "#007BFF",
            color: " #fff",
            textDecoration: "none",
            borderRadius: " 4px",
            fontSize: "1em"
          }}>View More</a>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default Productcard;