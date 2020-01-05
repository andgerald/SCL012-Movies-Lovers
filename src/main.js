
import * as modulo from './data.js';


//*********************************          
// Llamado de función de búsqueda de película         
document.getElementById("buttonSearch").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";
  let stringMovie = document.getElementById("search").value;
  //        let stringMovie = 'Gravity';
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=a4afc4d4&t='+ stringMovie)
        .then(response => {
          return response.json()
        })
        .then(data => {
         
          // Work with JSON data here
          let test = data;
          
          console.log(data);
          document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Title}</li><li><img src = ${data.Poster}></li></ul><div class='plot'>${data.Plot}<hr><h5><br>Año de estreno: ${data.Year}</div></div></div>`;
       
        })
}); 





/*
  fetch('http://img.omdbapi.com/?i=tt3896198&apikey=a4afc4d4&')
    .then(response => {
      return response.json()
    })
    .then(data => {
     
      // Work with JSON data here
      console.log(data)
      
      //for (let i = 0; i < test.length; i += 1) {
       
       // document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li><img src = ${test[i].Poster}></li></ul></div>`;
     // }
    })
    .catch(err => {
   
    })
*/
/*

const showValues = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li><img src = ${data[i].Poster}></li></ul></div>`;
  }
};

//LLAMADO FUNCIÓN MOSTRAR DATOS
window.onload = () => {
  showValues();
};*/
/*
// LLAMADO FUNCIÓN DE FILTRADO POR CASA
document.getElementById('houses').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataHouse(POTTER, document.getElementById('houses').value));
});

// LLAMADO FUNCIÓN DE FILTRADO POR ESPECIE
document.getElementById('characterSpecies').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataSpecies(POTTER, document.getElementById('characterSpecies').value));
});

// LLAMADO FUNCIÓN DE FILTRADO POR ASCENDENCIA
document.getElementById('characterAncestry').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.filterDataAncestry(POTTER, document.getElementById('characterAncestry').value));
});

// LLAMADO FUNCIÓN PARA ORDENAR
document.getElementById('sortCharacters').addEventListener('change', () => {
  document.getElementById('results').innerHTML = '';
  showValues(modulo.dataSort(POTTER, document.getElementById('sortCharacters').value));
});

*/