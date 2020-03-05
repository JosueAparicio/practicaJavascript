

function monedas(){
    
    let de = document.getElementById("cboDe").Value,
    a = document.getElementById("cboA").Value,
    cantidad = document.getElementById("txtCantidadConversores").Value,
     res = document.getElementById("lblRespuesta").Value;

     let monedas = {
     'dolar':1,
     'colones':8.75,
     'yenes':111.27,
     'rupia':69.75,
     'lempiras':24.36,
     'peso mx':19.36,
     'bitcoin':0.00026,



   };

   
   res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;

}

// JOSUE ISAAC APARICIO DÍAZ USIS028518

