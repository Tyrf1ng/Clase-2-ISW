const persona = {
    nombre: 'Jonathan',
    edad: 22,
    genero: 'Masculino'
}
console.log(persona);

const caja = {
    componentes: ['cuadernos','lapices','papel',
        'fotografias'],
    estado: 'bueno'
};
console.log(caja);
console.log(caja.componentes[0]);
console.log(caja.componentes[1]);
console.log(caja.componentes[2]);
console.log(caja.componentes[3]);
console.log(caja.estado);

console.log(typeof caja);
console.log(typeof caja.componentes);
console.log(typeof caja.estado);
