var fot=document.getElementById("foto");

fot.addEventListener("mouseover",cambioImagen,false);

fot.addEventListener("mouseout",restaurar,false)

function cambioImagen(){
    $("#foto").addClass("oscurecerImagen");   
}

function restaurar(){
    $("#foto").removeClass("oscurecerImagen");

}

$(".respuesta").hide();

$(".faq h3").hover(darColor,quitarColor);

function darColor(){
    $(this).addClass("colorRespuesta");
}
function quitarColor(){
    $(this).removeClass("colorRespuesta");
}

$(".faq h3").click(function(){

    $(this).next(".respuesta").fadeToggle(300);
    //$(this).replaceWith(<h3>Hola</h3>);
    
   }

);
var activo=false;
function cambiaColor(){
    if(activo==false){
        $("#titulo").css("color","aquamarine");
    activo=true;
    }
    else{ $("#titulo").css("color","#fff");
    activo=false;}
}
$("#boton").click(cambiaColor);

window.onload = function(){
    const IMAGENES =[
        './imagen1.jpg', './imagen2.jpg', './imagen3.webp',
    ]

    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#carrusel');

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    renderizarImagen();
}