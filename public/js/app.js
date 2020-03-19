var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded", event => {
   
    let mAlumnos = document.getElementById("alumnos");
    let mDocentes = document.getElementById("docentes");



    mAlumnos.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "alumnos";
        colocarVista(modulo);

    });

    mDocentes.addEventListener("click", e=>{
        e.stopPropagation();
        let modulo = "docentes";
        colocarVista(modulo);
    
    });

  
   /* 
    let modulo;
    navegables.forEach(element => {
        element.addEventListener('click', e=>{
            e.stopPropagation();
            modulo = e.toElement.dataset.modulo; 
            solicitarVista(modulo);
        });
        
    });

  */
}); 
 function colocarVista(modulo){

    fetch(`public/vistas/${modulo}/${modulo}.html`).then( resp => resp.text()).then( resp => {

        document.getElementById(`vistas-${modulo}`).innerHTML = resp;
        let btnCerrar = $(".close");

        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });

        let cuerpo = $("body"), script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
            
    });

 }

