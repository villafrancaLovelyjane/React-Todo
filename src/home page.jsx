import { Carousel, Image } from "react-bootstrap";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";

const Homepage = () => {
  return (
    <div className="container-fluid vh-100 bg-dark d-flex justify-content-center align-items-center">
      <Carousel fade={true}>
        <Carousel.Item>
          <div className="wrapper w-100 d-flex justify-content-center">
            <Image style={{ width: "500px", height: "300px" }} src={img1} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="wrapper w-100 d-flex justify-content-center">
            <Image style={{ width: "500px", height: "300px" }} src={img2} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homepage;
