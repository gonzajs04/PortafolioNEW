
document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();
    
})


function iniciarApp(){
   
    const botonMenu = document.querySelector('.toggle');
    const navegacion = document.querySelector('.navegacion');

    if(!(botonMenu ==null)){
   //MAL, PASAR A FUNCION A PARTE LLAMADA ABRIR MENU DE NAV
    botonMenu.addEventListener('click',()=>{
       
        navegacion.classList.add('visible');
        botonMenu.classList.add('novisible');
    })
}

  //MAL, HACER EN FUNCION APARTE LALMADA CERRAR NAVEGACION


    const botonCerrar = document.querySelector('.close');

    if(!(botonCerrar == null)){
     botonCerrar.addEventListener('click',()=>{

        navegacion.classList.remove('visible');
        botonMenu.classList.remove('novisible');

        })
    }
        

   //FUNCION PARA BAJAR FLUIDO DE SECCION AL TOCAR LINK NAV
   const enlaces = document.querySelectorAll('.smooth');

     enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            
           const href = e.target.attributes.href.value;
   
            const seccion = document.querySelector(href);
 
            seccion.scrollIntoView({behavior: 'smooth'});
         
        })
     })




    /**Enviar mail con form de contacto */
    const botonEnviar = document.querySelector('.btn-enviar');
   if(!(botonEnviar == null)){ //CONTROLO SI EXISTE UNA CLASE LLAMADA BOTON ENVIAR EN MI ARCHIVO HTML
    botonEnviar.addEventListener('click',(e)=>{
        e.preventDefault();
        enviarMail(e);
      
    });
   }

   //ACTIVAR DARK-MODE
   const btnDark = document.querySelector('.btn-dark');
   btnDark.addEventListener('click',(e)=>{
    activarDark(e);
   })
            
 


 
}


function activarDark(e){
    const body = document.querySelector('body');
    
    if(body.className == 'dark-mode'){
        body.classList.remove('dark-mode');
    }
    else{
        body.classList.add('dark-mode');
    }

}

function enviarMail(e){
        e.preventDefault();
        const entidad = document.querySelector("#entidad"); //selecciono EL SELECT DE MI HTML, QUE TIENE LA ENTIDAD, YA SEA OPERSONA O EMPRESA
        const selected = entidad.options[entidad.selectedIndex].text;
        //SELECCIONO LAS OPCIONES DE ENTIDAD, QUE PUEDEN SER 1(PERSONA) O 2(EMPRESA) Y DEPENDIENDO DE SI ES 1 O 2, AGARRO EL TEXTO CON EL .TEXT, PARA QUE ME ARROJE PERSONA O EMPRESA

         const email = document.querySelector("#email").value;
         const nombre = document.querySelector("#nombre").value;
         const msg = document.querySelector("#mensaje").value;
      
         //NECESITO REDIRECCIONARME A ALGUNA PLATAFORMA PARA ENVIAR MAIL, POR LO QUE PONEMOS
            //WINDOW.LOCATION.HREF PARA ESPECIFICAR UN MAIL, UN TITULO Y UN CUERPO
            //PARA EL BODY, VAMOS A TENER QUE USAR UN URL ENCODER, EN EL CUAL LE VAMOS A TENER QUE PONER NOMBRE: ALGO
            //EMAIL:ALGO
            //MENSAJE:ALGO
            //PERSONA:ALGO: LE DAMOS A ENCODE Y NOS VA A GENERAR UNA URL RANDOM. COMO SE PUEDE VER, TENEMOS QUE COLOCAR LAS CONSTANTES AL LADO DE CADA UNO DE LOS ATRIBUTOS DE LA LISTA, ES DECIR, NOMBRE,EMAIL, MSG ETC..
            //EJ:
            //`ESTE ES MI MENSAJE CON MI ${CONSTANTE}`
         window.location.href = `mailto:hernandezgonzalo5845@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A%20${nombre}%0AEmail%3A%20${email}%0AMensaje%3A%20${msg}%0AEntidad%3A%20${selected}`;

}


