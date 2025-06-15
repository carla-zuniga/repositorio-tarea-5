// Función para sumar las notas
function sumarNotas(notas) {
  let suma = 0;
  for (let nota of notas) {
    suma += nota;
  }
  return suma;
}

// Función para calcular el promedio
function calcularPromedio(notas) {
  const suma = sumarNotas(notas);
  const promedio = suma / notas.length;
  return promedio;
}

// Notas del alumno
const notasAlumno = [6, 8, 9, 2, 5, 10];

// Mostrar resultados
console.log("Suma de notas:", sumarNotas(notasAlumno));
console.log("Promedio:", calcularPromedio(notasAlumno));
