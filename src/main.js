import MARVEL from './data/marvel/marvel.js';
import DCCOMICS from './data/dccomics/dccomics.js';
//FUNCIÓN QUE DESPLIEGA POSTERS AL INICIAR LA PÁGINA
window.onload = () => {
  fetch('http://www.omdbapi.com/?s=batman&apikey=4ceb79a2')
  .then(response => {
    return response.json()
  })
  .then(data => {
  // Work with JSON data here
  //document.getElementById('results1').innerHTML = "";
  for (let i = 1; i < 6; i += 1) {  
    if(data.Search[i].Poster!=='N/A'){   
     document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
    }
  }
  })
 
  fetch('http://www.omdbapi.com/?s=thor&apikey=4ceb79a2')
  .then(response => {
    return response.json()
  })
  .then(data => {
  // Work with JSON data here
  console.log(data);
  for (let i = 0; i < 5; i += 1) {  
    if(data.Search[i].Poster!=='N/A'){   
     document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
    }
  }
  }) 

  .catch((error)=> {
    //handle error
    console.log("error",error)
  })
  return false;
  };
  
  //FUNCIONALIDAD DE CAMBIO DE PELÍCULAS
  document.getElementById("buttonGo1").addEventListener("click", function (){
    //let titleMovie = document.getElementById("searchTitle").value;
    fetch('http://www.omdbapi.com/?s=green lantern&apikey=4ceb79a2')
    .then((response) => {
      if (response.ok){        
      return response.json();
    }
    throw response;
    })
  .then(data => {
  // Work with JSON data here
  console.log(data);
  document.getElementById('results1').innerHTML = "";
  for (let i = 0; i < 5; i += 1) {  
    if(data.Search[i].Poster!=='N/A'){   
     document.getElementById('results1').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
    }
  }
  })
  .catch((error)=> {
    //handle error
    console.log("error",error)
  })
  return false;
  }); 
  

  document.getElementById("buttonGo2").addEventListener("click", function (){
    //let titleMovie = document.getElementById("searchTitle").value;
    fetch('http://www.omdbapi.com/?s=hulk&apikey=4ceb79a2')
    .then((response) => {
      if (response.ok){        
      return response.json();
    }
    throw response;
    })
  .then(data => {
  // Work with JSON data here
  console.log(data);
  document.getElementById('results2').innerHTML = "";
  for (let i = 0; i < 5; i += 1) {  
    if(data.Search[i].Poster!=='N/A'){   
     document.getElementById('results2').innerHTML += `<div class ="todas"><ul class='lista'><li><img src = ${data.Search[i].Poster}></li></ul></div>`;
    }
  }
  })
  .catch((error)=> {
    //handle error
    console.log("error",error)
  })
  return false;
  }); 
  
  
//BÚSQUEDA CON BOTÓN
//*********************************          
// FUNCIÓN DE BÚSQUEDA DE PELÍCULA POR TÍTULO   
document.getElementById("buttonSearch").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";
  let titleMovie = document.getElementById("searchTitle").value;
  
      fetch('http://www.omdbapi.com/?t=' + titleMovie+ '&apikey=4ceb79a2')
      .then((response) => {
        if (response.ok){        
        return response.json();
      }
      throw response;
      })
        .then(data => {
         // Work with JSON data here
           document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Title}</li><li><img src = ${data.Poster}></li></ul><div class='plot'>${data.Plot}<hr><h5><br>Año de estreno: ${data.Year}</div></div>`;
        })
    
        .catch((error)=> {
          //handle error
          console.log("error",error)
        })
        return false;
  }); 


//*********************************          
// FUNCIÓN DE BÚSQUEDA DE PELÍCULA QUE CONTIENEN UN STRING QUE INGRESA USUARIO
//********************************* 
document.getElementById("buttonSearching").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";
  let stringMovie = document.getElementById("stringSearching").value;
 //   fetch('http://www.omdbapi.com/?s='+ stringMovie + '&apikey=4ceb79a2')
  fetch('http://www.omdbapi.com/?s='+ stringMovie + '&apikey=4ceb79a2&Type=movie')
        .then(response => {
          return response.json()
        })
        .then(data => {
         // Work with JSON data here
         for (let i = 0; i < data.Search.length; i += 1) {  
          if(data.Search[i].Poster!=='N/A'){   
           document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Search[i].Title}</li><li><img src = ${data.Search[i].Poster}></li></ul><div class='plot'>${data.Search[i].Type}${data.Search[i].imdbID}<hr><h5><br>Año de estreno: ${data.Search[i].Year}</div></div>`;
          }
        }
       
      })
    
      .catch((error)=> {
        //handle error
        console.log("error",error)
      })
      return false;
}); 
/*
const showValues = (data) => {
  for (let i = 0; i < data.length; i += 1) {
    document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data[i].numberQuestion}</li><li><img src = ${data[i].question}></li></ul><div class='plot'>${data[i].answers.A}<hr><h5><br>Año de estreno: ${data[i].answers.B}></div></div></div>`;
  }
};
*/
document.getElementById("buttonPlay").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";

  for (let i = 0; i < MARVEL.length; i += 1) {
  
    document.getElementById('results0').innerHTML += `<div class ="trivia"><ul class='lista'><li>PREGUNTA ${MARVEL[i].numberQuestion}</li><br><li> ${MARVEL[i].question}</li><br><li>${MARVEL[i].answers.A}</li><li> ${MARVEL[i].answers.B}</li><li>${MARVEL[i].answers.C}</li></ul></div><input type='text' name="answer${i}" id="answer${i}" class="texts" value="hola">`;
  }

}); 
/*
document.getElementById("buttonScore").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";

  for (let i = 0; i < MARVEL.length; i += 1) {
  
    document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>PREGUNTA ${MARVEL[i].numberQuestion}</li><br><li> ${MARVEL[i].question}</li><br><li> ${MARVEL[i].answers.A}</li><li><li> ${MARVEL[i].answers.B}</li><li> ${MARVEL[i].answers.C}</li><br><li>Respuestas correcta: ${MARVEL[i].correctAnswer} </ul></div>`;
  }

}); 
*/

