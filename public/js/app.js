var $ = el => document.querySelector(el);
document.addEventListener("DOMContentLoaded", event => {
   
    let navegables = document.getElementsByName("navegables");
    
    let modulo;
    navegables.forEach(element => {
        element.addEventListener('click', e=>{
            e.stopPropagation();
            modulo = e.toElement.dataset.modulo; 
            solicitarVista(modulo);
        });
        
    });

  
});

function solicitarVista(modulo)
{
switch(modulo){
    case 'alumnos':
        ponerVista(modulo);
        break;

    case 'docentes':
        ponerVista(modulo);
        break;  
}

}

function ponerVista(modulo){
    fetch(`public/vistas/${modulo}/${modulo}.html`).then(resp => resp.text()).then(resp => {
        $(`#vistas-${modulo}`).innerHTML = resp;
    
        let btnCerrar = $(".close");
        btnCerrar.addEventListener("click", event => {
            $(`#vistas-${modulo}`).innerHTML = "";
        });
    
        let cuerpo = $("body"),
            script = document.createElement("script");
        script.src = `public/vistas/${modulo}/${modulo}.js`;
        cuerpo.appendChild(script);
    });
}