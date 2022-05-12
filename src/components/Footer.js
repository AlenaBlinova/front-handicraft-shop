import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <Container id="footer" fluid>
            <Row>
                <Col className="footer-element" xs={12} sm={4}>
                    <h3>Рукодельные изделия</h3>
                    <p>Интернет-магазин рукодельных изделий</p>
                </Col>
                <Col className="footer-element" xs={12} sm={4}>
                    <h3>Страницы магазина</h3>
                    <ul>
                        <li>
                            <Link className={pathname === "/" ? "current" : ""} to="/">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={pathname === "/categories" ? "current" : ""}
                                to="/categories"
                            >
                                Каталог
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={pathname === "/info" ? "current" : ""} 
                                to="/info"
                            >
                                Доставка и оплата
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={pathname === "/contacts" ? "current" : ""} 
                                to="/contacts"
                            >
                                Контакты
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={pathname === "/about/privacy" ? "current" : ""}
                                to="/about/privacy"
                            >
                                Политика конфиденциальности
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col className="footer-element" xs={12} sm={4}>
                    <h3>Внешние ссылки</h3>
                    <ul>
                        <li>
                            <a target="_blank" rel="nofollow" href="https://vk.com">
                                ВК: @handicraft
                            </a>
                        </li>
                        <li>
                            <a href="mailto:issues@gmail.com">Почта: handicraft@gmail.com</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="footer-element">
                    <div>&copy; 2022 - Name — интернет-магазин рукодельных изделий. Все права защищены. Доставка по всей России.</div>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

//export default () => null;