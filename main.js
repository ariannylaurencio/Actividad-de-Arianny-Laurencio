// alert("hola mundo")
// //promt para ingresar valores del usuario

// var nombreUS = prompt("ingresa tu nombre")

// //alert para mostrar mensaje al usuario
// //alert(nombreUS + "bienvenido a la api de rick and morty")

// var numero = parseInt(prompt("ingresa un numero"))

// var numero2 = parseInt(prompt("ingresa otro numero"))

// var suma = numero + numero2;
// alert("la suma de los numeros es: "+ suma)

function personajes(done) {
    const url=  'https://rickandmortyapi.com/api/character';

    fetch(url)
    .then(Resp => Resp.json())
    .then(data => done(data))
    .catch(error => console.log(error))
    .finally(() => console.log("finalizado"));
        
    
    

    

}


function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

personajes(mostrarDatos)
