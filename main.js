const griger = {
    name: "Griger",
    age: 18,
    cursosAprobados: ['Curso terrible'],
    agregarCurso(nuevoCurso){
        console.log('This: ', this);
        console.log('This.cursosAprobados: ', this.cursosAprobados);
        this.cursosAprobados.push(nuevoCurso)
    }
}


// console.log(Object.keys(griger))
// console.log(Object.getOwnPropertyNames(griger))
// console.log(Object.entries(griger))


Object.defineProperty(griger, 'OS', {
    value: 'Windows',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(griger, 'navigator', {
    value: 'Chrome',
    writable: true,
    enumerable: false,
    configurable: true
})

Object.defineProperty(griger, 'editor', {
    value: 'VSCode',
    writable: true,
    enumerable: false,
    configurable: true
})

Object.defineProperty(griger, 'terminal', {
    value: 'WSL2',
    writable: true,
    enumerable: true,
    configurable: true
})


Object.freeze(griger)


//Object.entries(griger) [3] [1] ('Curso despiadado')

// griger.agregarCurso("curso despiadado")
// console.log(griger.cursosAprobados);
console.log(Object.getOwnPropertyDescriptors(griger))
console.log(griger.OS)