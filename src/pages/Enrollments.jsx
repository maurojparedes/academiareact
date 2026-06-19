import { Container, Card, Button, Alert } from "react-bootstrap";
import useCourseStore from "../store/useCourseStore";

function Enrollments() {

    const inscripciones = useCourseStore(
        (state) => state.inscripciones
    );

    const quitarCurso = useCourseStore(
        (state) => state.quitarCurso
    );

    const vaciarCursos = useCourseStore(
        (state) => state.vaciarCursos
    );

    // Calcula el total sumando el precio de todos los cursos inscritos
    const total = inscripciones.reduce(
        (acumulador, curso) => acumulador + curso.precio,
        0
    );

    return (
        <Container>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Mis inscripciones</h2>

                {inscripciones.length > 0 && (
                    <Button
                        variant="outline-danger"
                        onClick={vaciarCursos}
                    >
                        Vaciar lista
                    </Button>
                )}

            </div>

            {inscripciones.length === 0 && (
                <Alert variant="info">
                    Todavía no seleccionaste ningún curso.
                </Alert>
            )}

            {inscripciones.map((curso) => (
                <Card
                    key={curso.id}
                    className="mb-3 border-0 shadow-sm"
                >

                    <Card.Body className="d-flex justify-content-between align-items-center">

                        <div>

                            <h5
                                style={{
                                    color: "#149eca"
                                }}
                            >
                                {curso.titulo}
                            </h5>

                            <p className="mb-0">
                                {curso.categoria} · ${curso.precio}
                            </p>

                        </div>

                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => quitarCurso(curso.id)}
                        >
                            Quitar
                        </Button>

                    </Card.Body>

                </Card>
            ))}

            {inscripciones.length > 0 && (
                <Card className="mt-4 total-card">

                    <Card.Body>

                        <h3>
                            Total a pagar: ${total}
                        </h3>

                    </Card.Body>

                </Card>
            )}

        </Container>
    );
}

export default Enrollments;