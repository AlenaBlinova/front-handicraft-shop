import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const InfoPage = () => (
    <Container id="info" fluid>
        <Row>
            <Col className="info-element">
                <h3>Доставка и оплата</h3>
                <p>Отправка заказов производится в пн, ср, пт в 15.00 по московскому времени.</p>
                <p>Доставим ваш заказ в любой пункт выдачи "OZON" по вашему выбору. Действует в любом городе, населенном пункте, где присутствуют пункты "Озон". Отправка посылок осуществляется с центрального склада во Владимире.</p>
            </Col>
        </Row>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Способ доставки</th>
                    <th>Сроки</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Пункты OZON</td>
                    <td>Доставка заказа в течение 3-10 дней</td>
                    <td>260 руб. по предоплате</td>
                </tr>
                <tr>
                    <td>СДЭК предоплата</td>
                    <td>Доставка заказа в течение 10 дней</td>
                    <td>От 370 руб. до 510 руб. по предоплате</td>
                </tr>
                <tr>
                    <td>Почта России</td>
                    <td>Доставка заказа в течение 10 дней</td>
                    <td>От 346,50 руб. до 437 руб. по предоплате</td>
                </tr>
            </tbody>
        </Table>
    </Container>
)

export default InfoPage;