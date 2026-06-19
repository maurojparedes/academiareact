import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Container>

            <div className="hero-section text-center">

                <h1>Academia React</h1>

                <p className="mt-3 mb-4">
                    Capacitate en tecnologías modernas y desarrollá habilidades prácticas para crear aplicaciones web profesionales utilizando React, Node.js y MongoDB.
                </p>

                <Button
                    as={Link}
                    to="/cursos"
                    size="lg"
                    style={{
        backgroundColor: "#149eca",
        borderColor: "#149eca",
        color: "#ffffff",
        fontWeight: "600"
    }}
                >
                    Explorar cursos
                </Button>

            </div>

            <div className="mt-5">

                <h2 className="section-title">
                    ¿Por qué elegirnos?
                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">
                        <div className="feature-card">

                            <h5>Enfoque práctico</h5>

                            <p>
                                Construí proyectos reales desde el primer día para fortalecer tu experiencia y portafolio.
                            </p>

                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="feature-card">

                            <h5>Tecnologías modernas</h5>

                            <p>
                                Aprendé herramientas ampliamente utilizadas en el desarrollo web actual.
                            </p>

                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="feature-card">

                            <h5>Orientación laboral</h5>

                            <p>
                                Desarrollá habilidades técnicas aplicables a proyectos y entornos reales.
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </Container>
    );
}

export default Home;