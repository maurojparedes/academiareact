import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enrollments from "./pages/Enrollments";

import "./App.css";

function App() {
    return (
        <>
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/cursos"
                    element={<Courses />}
                />

                <Route
                    path="/inscripciones"
                    element={<Enrollments />}
                />
            </Routes>
        </>
    );
}

export default App;