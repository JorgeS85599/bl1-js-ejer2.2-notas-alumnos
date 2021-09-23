const funciones = require('../public/src/functions');

const notas = [5, 6.2, 9, 3.1, 6]
const juanSegura =   {
  id: 7,
  nia: 123456,
  alumno: {
      nombre: "Juan",
      apellido: "Segura"
  },
  notas: [
      { modulo: 'dwec', nota: 5.2},
      { modulo: 'dwes', nota: 6.8},
      { modulo: 'diw', nota: 4.5},
      { modulo: 'daw', nota: 7.3},
      { modulo: 'eie', nota: 8},
      { modulo: 'ing', nota: 5.1}
  ]
}

var datos
// reinicio datos porque tras ordenar se quedaba ordenado
beforeEach(() => {
  datos=[
    {
        id: 1,
        nia: 165432,
        alumno: {
            nombre: "Marta",
            apellido: "Rodríguez"
        },
        notas: [
            { modulo: 'dwec', nota: 7.2},
            { modulo: 'dwes', nota: 4.8},
            { modulo: 'diw', nota: 8.5},
            { modulo: 'daw', nota: 9.3},
            { modulo: 'eie', nota: 6},
            { modulo: 'ing', nota: 6.1}
        ]
    },
    {
        id: 3,
        nia: 135642,
        alumno: {
            nombre: "Marc",
            apellido: "Monllor"
        },
        notas: [
            { modulo: 'dwec', nota: 3.2},
            { modulo: 'dwes', nota: 3.8},
            { modulo: 'diw', nota: 4.5},
            { modulo: 'daw', nota: 5.3},
            { modulo: 'eie', nota: 3.8},
            { modulo: 'ing', nota: 2.1}
        ]
    },
    {
        id: 4,
        nia: 126534,
        alumno: {
            nombre: "Anna",
            apellido: "Ábalos"
        },
        notas: [
            { modulo: 'dwec', nota: 5.6},
            { modulo: 'dwes', nota: 6},
            { modulo: 'diw', nota: 7.5},
            { modulo: 'daw', nota: 5.3},
            { modulo: 'eie', nota: 9},
            { modulo: 'ing', nota: 9.1}
        ]
    },
    {
        id: 5,
        nia: 153206,
        alumno: {
            nombre: "Fran",
            apellido: "Ñu"
        },
        notas: [
            { modulo: 'dwec', nota: 6.2},
            { modulo: 'dwes', nota: 9.8},
            { modulo: 'diw', nota: 6.5},
            { modulo: 'daw', nota: 8.3},
            { modulo: 'eie', nota: 9},
            { modulo: 'ing', nota: 7.1}
        ]
    },
    {
        id: 6,
        nia: 198765,
        alumno: {
            nombre: "Águeda",
            apellido: "Martí"
        },
        notas: [
            { modulo: 'dwec', nota: 9.2},
            { modulo: 'dwes', nota: 6.4},
            { modulo: 'diw', nota: 7.5},
            { modulo: 'daw', nota: 5.3},
            { modulo: 'eie', nota: 5},
            { modulo: 'ing', nota: 7.1}
        ]
    },
    {
        id: 7,
        nia: 123456,
        alumno: {
            nombre: "Juan",
            apellido: "Segura"
        },
        notas: [
            { modulo: 'dwec', nota: 5.2},
            { modulo: 'dwes', nota: 6.8},
            { modulo: 'diw', nota: 4.5},
            { modulo: 'daw', nota: 7.3},
            { modulo: 'eie', nota: 8},
            { modulo: 'ing', nota: 5.1}
        ]
    },
    {
        id: 9,
        nia: 182736,
        alumno: {
            nombre: "Felipe",
            apellido: "Creus"
        },
        notas: [
            { modulo: 'dwec', nota: 3.2},
            { modulo: 'dwes', nota: 2.8},
            { modulo: 'diw', nota: 2.5},
            { modulo: 'daw', nota: 4.3},
            { modulo: 'eie', nota: 5},
            { modulo: 'ing', nota: 5}
        ]
    },
    {
        id: 11,
        nia: 123456,
        alumno: {
            nombre: "Adrián",
            apellido: "Agulló"
        },
        notas: [
            { modulo: 'dwec', nota: 7.2},
            { modulo: 'dwes', nota: 9.8},
            { modulo: 'diw', nota: 7.5},
            { modulo: 'daw', nota: 4.3},
            { modulo: 'eie', nota: 5},
            { modulo: 'ing', nota: 8}
        ]
    },
    {
        id: 12,
        nia: 122334,
        alumno: {
            nombre: "Rosa",
            apellido: "Reig"
        },
        notas: [
            { modulo: 'dwec', nota: 5},
            { modulo: 'dwes', nota: 8.8},
            { modulo: 'diw', nota: 5},
            { modulo: 'daw', nota: 7.2},
            { modulo: 'eie', nota: 5},
            { modulo: 'ing', nota: 8.1}
        ]
    }
  ]
})

describe('buscaAlumno', () => {
  test('devuelve el alumno si existe el nia', () => {
    const nia = 123456
    const result = funciones.buscaAlumno(datos, nia)
    expect(result).toEqual(juanSegura)
  })

  test('devuelve undefined si no existe el nia', () => {
    const nia = 999999
    const result = funciones.buscaAlumno(datos, nia)
    expect(result).toBeUndefined()
  })
})

describe('modulosAprobadosDelAlumno', () => {
  test('devuelve el array de módulos aprobados de JuanSegura', () => {
    const result = funciones.modulosAprobadosDelAlumno(juanSegura.notas)
    expect(result).toHaveLength(5)
    expect(result).toEqual(["dwec", "dwes", "daw", "eie", "ing"])
  })
})

describe('media', () => {
  test('devuelve la media de un array de números', () => {
    const result = funciones.media(notas)
    expect(result).toBe('5.86')
  })
})

describe('ordenaAlumnosPorNia', () => {
  test('devuelve el array correctamente ordenado por nia', () => {
    const result = funciones.ordenaAlumnosPorNia(datos)
    expect(result).toHaveLength(9)
    expect(result[0].nia).toBe(122334)
    expect(result[7].nia).toBe(182736)
  })
})

describe('ordenaAlumnosPorApellido', () => {
  test('devuelve el array correctamente ordenado por apellido', () => {
    const result = funciones.ordenaAlumnosPorApellido(datos)
    expect(result).toHaveLength(9)
    expect(result[0].alumno.apellido).toBe('Ábalos')
    expect(result[7].alumno.apellido).toBe('Rodríguez')
  })
})

describe('alumnosAprobadosDelModulo', () => {
  test('devuelve el array de aprobados de dwec', () => {
    const modulo = 'dwec'
    const result = funciones.alumnosAprobadosDelModulo(datos, modulo)
    expect(result).toHaveLength(7)
    expect(result).toEqual(["Marta Rodríguez", "Anna Ábalos", "Fran Ñu", "Águeda Martí", "Juan Segura", "Adrián Agulló", "Rosa Reig"])
  })

  test('devuelve un array vacío si no existe el módulo', () => {
    const modulo = 'sox'
    const result = funciones.alumnosAprobadosDelModulo(datos, modulo)
    expect(result).toHaveLength(0)
    expect(result).toEqual([])
  })

})

