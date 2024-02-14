function Alumno(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.materias = [];
    this.calificaciones = [];
    this.nivelIngles = '';
}

document.getElementById('formAlumno').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const alumno = new Alumno(nombre, apellidos, edad);
    // Aquí deberías agregar código para almacenar el alumno en localStorage
});

Alumno.prototype.inscribirMateria = function(materia) {
    this.materias.push(materia);
};

Alumno.prototype.asignarCalificacion = function(materia, calificacion) {
    this.calificaciones.push({ materia, calificacion });
};

let grupoA = [];
// Para asignar un alumno al grupo, simplemente lo agregas al arreglo.
grupoA.push(alumno);

function buscarPorNombre(nombre, grupo) {
    return grupo.filter(alumno => alumno.nombre === nombre);
}

function obtenerPromedioAlumno(alumno) {
    const suma = alumno.calificaciones.reduce((acc, curr) => acc + curr.calificacion, 0);
    return suma / alumno.calificaciones.length;
}

function obtenerPromedioGrupo(grupo) {
    const sumaTotal = grupo.reduce((acc, alumno) => acc + obtenerPromedioAlumno(alumno), 0);
    return sumaTotal / grupo.length;
}

// Esta función ordena a los alumnos por calificación, asumiendo una calificación promedio por alumno
function ordenarAlumnosPorCalificacion(grupo, ascendente=true) {
    return grupo.sort((a, b) => {
        const promedioA = obtenerPromedioAlumno(a);
        const promedioB = obtenerPromedioAlumno(b);
        return ascendente ? promedioA - promedioB : promedioB - promedioA;
    });
}

function guardarAlumno(alumno) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos') || '[]');
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

function cargarAlumnos() {
    return JSON.parse(localStorage.getItem('alumnos') || '[]');
}