let panelBtn = document.querySelector(".panel-btn")
let panel = document.querySelector(".panel")
let menuLink = document.querySelector(".menu a")
    const d = document;
 
    d.addEventListener("click", (e) => {

      //alert("a")
       if(e.target===panelBtn || e.target===(`${panelBtn} *`)){
         //alert("b")
          //buscame el segundo elemento(".panel") y ponle la clase ("is-active") || ahora estoy haciedo esto: (panel-btn*) osea todo lo q es dentro del boton, me refiero a las rayas de la hamburguesa... otra cosa panelBtn es = panel-btn
          panel.classList.toggle("is-active")
 
          //esta clase se la agregue yo al boton y para q funcione la animacion hamburguesa el boton debe tener la clase "is-active", asi q se la agrego de forma dinamica
          panelBtn.classList.toggle("is-active")
       }
 
       //cuando toque algun link  del menu q se cierre el menu, uso active
       if(e.target===menuLink){
          panel.classList.remove("is-active")
          panelBtn.classList.remove("is-active")
       }
    });//end addEventListener
 