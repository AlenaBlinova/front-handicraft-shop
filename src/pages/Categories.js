import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import card1 from "../assets/product3.jpg";
import card2 from "../assets/product4.jpg";
import card3 from "../assets/product2.jpg";
import card4 from "../assets/product5.jpg";

const CategoriesPage = () => (
    <Container id="categories" fluid>
        <Row>
            <Col className="categories-element">
                <h3>Категории</h3>
            </Col>
        </Row>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                    <Card.Title>Валяние</Card.Title>
                    <Button variant="primary">Посмотреть</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                    <Card.Title>Вышивка</Card.Title>
                    <Button variant="primary">Посмотреть</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                    <Card.Title>Вязание</Card.Title>
                    <Button variant="primary">Посмотреть</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={card4} />
                <Card.Body>
                    <Card.Title>Шитьё</Card.Title>
                    <Button variant="primary">Посмотреть</Button>
                </Card.Body>
            </Card>
        </div>
    </Container>
)

export default CategoriesPage;