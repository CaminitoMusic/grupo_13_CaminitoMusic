//************************************************************ */
// Realiza la conexion (simulada localmente).
// Arma la lista de artistas (menu artistas).
// Muestra el menu artistas o lo oculta segun estado.
//************************************************************ */

//etiqueta para el listener.
const btnArt = document.querySelector('.boton-artistas');        //div boton artistas.

//Ruta de los datos de la similAPI, en este caso es local.
const urlAPI = '../assets/BBDD/data_Bandas.json';
//span texto artistas.
const textoBtnArt = document.querySelector('#btnArtistas');
//div Menu artistas.
const menuArtista = document.querySelector('#menu-artistas');


//************** FUNCIONES   ***********************/
//Funcion para armar el listado de artistas -menu-.
function armaListadoArtistas(datos) {
  let listadoArtista = '';
  datos.forEach(banda => {  //genero la lista (menu) artistas/bandas.
    let nombreBanda = banda.nombre.replace(/\s+/g, ''); //quito los espacios en blanco*/
    listadoArtista += `
                <li><a class="linkArtista" href="../pages/${nombreBanda}.html" id="${banda.codigo}">${banda.nombre}</a></li>
                `;
  })
  menuArtista.innerHTML = listadoArtista; // lo pasa a la etiqueta html y lo muestra.
}

//Funcion para mostrar u ocultar el menu artistas. 
function muestraOcultaMenu() {
  //cambia el texto del boton artistas a "Ocultar".
  if (textoBtnArt.textContent == 'Artistas') {
    textoBtnArt.textContent = 'Ocultar';
    menuArtista.style.display = 'block';
    menuArtista.style.marginRight = '0%';
    menuArtista.style.transition = 'all 0.5s';
  } else {
    textoBtnArt.textContent = 'Artistas';
    menuArtista.style.display = 'none';
    menuArtista.style.marginRight = '100%';
    menuArtista.style.transition = 'all 0.5s';
  }
};

// Funcion para saber que link fue clickeado.
/* function detectaBanda(evento) {
  let bandaSel = document.getElementById
} */

//************  Funcion principal para la conexion a la similAPI-JSON. 
// Obtiene la cantidad de bandas que haya en el JSON.
const obtieneInfo = async () => {
const endpoint = `${urlAPI}`;

  try {

    const respuesta = await fetch(endpoint);
    if (respuesta.ok) {
      const respuestaJson = await respuesta.json();
      // arma el listado de artistas (menu).
      armaListadoArtistas(respuestaJson);

      // mostrar/Ocultar el menu artistas.
      muestraOcultaMenu();

      // Detectar que artistas eligio el usuario.
      //document.getElementsByClassName("linkArtista").addEventListener('click', detectaBanda);
    } 

  }
  catch (error) {
    console.log(error);
  }

}/*********/

/*
window.addEventListener('DOMContentLoaded', inicio);
const inicio = () => {
  btnArt.addEventListener('click', obtieneInfo);
}*/


window.onload =  () => {
  // ********* EJECUCION DEL SCRIPT ************/
  btnArt.addEventListener('click', obtieneInfo);
}