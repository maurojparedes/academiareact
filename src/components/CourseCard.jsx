import { Card, Button, Badge, ProgressBar } from "react-bootstrap";

function CourseCard({ curso, agregarCurso }) {
    return (
        <Card className="h-100 shadow-sm border-0 course-card">

            <Card.Body className="d-flex flex-column">

                <div className="mb-2 d-flex justify-content-between">

                    <Badge bg="secondary">
                        {curso.categoria}
                    </Badge>

                    <Badge
                        style={{
                            backgroundColor: "#149eca"
                        }}
                    >
                        {curso.nivel}
                    </Badge>

                </div>

                <Card.Title
                    style={{
                        color: "#149eca",
                        fontWeight: "600"
                    }}
                >
                    {curso.titulo}
                </Card.Title>

                <Card.Text>
                    {curso.descripcion}
                </Card.Text>

                <div className="mb-3 mt-auto">

                    <small>Cupos disponibles</small>

                    <ProgressBar
                        now={curso.cupos}
                        label={`${curso.cupos}%`}
                        variant="info"
                    />

                </div>

                <h4
                    style={{
                        color: "#111827",
                        fontWeight: "700"
                    }}
                >
                    ${curso.precio}
                </h4>

                <Button
                    onClick={() => agregarCurso(curso)}
                    style={{
                        backgroundColor: "#149eca",
                        borderColor: "#149eca"
                    }}
                >
                    Inscribirme
                </Button>

            </Card.Body>

        </Card>
    );
}

export default CourseCard;