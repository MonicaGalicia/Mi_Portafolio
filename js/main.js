$(document).ready(function() {

  setTimeout(function() {
    $(".texto-animado").removeClass("hidden");
  }, 500);

  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 6000);
  });

  var alturaSeccionDos = $(".secDos").position().top;
  $(window).scroll(function(e) {
    var alturaActual = $(window).scrollTop();
    if ((alturaActual + 200) >= alturaSeccionDos) {
      console.log("AQUIII")
      $("#seccionDos").addClass("animated bounceInDown")
        //$("#seccionDos").css("transform", "translateX(-200px) translateY(-200px)")
    }
  });

  var alturaSeccionTres = $(".secTres").position().top;
  $(window).scroll(function(e) {
    var alturaActual2 = $(window).scrollTop();
    if ((alturaActual2 + 300) >= alturaSeccionTres) {
      $("#seccionTres").addClass("animated bounceInDown")
        //$("#seccionDos").css("transform", "translateX(-200px) translateY(-200px)")
    }
  });
});









