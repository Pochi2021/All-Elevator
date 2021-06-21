document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    //console.log("el: ",el, "- url: ", url)
    //PASO A
    const xhr = new XMLHttpRequest();//instancio

    //PASO B
    xhr.addEventListener("readystatechange", (e) => {
      if(xhr.readyState !== 4) return;

      if(xhr.status >= 200 && xhr.status < 300){
        //outerHTML: devuelve no solo el contenido sino tambien reemplaza las etiquetas
        el.outerHTML= xhr.responseText;//asigno todo el contenido del html y reemplazo a la etiqueta y al contrenido viejo
      } else{
        let message = 
        xhr.statusText || 
        "Error al cargar el archivo, verifica que estes haciendo la peticion por http o https"; //lo ideal es ejecutar ajax en un entorno de servidor
        el.outerHTML =`<div><p>Error ${xhr.status}: ${message}</p></div>`
      }
    });//end readystatechange

    //PASO C
    xhr.open("GET", url);//metodo
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");//cabecera
    xhr.send();
  }//end includeHTML

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));//el=div, url="assets2/header.html"
})