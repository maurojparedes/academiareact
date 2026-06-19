import { create } from "zustand";

const useCourseStore = create((set, get) => ({

    inscripciones: [],

    agregarCurso: (curso) => {

        const existe = get().inscripciones.find(
            (c) => c.id === curso.id
        );

        // Evita agregar el mismo curso más de una vez
        if (existe) return;

        set((state) => ({
            inscripciones: [
                ...state.inscripciones,
                curso
            ],
        }));
    },

    quitarCurso: (id) =>
        set((state) => ({
            inscripciones: state.inscripciones.filter(
                (curso) => curso.id !== id
            ),
        })),

    vaciarCursos: () =>
        set({
            inscripciones: [],
        }),

}));

export default useCourseStore;