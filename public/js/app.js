function init() {
    $("[class*='mostrar']").click(function (e) {
        let modulo = $(this).data("modulo"),
            form = $(this).data("form");

        $(`#vistas-${form}`).load(`public/vistas/${modulo}/${form}.html`, function () {
            $(`#btn-close-${form}`).click(() => {
                $(`#vistas-${form}`).html("");
            });
            init();
        }).draggable();
    });
}
init();
/*var $ = el => document.querySelector(el);
function init(){

document.addEventListener("DOMContentLoaded", event => {
   
            let mAlumnos = document.getElementById("alumnos"); // Instanciamos los elementos
            let mDocentes = document.getElementById("docentes"); //

            //SE AGREGAN LOS EVENTOS LISTENER PARA CADA VISTA
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
/
/
  
   }); 
} 

// ESTA FUNCION HACE LA PETICION Y COLOCA LA VISTA SEGUN EL MODULO QUE SE LE HA SIFO ENVIADO
 function colocarVista(modulo){

    fetch(`public/vistas/${modulo}/${modulo}.html`).then( resp => resp.text()).then( resp => {

            document.getElementById(`vistas-${modulo}`).innerHTML = resp;


            let btnCerrar = $(`#btn-close-${modulo}`);
            btnCerrar.addEventListener("click",event=>{
                $(`#vistas-${modulo}`).innerHTML = "";
            });

            import(`../vistas/${modulo}/${modulo}.js`).then(module=>{
                module.modulo();
            });
           
            
    });

 }
 init(); */


