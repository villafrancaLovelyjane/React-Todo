import { Button, Card } from "react-bootstrap";

import { useState } from "react";

const Aboutpage = ({ images }) => {
  return (
    <div className="container-fluid">
      <div className="row my-3">
        {images.map((img) => (
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "200px", height: "300px", objectFit: "cover" }}
                variant="top"
                src={img}
              />
              <Card.Body>
                <Card.Title>Cats</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutpage;
