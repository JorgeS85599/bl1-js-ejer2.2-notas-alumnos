'use strict'


let datoUsuario = prompt('Introduce el NIA o el nombre del módulo: ');

if (isNaN(parseInt(datoUsuario))) {
    console.log("Los alumnos aprobados en el módulo " + datoUsuario + " son ");
    console.log(alumnosAprobadosDelModulo(datosAlumnos,datoUsuario));
    let arrayNotasModulo = datosAlumnos.map(item => item.notas.find(item2 => item2.modulo === datoUsuario)).map(item => item.nota);
    console.log("La nota media del módulo es " + media(arrayNotasModulo));
} else {
    let nia = parseInt(datoUsuario)
    let alumno = buscaAlumno(datosAlumnos,nia);
    console.log("Los módulos aprobados por el alumno con nia " + nia + " son ");
    console.log(modulosAprobadosDelAlumno(alumno.notas));
    let arrayNotasAlumno = alumno.notas.map(item => item.nota);
    console.log("La nota media del alumno es " + media(arrayNotasAlumno));
    
}

console.log("La lista alfabética de alumnos es ");
console.log(ordenaAlumnosPorApellido(datosAlumnos).map(item => item.alumno.nombre + " " + item.alumno.apellido));
console.log("La lista de alumnos por nia es ");
console.log(ordenaAlumnosPorNia(datosAlumnos).map(item => item.alumno.nombre + " " + item.alumno.apellido));
console.log("Los alumnos con algún módulo suspenso son ");
console.log(alumnosConSuspensos(datosAlumnos));
console.log("Los alumnos con todo aprobado son ");
console.log(alumnosConTodoAprobado(datosAlumnos));



