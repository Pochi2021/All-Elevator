const d = document;
const $main = d.querySelector('main');

/* no uso metodo ni data pq estoy pidiendo archivos q estan en el mismo servidor, con esta funcion obtengo el HTML de un archivo externo */
const getHTML = (options) => {
  let { url, success, error } = options;//destructuracion
  const xhr = new XMLHttpRequest();//instancio

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      /* no tengo q parcear pq necesito es la cadena html */
      let html = xhr.responseText;
      success(html);
      //console.log(html)
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}:${message}`);
    }
  });//end readystatechange

  xhr.open("GET", url); //metodo
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8"); //cabecera
  xhr.send(); //queda asi pq n estoy solicitando datos sino el archivo

}//end getHTML

//CARGO EL HOME CUANDO INICIA DE MANERA DINAMICA
//cunado cargue el  enlace ya no tiene q llevar a ese archivo (no mas esto = http://127.0.0.1:5500/ajax-ejercicios/assets/home.html), sino traerme el contenido HTML q se encuentra en el, durante la carga del documento
d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({//objeto opciones, de la function q hice arriba
    url: "./paginas/home.html",
    success: (html) => $main.innerHTML = html,//en el contenedor main, agregame el contenido del html q estoy trayendo
    error: (err) => $main.innerHTML = `<h1>${err}</h1>`,
  });
});

//LOS DEMAS ENLACES
d.addEventListener("click", (e) => {
  if (e.target.matches(".menu_enlace")) {//coincida con los enlacs del menu
    e.preventDefault(); //freno todos los enlaces
    getHTML({
      url: e.target.href, //los elemntos q estan en el enlace
      success: (html) => $main.innerHTML = html,
      error: (err) => $main.innerHTML = `<h1>${err}</h1>`,
    })
  }
})