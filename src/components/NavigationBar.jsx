import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCourseStore from "../store/useCourseStore";

function NavigationBar() {

    const cantidad = useCourseStore(
        (state) => state.inscripciones.length
    );

    return (
        <Navbar
            expand="lg"
            className="mb-4 shadow-sm"
            style={{
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e5e7eb"
            }}
        >
            <Container>

                <Navbar.Brand
                    as={Link}
                    to="/"
                    style={{
                        color: "#111827",
                        fontWeight: "700",
                        textDecoration: "none"
                    }}
                >
                    Academia React
                </Navbar.Brand>

                <Nav className="ms-auto">

                    <Nav.Link as={Link} to="/">
                        Inicio
                    </Nav.Link>

                    <Nav.Link as={Link} to="/cursos">
                        Cursos
                    </Nav.Link>

                    <Nav.Link as={Link} to="/inscripciones">
                        Inscripciones{" "}
                        <Badge
                            style={{
                                backgroundColor: "#149eca"
                            }}
                        >
                            {cantidad}
                        </Badge>
                    </Nav.Link>

                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;