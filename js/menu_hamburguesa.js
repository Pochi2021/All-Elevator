export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
 
    d.addEventListener("click", (e) => {

      alert("a")
       if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
          //buscame el segundo elemento(".panel") y ponle la clase ("is-active") || ahora estoy haciedo esto: (panel-btn*) osea todo lo q es dentro del boton, me refiero a las rayas de la hamburguesa... otra cosa panelBtn es = panel-btn
          d.querySelector(panel).classList.toggle("is-active")
 
          //esta clase se la agregue yo al boton y para q funcione la animacion hamburguesa el boton debe tener la clase "is-active", asi q se la agrego de forma dinamica
          d.querySelector(panelBtn).classList.toggle("is-active")
       }
 
       //cuando toque algun link  del menu q se cierre el menu, uso active
       if(e.target.matches(menuLink)){
          d.querySelector(panel).classList.remove("is-active")
          d.querySelector(panelBtn).classList.remove("is-active")
       }
    });//end addEventListener
 }