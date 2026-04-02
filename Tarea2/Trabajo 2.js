const nombre = prompt ('Ingrese su nombre: ');
let edad = parseInt((prompt ('Ingrese su edad: ')));
const contrasena = prompt ('Ingrese la contrasena: ');

if (contrasena.length < 6){
    alert('Ingrese una contrasena mas larga :p');
}
else if (nombre == ''){
    alert('El nombre no puede estar vacio.');
}
else if (edad < 18){
    alert('Ingrese una edad valida.');
}
else {
    console.log('Accediste correctamente!!1!.');
    console.log('Nombre:'+ nombre);
    console.log('Edad:' + edad + ' anos');

    edad = edad + 10;
    console.log('Dentro de 10 anos vas a tener:' + edad + 'anos.')
}

