import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BasketPage = () => (
    <Container id="basket" fluid>
        <Row>
            <Col className="basket-element">
                <h3>Корзина</h3>
            </Col>
        </Row>
    </Container>
)

export default BasketPage;