//REVISIÓN DE RESPUESTAS
document.getElementById("buttonScore").addEventListener("click", function (){
document.getElementById('results').innerHTML = "";
  let a =[] ;
  let countCorrect=0;
  let countIncorrect = 0;

a[0]=document.getElementById("answer0").value;
a[1]=document.getElementById("answer1").value;
a[2]=document.getElementById("answer2").value;
a[3]=document.getElementById("answer3").value;
console.log(a);
  for (let i = 0; i < MARVEL.length; i += 1) {
  
  if(a[i]===MARVEL[i].correctAnswer){
    document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${MARVEL[i].numberQuestion} es correcta</li></ul></div>`;
    countCorrect++;

  }
  if(a[i]!==MARVEL[i].correctAnswer){
    document.getElementById('results').innerHTML += `<div class ="trivia"><ul class='lista'><li>La respuesta ${MARVEL[i].numberQuestion} es incorrecta</li></ul></div>`;
    countIncorrect++;
console.log(countIncorrect);
  }
  }

  document.getElementById('results0').innerHTML =  countCorrect+ '     '  + 'Respuestas correctas' + '     ' + countIncorrect + 'Respuestas incorrectas' + '\n'  ;
  
  
  


});




/*
//BOTÓN JUGAR
//*********************************          

// FUNCIÓN DE BÚSQUEDA DE PELÍCULA POR TÍTULO   
document.getElementById("buttonPlay").addEventListener("click", function (){
  document.getElementById('results').innerHTML = "";
 // let titleMovie = document.getElementById("searchTitle").value;
  
      fetch('.data/marvel.json')
      .then((response) => {
        if (response.ok){        
        return response.json();
      }
      throw response;
      })
        .then(data => {
         // Work with JSON data here
           document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.numberQuestion}</li><li><img src = ${data.question}></li></ul><div class='plot'>${data.answers.A}<hr><h5><br>Año de estreno: ${data.answers.B}></div></div></div>`;
        })
    
        .catch((error)=> {
          //handle error
          console.log("error",error)
        })
        return false;
  }); 

























//BÚSQUEDA CON BOTÓN
//*********************************          
// FUNCIÓN DE BÚSQUEDA DE PELÍCULA POR TÍTULO   
//document.getElementById("buttonSearch").addEventListener("click", function (){
  //document.getElementById('results').innerHTML = "";
  //let titleMovie = document.getElementById("searchTitle").value;
 //     fetch('http://www.omdbapi.com/?t=' + titleMovie+ '&apikey=4ceb79a2&plot=full')
 //       .then(response => {
  //        return response.json()
   //     })
    //    .then(data => {
         // Work with JSON data here
    //      document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Title}</li><li><img src = ${data.Poster}><li></ul><div class='plot'>${data.Genre}<hr><h5><br>Año de estreno: ${data.Plot}</div></div></div>`;
    //    })
  //}); 


/*










 //document.getElementById("buttonSearch").addEventListener("click", function (){
  //document.getElementById('results').innerHTML = "";
  //let directorMovie = document.getElementById("searchTitle").value;

 // for(let a = 0; a < 10; a += 1) {  
 //   for(let b = 0; b < 10; b += 1) {  
  //    for(let c = 0; c < 10; c += 1) {  
   //     for(let d = 0; d < 10; d += 1) {  
      //    for(let e = 0; e < 10; e += 1) {  
         // for(let f = 0; f < 10; f += 1) {  
            //  for(let i = 1; i < 10; i += 1) {         
                fetch('http://www.omdbapi.com/?s=tarzan&apikey=4ceb79a2')
                .then(response => {
                  return response.json()
                })
                .then(data => {
                // Work with JSON data here
               console.log(data);
                //let direc = data.Year;
                 // if(direc === directorMovie){        
              
                  for (let i = 0; i < data.Search.length; i += 1) {  
                    if(data.Search[i].Poster!=='N/A'){   
                     document.getElementById('results').innerHTML += `<div class ="card"><ul class='lista'><li>${data.Search[i].Title}</li><li><img src = ${data.Search[i].Poster}></li></ul><div class='plot'>${data.Search[i].Type}${data.Search[i].imdbID}<hr><h5><br>Año de estreno: ${data.Search[i].Year}</div></div>`;
                    }
                  }






                 
                 // document.getElementById('results').innerHTML += `<div class ="todas"><ul class='lista'><li>${data.Title}</li><li><img src = ${data.Poster}><li></ul></div>`;
               //   }
                })
          //    }
       //    }
      //    } 
    //    }
   //   }
  //  }
 // }




 //}); 









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