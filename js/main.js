$(document).ready(function(){
    // Menú Hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    // Menú Hamburguesa "2"
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    // Cambio de estilo de header
    $(window).on("scroll",function(){
        var posicion = $("#primera").offset();
        // console.log(posicion);
        if ($(window).scrollTop() > posicion.top -50){
            $("header").addClass("normal");
            $(".logo-normal").show();
            $(".logo-blanco").hide();
        } else {
            $("header").removeClass("normal");
            $(".logo-normal").hide();
            $(".logo-blanco").show();
        }
    });
    // Scroll suave
    $("a").on("click",function(){
        if(this.hash !== ""){
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            },800);
        }
    });
    // Pestañas
    $(".pestanyas li").click(function(){
        var pest_id = $(this).attr("pest");
        // console.log(pes_id);
        $(".pestanyas li").removeClass("pulsada");
        $(".contenido").removeClass("mostrado");
        
        $(this).addClass("pulsada");
        $("#"+pest_id).addClass("mostrado");
    });
    // Menú 3
    $(".btn-menu3").click(function(){
        $(".menu3").animate({width:"toggle"},500);
        $(".btn-menu3 span").toggleClass("girada");
    });    
    // Ventana modal
    $(".open").click(function(){
        $(".modal, .overlay").addClass("visible");
    });
    $(".close").click(function(){
        $(".modal, .overlay").removeClass("visible");
    });

});