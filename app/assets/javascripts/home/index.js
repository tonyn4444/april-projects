$(document).ready(function(){
  
showThem();

function timeOut(){
  $("#mainSectionTitle").removeClass("animate-inLeft")
 };

function showThem(){
  $(".opacityLayer").each(function(i) {
    setTimeout(function() {
      $(".opacityLayer").eq(i).addClass("opacityLayerIn");
    }, 300 * i);
  });
}


    $(".categoryList").on("click", function(event){
    var target = $(event.target);
    var targetAttr = target.attr('data-name');
      if( target.is( "li" ) ){
         target.addClass("selected").siblings().removeClass("selected");
        loadContent(targetAttr);
    }    
})

function loadContent(value){
  $(".gallery").load(value +".html", showThem);
    $("#mainSectionTitle").addClass("animate-inLeft");
    $(".wrapper h1").text(value);
    setTimeout(timeOut, 700);
}
});