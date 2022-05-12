import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";

import "./home.css"

const HomePage = () => (
    <Carousel>
        <Carousel.Item className="slider-item">
            <Image className="d-block w-100" src={slide1} />
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={slide2} />
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={slide3} />
        </Carousel.Item>

    </Carousel>
)

export default HomePage;