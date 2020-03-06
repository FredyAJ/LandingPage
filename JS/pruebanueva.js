// Smooth Scroll on clicking nav items
$('nav a').click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
        scrollTop: $($href).offset().top
    }, 1000);
    return false;
});

// back to top
$('#toTop a').click(function () {
    $('body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

// Parallaxing + add class active on scroll
$(document).scroll(function () {

    // parallaxing
    var $movebg = $(window).scrollTop() * -0.3;
    $('.portion').css('background-positionY', ($movebg) + 'px');

    // add class active to nav a on scroll
    var scrollPos = $(document).scrollTop() + 100;
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav a').removeClass("active");
            currLink.addClass("active");
        }
    });

    // changing padding of nav a on scroll
    if (scrollPos > 250) {
        $('nav a').addClass('small');
        $('nav img').addClass('move');
        $('nav span').removeClass('movetext');
    } else {
        $('nav a').removeClass('small');
        $('nav img').removeClass('move');
        $('nav span').addClass('movetext');
    }

});
function validarForm() {
    //alert("Validando");
    var verificar = true;
    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    var formulario = document.getElementById("contacto-frm");
    var nombre = document.getElementById("nombre");
   
    var email = document.getElementById("email");
    
    var asunto = document.getElementById("asunto");
    var comentarios = document.getElementById("comentarios");

    if (!nombre.value) {
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar = false;
    }
    else if (!expRegNombre.exec(nombre.value)) {
        alert("El campo nombre solo acepta letras y espacios en blanco");
        nombre.focus();
        verificar = false;
    }
    
    else if (isNaN(edad.value)) //isNotaNumber
    {
        alert("El campo edad solo acepta números");
        edad.focus();
        verificar = false;
    }
   
    else if (!email.value) {
        alert("El campo email es requerido");
        email.focus();
        verificar = false;
    }
    else if (!expRegEmail.exec(email.value)) {
        alert("El campo email no es valido");
        email.focus();
        verificar = false;
    }
   
    else if (!asunto.value) {
        alert("El campo asunto es requerido");
        asunto.focus();
        verificar = false;
    }
    else if (!comentarios.value) {
        alert("El campo comentarios es requerido");
        comentarios.focus();
        verificar = false;
    }
    else if (comentarios.value.length > 255) {
        alert("El campo comentarios no puede tener más de 255 caracteres");
        comentarios.focus();
        verificar = false;
    }

    if (verificar) {
        alert("Se ha enviado el formulario");
        document.contacto_frm.submit();
    }
}

function limpiarForm() {
    
    document.getElementById("contacto-frm").reset();
}

window.onload = function () {
    var botonEnviar, botonLimpiar;
    botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarForm;

    botonEnviar = document.contacto_frm.enviar_btn;
    botonEnviar.onclick = validarForm;
}


