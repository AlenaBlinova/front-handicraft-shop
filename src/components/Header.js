import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./header.css";
import useToken from "../hooks/useToken";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const { loggedIn } = useToken();

    const onLogout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }

    return (
        <Navbar bg="light" expand="sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img id="logo" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/" disabled={pathname === "/"}>
                            Главная
                        </Nav.Link>
                        <NavDropdown title="Каталог">
                            <NavDropdown.Item href="/categories/wallow">
                                Валяние
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/categories/embroidery">
                                Вышивка
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/categories/knitting">
                                Вязание
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/categories/sewing">
                                Шитьё
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/info" disabled={pathname === "/info"}>
                            Доставка и оплата
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contacts" disabled={pathname === "/contacts"}>
                            Контакты
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {!loggedIn ? (
                    <Nav.Link as={Link} to="/login" disabled={pathname === "/login"}>
                        Вход
                    </Nav.Link>
                ) : (
                    <Nav.Link onClick={onLogout}>
                        Выход
                    </Nav.Link>
                )}
            </Container>
        </Navbar>
    );
};

export default Header;
