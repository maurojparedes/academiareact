import { Container, Row, Col } from "react-bootstrap";
import CourseCard from "../components/CourseCard";
import useCourseStore from "../store/useCourseStore";

const cursos = [
    {
        id: 1,
        titulo: "React desde cero",
        categoria: "Frontend",
        precio: 18000,
        nivel: "Inicial",
        cupos: 80,
        descripcion: "Aprendé componentes, props, estado y eventos.",
    },

    {
        id: 2,
        titulo: "Node.js práctico",
        categoria: "Backend",
        precio: 22000,
        nivel: "Intermedio",
        cupos: 60,
        descripcion: "Creá APIs simples usando Express y JavaScript.",
    },
    
    {
        id: 3,
        titulo: "MongoDB para proyectos web",
        categoria: "Base de datos",
        precio: 20000,
        nivel: "Intermedio",
        cupos: 45,
        descripcion: "Modelá y consultá datos para aplicaciones reales.",
    },

    {
        id: 4,
        titulo: "Diseño web con Bootstrap",
        categoria: "Diseño UI",
        precio: 15000,
        nivel: "Inicial",
        cupos: 90,
        descripcion: "Armá interfaces modernas y responsive rápidamente.",
    },
];

function Courses() {
    const agregarCurso = useCourseStore(
        (state) => state.agregarCurso
    );

    return (
    <Container><h2 className="mb-4"
        style={{
            color: "#149eca",
            fontWeight: "700"
        }} >Cursos disponibles</h2>
        <Row>{cursos.map((curso) => (
                <Col md={6} lg={3} key={curso.id} className="mb-4"><CourseCard curso={curso}agregarCurso={agregarCurso}/></Col>
                ))}
        </Row>
    </Container>
    );
}

export default Courses;