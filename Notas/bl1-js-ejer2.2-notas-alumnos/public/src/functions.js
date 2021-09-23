'use strict'

function buscaAlumno(datosAlumnos, nia) {
	return datosAlumnos.find(item => item.nia === nia)	
}

function modulosAprobadosDelAlumno(notas) {
	let arrayFiltrado =  notas.filter(item => item.nota >=5);
	return arrayFiltrado.map(item => item.modulo);
}

function media(numeros) {
	let sumaNotas = numeros.reduce((total,nota) => total += nota);
	let notaMedia = sumaNotas / numeros.length;
	return notaMedia.toFixed(2);
}

function ordenaAlumnosPorNia(datosAlumnos) {
	return datosAlumnos.sort((alumno1, alumno2) => alumno1.nia-alumno2.nia);
}

function ordenaAlumnosPorApellido(datosAlumnos) {
	return datosAlumnos.sort((alumno1, alumno2) => alumno1.alumno.apellido.localeCompare(alumno2.alumno.apellido));
}

function alumnosConSuspensos(datosAlumnos) {
	let suspendidos = datosAlumnos.filter(item => item.notas.some(elemento => elemento.nota < 5));
	return suspendidos.map(elemento => elemento.alumno.nombre + " " + elemento.alumno.apellido);
}

function alumnosConTodoAprobado(datosAlumnos) {
	let aprobados = datosAlumnos.filter(item => item.notas.every(elemento => elemento.nota >= 5));
	return aprobados.map(elemento => elemento.alumno.nombre + " " + elemento.alumno.apellido);
}

function alumnosAprobadosDelModulo(datosAlumnos, mod) {
	let aprobadosModulo = datosAlumnos.filter(item => item.notas.some(elemento => (elemento.nota >= 5 && elemento.modulo == mod)));
	return aprobadosModulo.map(elemento => elemento.alumno.nombre + " " + elemento.alumno.apellido); 
}


module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
    alumnosConSuspensos,
    alumnosConTodoAprobado,
	alumnosAprobadosDelModulo
}