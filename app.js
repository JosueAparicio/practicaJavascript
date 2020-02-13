
// JOSUE ISAAC APARICIO DÍAZ USIS028518

document.addEventListener("DOMContentLoaded", e=>{

    document.addEventListener("submit", event=>{
        event.preventDefault();

        let de = document.querySelector("#cboDe").Value,
         a = document.querySelector("#txtCantidad").Value,
         cantidade = document.querySelector("#cboDe").Value,
          $res = document.querySelector("#lblRespuesta").Value;

          let monedas = {
          'dolar':1,
          'euro':0.92,
          'quetzal':7.63,
          'lempira':24.86,
          'cordoba':34.20
        };

        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;

    });
});

