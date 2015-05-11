// galeriaadfo por ADFO
(function($){
//$.fn.galeriaadfo=function(options){
	$.fn.galeriaadfo=function(options){
	//OPCIONES PARA INTERACTUAR CON EL PLUGIN
var optiondefaults={
duracionanimacion:150, //Duración de las animaciones o transiciones en milisegundos
animacionentrada:"entradaimg0",  //animacion de la entrada de imagen entradaimg0,entradaimg1,entradaimg2,entradaimg3,azar 
cambioimagen:"animacion",  //se activa cuando se cambia la imagen con las flechas de navagación, animacion/transicion
transicion:"linear", //transicion que se toma ya sea en animacion o en transicion ease/linear/ease-in/ease-out/ease-in-out/azar
animacioncambioimagen:"perseguir"   //si no es transicion se hara animacion, rebote/perseguir/aumentarreducir/azar
};
//TOMA EL VALOR DE LAS OPCIONES, YA SEAN LAS DE DEFECTO O LAS DEL USUARIO
var opciones=$.extend(optiondefaults,options);
return this.each(function(){
//FUNCIONES, SCRIPTS, EVENTOS DE MI GALERIA
var arraytransicionadfo=["ease","linear","ease-in","ease-out","ease-in-out"];
			 var arrayanimacioncambioadfo=["rebote","perseguir","aumentarreducir"];
var indiceimagenadfo,totalimagenesadfo,claseimagenadfo,tiempoanimacionadfo,transicionimagenadfo,animacionimagenadfo;
      tiempoanimacionadfo=opciones.duracionanimacion/1000;  
		//le da clic a los elementos de la galeria haga esto
		$(this).click(function(e) {
			claseimagenadfo=$(this).attr("class");
			$("body").append("<div class='galeriaadfo'><div class='contenedorimagen'><div class='tituloimagenadfo'><h1 id='nombreimagenadfo'></h1><div id='cerrargaleriaadfo'>X</div></div><div id='atrasimagenadfo'><div class='contenedorflechaizq'><img src='img/flechaadfoizq.png' class='flechaadfoizq'/></div></div><img id='imagencontenedor' src='img/loading.gif'/><div id='siguienteimagenadfo'><div class='contenedorflechader'><img src='img/flechaadfoder.png' class='flechaadfoder'/></div></div><div class='infoimagenadfo'><div class='nombregaleriaposicion'><span id='albumimagenadfo'></span><span id='posicionimagenadfo'></span>-<span id='totalimagenesadfo'></span></div><div id='descripcionimagenadfo'></div></div></div></div>");
			$("body").css("overflow","hidden");
			$(".galeriaadfo").css("display","inherit");
			$("#imagencontenedor").attr("src","");
            $("#imagencontenedor").removeAttr("style");	
			$("#imagencontenedor").attr("src",$(this).attr("href"));
			$("#nombreimagenadfo").html($(this).attr("id"));
			$("#albumimagenadfo").html($(this).attr("data-title"));
			$("#descripcionimagenadfo").html($(this).attr("title"));
			$("#totalimagenesadfo").html($("."+claseimagenadfo).length);
			indiceimagenadfo=$("."+claseimagenadfo).index(this);
			totalimagenesadfo=parseInt($("."+claseimagenadfo).length-1);
			$("#posicionimagenadfo").html(""+parseInt(indiceimagenadfo+1));
						var nav = navigator.appName;
			    if(nav == "Microsoft Internet Explorer"){
		$("#imagencontenedor").attr("src",$(this).attr("href"));
    }
	else{
		$("#imagencontenedor").error(function(e) {
              $("#imagencontenedor").attr("src","img/imagennodisponibleadfo.jpg");  
            });	
	}
	iniciosgaleriaadfo();
			altoanchoimagenadfo();

			var animacionentradaimagenadfo;	
			if(opciones.animacionentrada=="azar"){
				var numeroaleatorio=Math.floor((Math.random()*3)+0);
				animacionentradaimagenadfo="entradaimg"+numeroaleatorio;
			}
			else{
							animacionentradaimagenadfo=opciones.animacionentrada;
			}
	
			$("#imagencontenedor").css({
            "-webkit-animation": animacionentradaimagenadfo +" "+tiempoanimacionadfo+"s 1 linear",
            "-moz-animation": animacionentradaimagenadfo +" "+tiempoanimacionadfo+"s 1 linear",
            "-o-animation": animacionentradaimagenadfo +" "+tiempoanimacionadfo+"s 1 linear",
            "animation": animacionentradaimagenadfo +" "+tiempoanimacionadfo+"s 1 linear"
});	
			e.preventDefault();
			$(".contenedorimagen").mouseover(function(e) {
            
			if($(window).width()<=990){
				$(".tituloimagenadfo").css("display","inherit");
			$(".infoimagenadfo").css("display","inherit");
			}else{
			$(".tituloimagenadfo").fadeIn(150);
			$(".infoimagenadfo").fadeIn(150);
			}
        });
		$(".contenedorimagen").mouseleave(function(e) {
			if($(window).width()<=990){
				$(".tituloimagenadfo").css("display","inherit");
			$(".infoimagenadfo").css("display","inherit");
			}else{
            $(".tituloimagenadfo").fadeOut(150);
			$(".infoimagenadfo").fadeOut(150);
			}
        }); 
		//permite que nuestra galeria sea responsive
			$(window).resize(function(e) {
			iniciosgaleriaadfo();
			altoanchoimagenadfo();
						if($(window).width()<=990){
				$(".tituloimagenadfo").css("display","inherit");
			$(".infoimagenadfo").css("display","inherit");
			}else{
$(".tituloimagenadfo").css("display","none");
			$(".infoimagenadfo").css("display","none");
			}
	});
		//cerrar sesion
		$("#cerrargaleriaadfo").click(function(e) {
            $(".galeriaadfo").remove();
			$("#imagencontenedor").attr("src","img/loading.gif");  
			$("body").removeAttr("style");
        });
		//siguiente
		$("#siguienteimagenadfo").click(function(e) {
               	
			 $("#imagencontenedor").removeAttr("style");
			 if(opciones.transicion=="azar"){ 
			 var numeroaleatorio=Math.floor((Math.random()*4)+0);
			 transicionimagenadfo=arraytransicionadfo[numeroaleatorio];
			 }
			 else{
				 transicionimagenadfo=opciones.transicion;
			 }
			 if(opciones.cambioimagen=="animacion")
			 {
				if(opciones.animacioncambioimagen=="azar"){
					var numeroaleatorio=Math.floor((Math.random()*2)+0);
					animacionimagenadfo=arrayanimacioncambioadfo[numeroaleatorio];
				}else{
					animacionimagenadfo=opciones.animacioncambioimagen;
				}
							 $("#imagencontenedor").css({
				 	"-webkit-filter": "blur(10px)",  /* Chrome - Safari */
"-moz-filter": "blur(10px)",  /* Firefox */
"-ms-filter": "blur(10px)", /* IE9 */
"-o-filter": "blur(10px)",  /* Opera */
            "-webkit-animation": animacionimagenadfo+"salidader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-moz-animation": animacionimagenadfo+"salidader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-o-animation": animacionimagenadfo+"salidader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "animation": animacionimagenadfo+"salidader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo
});
			 }
			 else{
				  $("#imagencontenedor").css({
					  "transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-webkit-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-moz-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-o-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo
});
				 
			 }
			setTimeout(function(){
				$("#imagencontenedor").removeAttr("style");
				$("#imagencontenedor").css("display","none");
			indiceimagenadfo=indiceimagenadfo+1;
			if(indiceimagenadfo<=totalimagenesadfo){
			$("#imagencontenedor").attr("src",$("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("href"));
			$("#nombreimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("id"));
			$("#albumimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("data-title"));
			$("#descripcionimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("title"));
			$("#posicionimagenadfo").html(""+parseInt(indiceimagenadfo+1));
			$("#imagencontenedor").error(function(e) {
              $("#imagencontenedor").attr("src","img/imagennodisponibleadfo.jpg");  
            });
			}
			else{
				indiceimagenadfo=0;
			$("#imagencontenedor").attr("src",$("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("href"));
			$("#nombreimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("id"));
			$("#albumimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("data-title"));
			$("#descripcionimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("title"));
			$("#posicionimagenadfo").html(""+parseInt(indiceimagenadfo+1));
			$("#imagencontenedor").error(function(e) {
              $("#imagencontenedor").attr("src","img/imagennodisponibleadfo.jpg");  
            });
			
			}
          altoanchoimagenadfo();
		  $("#imagencontenedor").css("display","inherit");
 if(opciones.cambioimagen=="animacion")
			 {
				if(opciones.animacioncambioimagen=="azar"){
					var numeroaleatorio=Math.floor(Math.random()*2);
					animacionimagenadfo=arrayanimacioncambioadfo[numeroaleatorio];
				}else{
					animacionimagenadfo=opciones.animacioncambioimagen;
				}
							 $("#imagencontenedor").css({
            "-webkit-animation": animacionimagenadfo+"entradader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-moz-animation": animacionimagenadfo+"entradader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-o-animation": animacionimagenadfo+"entradader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "animation": animacionimagenadfo+"entradader "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo
});
			 }
			 else{
				  $("#imagencontenedor").css({
					  "transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-webkit-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-moz-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-o-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo
});
				 
			 }	
			},opciones.duracionanimacion);
				
			
        });
		//atras
		$("#atrasimagenadfo").click(function(e) {
			 $("#imagencontenedor").removeAttr("style");
if(opciones.transicion=="azar"){ 
			 var numeroaleatorio=Math.floor((Math.random()*4)+0);
			 transicionimagenadfo=arraytransicionadfo[numeroaleatorio];
			 }
			 else{
				 transicionimagenadfo=opciones.transicion;
			 }
			 if(opciones.cambioimagen=="animacion")
			 {
				if(opciones.animacioncambioimagen=="azar"){
					var numeroaleatorio=Math.floor((Math.random()*2)+0);
					animacionimagenadfo=arrayanimacioncambioadfo[numeroaleatorio];
				}else{
					animacionimagenadfo=opciones.animacioncambioimagen;
				}
							 $("#imagencontenedor").css({
				 	"-webkit-filter": "blur(10px)",  /* Chrome - Safari */
"-moz-filter": "blur(10px)",  /* Firefox */
"-ms-filter": "blur(10px)", /* IE9 */
"-o-filter": "blur(10px)",  /* Opera */
            "-webkit-animation": animacionimagenadfo+"salidaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-moz-animation": animacionimagenadfo+"salidaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-o-animation": animacionimagenadfo+"salidaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "animation": animacionimagenadfo+"salidaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo
});
			 }
			 else{
				  $("#imagencontenedor").css({
					  "transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-webkit-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-moz-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-o-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo
});
				 
			 }	
			setTimeout(function(){
				$("#imagencontenedor").removeAttr("style");
				$("#imagencontenedor").css("display","none");
			indiceimagenadfo=indiceimagenadfo-1;
			if(indiceimagenadfo>=0){
			$("#imagencontenedor").attr("src",$("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("href"));
			$("#nombreimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("id"));
			$("#albumimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("data-title"));
			$("#descripcionimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("title"));
			$("#posicionimagenadfo").html(""+parseInt(indiceimagenadfo+1));
			$("#imagencontenedor").error(function(e) {
              $("#imagencontenedor").attr("src","img/imagennodisponibleadfo.jpg");  
            });
			}
			else{
				indiceimagenadfo=parseInt($("."+claseimagenadfo).length-1);
			$("#imagencontenedor").attr("src",$("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("href"));
			$("#nombreimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("id"));
			$("#albumimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("data-title"));
			$("#descripcionimagenadfo").html($("."+claseimagenadfo+":eq("+indiceimagenadfo+")").attr("title"));
			$("#posicionimagenadfo").html(""+parseInt(indiceimagenadfo+1));
			$("#imagencontenedor").error(function(e) {
              $("#imagencontenedor").attr("src","img/imagennodisponibleadfo.jpg");  
            });
			}
          altoanchoimagenadfo();
		  $("#imagencontenedor").css("display","inherit");
		  $("#imagencontenedor").css("display","inherit");
 if(opciones.cambioimagen=="animacion")
			 {
				if(opciones.animacioncambioimagen=="azar"){
					var numeroaleatorio=Math.floor(Math.random()*2);
					animacionimagenadfo=arrayanimacioncambioadfo[numeroaleatorio];
				}else{
					animacionimagenadfo=opciones.animacioncambioimagen;
				}
							 $("#imagencontenedor").css({
            "-webkit-animation": animacionimagenadfo+"entradaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-moz-animation": animacionimagenadfo+"entradaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "-o-animation": animacionimagenadfo+"entradaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo,
            "animation": animacionimagenadfo+"entradaizq "+tiempoanimacionadfo+"s 1 "+transicionimagenadfo
});
			 }
			 else{
				  $("#imagencontenedor").css({
					  "transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-webkit-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-moz-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo,
"-o-transition":"All "+tiempoanimacionadfo+"s "+transicionimagenadfo
});
				 
			 }
			},opciones.duracionanimacion);
        });
        });
		
});
};
})(jQuery)

//FUNCIONES
function altoanchoimagenadfo()
{
	var anchoimagen,altoimagen,anchocontenedor,altocontenedor,ratio,ratio2;
	    $("#imagencontenedor").css({"height":"100%","width":"auto"});
		anchocontenedor=$(".contenedorimagen").width();
		altocontenedor=$(".contenedorimagen").height();
		anchoimagen=$("#imagencontenedor").width();
		altoimagen=$("#imagencontenedor").height();
		ratio=anchoimagen/altoimagen;
		
		if(anchoimagen>0 && altoimagen>0)
		{
			if(anchoimagen>=anchocontenedor){
			//$("#imagencontenedor").width(anchocontenedor);
			//$("#imagencontenedor").height(altoimagen);
			$("#imagencontenedor").removeAttr("style");
			$("#imagencontenedor").css({"width":"100%","height":"auto"});
			$("#imagencontenedor").css({"left":"0px"});
			altoimagen=$("#imagencontenedor").height();
			var top=(altocontenedor-altoimagen)/2;
			$("#imagencontenedor").css({"top":top+"px"});
			ratio2=anchocontenedor/altoimagen;
		}
		else{
			var left=(anchocontenedor-anchoimagen)/2;
			$("#imagencontenedor").css({"left":left+"px"});
			ratio2=ratio;
		}
		}
		else{
			$("#imagencontenedor").width(anchocontenedor);
			$("#imagencontenedor").height(altoimagen);
			$("#imagencontenedor").css({"left":"0px"});
			ratio2=anchocontenedor/altoimagen;
		}
}
function iniciosgaleriaadfo(){	
//IMAGEN

var anchoimagen,altoimagen,anchocontenedor,altocontenedor;
		anchocontenedor=$(".contenedorimagen").width();
		altocontenedor=$(".contenedorimagen").height();
		anchoimagen=$("#imagencontenedor").width();
		altoimagen=$("#imagencontenedor").height();
		if(anchoimagen>0 && altoimagen>0)
		{
			if(anchoimagen>=anchocontenedor){
			$("#imagencontenedor").width(anchocontenedor);
			$("#imagencontenedor").height(altoimagen);
			$("#imagencontenedor").css({"left":"0px"});
		}
		else{
			var left=(anchocontenedor-anchoimagen)/2;
			$("#imagencontenedor").css({"left":left+"px"});
		}
		}
		else{
			$("#imagencontenedor").width(anchocontenedor);
			$("#imagencontenedor").height(altoimagen);
			$("#imagencontenedor").css({"left":"0px"});
		}
		//INTERNO DEL CONTENEDOR
		var altotitulo,altodescripcion;
		altotitulo=$(".tituloimagenadfo").outerHeight();
		altodescripcion=$(".infoimagenadfo").outerHeight();
		var atrassiguiente=altocontenedor-altotitulo-altodescripcion;
		$("#atrasimagenadfo").css({"top":altotitulo+"px","height":atrassiguiente+"px"});
		$("#siguienteimagenadfo").css({"top":altotitulo+"px","height":atrassiguiente+"px"});
		var topflizq,topflder;
		topflizq=(atrassiguiente-$(".flechaadfoizq").height())/2;
		topflder=(atrassiguiente-$(".flechaadfoder").height())/2;
		$(".flechaadfoder").css({"margin-top":topflder+"px"});
		$(".flechaadfoizq").css({"margin-top":topflizq+"px"});			
}