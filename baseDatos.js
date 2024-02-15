function Alumno(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.materias = [];
    this.calificaciones = {};
}

Alumno.prototype.inscribirMateria = function(materia) {
    if (!this.materias.includes(materia)) {
        this.materias.push(materia);
        this.calificaciones[materia] = [];
    }
};

Alumno.prototype.agregarCalificacion = function(materia, calificacion) {
    if (this.materias.includes(materia)) {
        this.calificaciones[materia].push(calificacion);
    }
};

var alumnos = []; // Este arreglo almacenará los objetos Alumno

function mostrarAlumnos() {
    const lista = document.getElementById('listaAlumnos');
    lista.innerHTML = ''; // Limpiar la lista antes de volver a mostrarla
    alumnos.forEach(alumno => {
        const elemento = document.createElement('div');
        elemento.innerHTML = `Nombre: ${alumno.nombre} <br> Apellidos: ${alumno.apellidos} <br> Edad: ${alumno.edad}`;
        lista.appendChild(elemento);
    });
}

document.getElementById('registroAlumno').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    // Crear un nuevo alumno y agregarlo al arreglo
    const nuevoAlumno = new Alumno(nombre, apellidos, parseInt(edad));
    alumnos.push(nuevoAlumno);
    // Mostrar los alumnos actualizados
    mostrarAlumnos();
    // Limpiar el formulario
    e.target.reset();
});
